<template>
  <div class="container">
    <p>{{userinfo.openId}}</p>
    <div class="userinfo" @click = 'login'>
      <img :src="userinfo.avatarUrl" alt="用户微信头像信息">
      <p>{{userinfo.nickName}}</p>
    </div>
  <YearProgress></YearProgress>
  <i-button @click='scanBook' type="success" shape="circle">扫一扫</i-button>
  <div v-if='userinfo.openId'>
    <view>扫码的内容:{{result}}</view>
  </div>
  <button open-type="getUserInfo" lang="zh_CN" @click='login'>获取用户信息</button>
  </div>
</template>

<script>
// 引用公共类
import {showSuccess,post,showModal} from '@/utils'
import qcloud from 'wafer2-client-sdk'
import config from '@/config'

// 引用组件,@默认在src下面
import YearProgress from '@/components/YearProgress'
export default {
  components: {
    YearProgress
  },

  data () {
    return {
      userinfo: {
        avatarUrl: '../../static/images/unlogin.png',
        nickName: '点击登录'
      }
    }
  },

  methods:{

    //新增图书
    async addBook(isbn){
      //新增一个路由
      const res = await post('/weapp/addBook',{
        isbn,
        openid:this.userinfo.openId
      })
      showModal('添加成功',`${res.title}添加成功`)
    },

    //扫一扫图书二维码
    scanBook(){
      wx.scanCode({
      success: (res) => {
        if (res.result){
          showModal('扫描图书',`${res.result}扫描成功`)
          this.addBook(res.result)
        }
      }
    })
  },

  // 手动点击登录小程序
  login () {
    // 设置登录地址
    let user = wx.getStorageSync('userinfo')
    const self = this
    console.log(user)
    if (!user) {
      console.log(config.loginUrl)
      qcloud.setLoginUrl(config.loginUrl)
      qcloud.login({
        success: function (userinfo) {
          qcloud.request({
            url: config.userinfo,
            login: true,
            success (userRes) {
              showSuccess('登录成功')
              wx.setStorageSync('userinfo', userRes.data.data)
              self.userinfo = userRes.data.data
              console.log('登录成功', userRes.data.data)
            }
          })
        },
        fail: function (err) {
          console.log('登录失败', err)
        }
      })
    }
  }
},

  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  },

  created () {
    this.userinfo = wx.getStorageSync('userinfo')
    console.log(this.userinfo)
  }
}
</script>

<style lang='scss'>
  .container{
    padding: 0 30rpx;
  }
  .userinfo{
    margin-top:100rpx;
    text-align:center;
    img{
      width:150rpx;
      height:150rpx;
      margin:20rpx;
      border-radius:50%;
    }
  }
</style>