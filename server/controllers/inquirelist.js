//引入数据库
const {mysql}=require('../qcloud')

//中间件
module.exports = async(ctx)=>{
	//查询所有记录
	const inquire = await mysql('books').select('*').orderby('id','desc')
	ctx.state.data ={
		list:books
	}
}