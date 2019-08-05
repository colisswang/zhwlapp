import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)

app.$mount()

export default{
  config: {
		  pages: ['^pages/index/index'],
		  'window': {
      'navigationBarBackgroundColor': '#ffffff',
      'navigationBarTextStyle': 'black',
      'navigationBarTitleText': '智汇物流',
      'backgroundColor': '#eeeeee',
      'backgroundTextStyle': 'light'
    },
    'tabBar': {
          	selectedColor: '#2687F2',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/tabs/home.png',
          selectedIconPath: 'static/tabs/home-active.png'
        },
        {
          	pagePath: 'pages/inquirylist/index',
          	text: '用户中心',
          	iconPath: 'static/tabs/usercenter.png',
          selectedIconPath: 'static/tabs/usercenter-active.png'
        },
        {
          pagePath: 'pages/contactus/index',
          text: '联系我们',
          iconPath: 'static/tabs/callme.png',
          selectedIconPath: 'static/tabs/callme-active.png'
        }]
    }
  }
}
