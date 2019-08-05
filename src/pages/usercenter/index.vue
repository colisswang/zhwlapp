<template>
  <div>
      <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="doLogin">获取用户信息</button>
  </div>
</template>

<script>

import qcloud from 'wafer2-client-sdk'
import {showSuccess} from '@/utils'

export default {
  doLogin: function () {
    const session = qcloud.Session.get()

    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          // util.showModel('登录错误', err.message)
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          // util.showModel('登录错误', err.message)
        }
      })
    }
  }
}
</script>

<style>
</style>