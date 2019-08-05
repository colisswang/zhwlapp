// 工具函数库

// import config from './config'

// 调用API从本地缓存中获取数据
/*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

// 封装一个get方法,小批量数据传输
 export function get (url,data) {
    return request(url,'GET',data)
 }

//封装一个post方法,大批量数据处理
 export function post (url,data) {
    return request(url,'POST',data)
 }

 //封装get,psot的获取数据方式
 function request(url,method,data){
     return new Promise((resolve, reject) => {
     wx.request({
       data,
       method,
       url: config.host + url,
       success: function (res) {
         if (res.data.code === 0) {
           reslove(res.data.data)
         } else {
          showModal('失败',res.data.data.msg)
           reject(res.data)
         }
       }
     })
  })
 }

 //封装一个下程序弹框
 export function showModal(title,content){
  wx.showModal({
    title,
    content,
    showCancel:false
  })
 }

// 提示小程序登录成功
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
