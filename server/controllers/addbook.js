const https = require('https')
//引入库
const {mysql}=require('../qcloud')
//新增图书
//1.获取豆瓣信息
//2.入库
module.exports = async(ctx)=>{
	const {isbn,openid}=ctx.request.body
	console.log('添加图书',isbn,openid)
	if(isbn && openid){
		//不允许重复,判重操作
		const findRes = await mysql('books').select().where('isbn',isbn)
		if (findRes.length){
			ctx.state ={
				code:-1,
				data:{
					msg:'图书已存在'
				}
			}
			return
		}
		let url = 'https://api.douban.com/v2/book.isbn'+isbn
		const bookinfo = await getJSON(url)
		console.log('获取豆瓣完整的信息')
		console.log(bookinfo)
		const rate = bookinfo.rating.average
		const {title,image,alt,publisher,summary,price}=bookinfo
		//处理数组
		const tags = bookinfo.tags.map(v=>{
			return `${v.title} ${v.count}`
		}).join(',')
		const author = bookinfo.author.join(',')
		//数据同步至数据库
		try{
			await mysql('books').insert({
				isbn,openid,rate,title,image,alt,publisher,summary,price,tags,author
			})
			//回写成功,返回一个返回值
			ctx.state.data = {
				title,
				msg:'success'
			}
		}catch(e){
			ctx.state = {
				code:-1,
				data:{
					msg:'新增失败:' + e.sqlMessage
				}
			}
		}
	}
}

//工具函数库=>用原生的nood.js下载一个豆瓣图书信息
function getJSON(url) {
	return new Promise((reslove,reject)=>{
		https.get(url,res=>{
			let urlData = ''
			res.on('data',data=>{
				urlData+=data
			})
			res.on('end',data=>{
				//最后的值是拼接好的信息
				const bookinfo = JSON.parse(urlData)
				if(bookinfo.title){
					reslove(bookinfo)
				}
				reject(bookinfo)
			})
		})
	})
}