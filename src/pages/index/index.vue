<template>
  <div class = "container">

   <div>
       <image class='nav_img' src="../../static/images/nav.png"></image>
   </div>

   <div>
   <i-grid>

    <i-grid-item @click='OnlineInquiry'>
        <i-grid-icon>
            <image src="../../static/images/在线询价.png" />
        </i-grid-icon>
        <i-grid-label>在线询价</i-grid-label>
    </i-grid-item>

    <i-grid-item  @click='OnlineBooking'>
        <i-grid-icon>
            <image src="../../static/images/在线询价.png" />
        </i-grid-icon>
        <i-grid-label>快速订舱</i-grid-label>
    </i-grid-item>

    <i-grid-item  @click='CargoTracking'>
        <i-grid-icon>
            <image src="../../static/images/货物.png" />
        </i-grid-icon>
        <i-grid-label>货物跟踪</i-grid-label>
    </i-grid-item>

   </i-grid>

   <i-grid>

    <i-grid-item  @click='ShipmentQuery'>
        <i-grid-icon>
            <image src="../../static/images/订单跟踪.png" />
        </i-grid-icon>
        <i-grid-label>船期查询</i-grid-label>
    </i-grid-item>

    <i-grid-item  @click='OnlineSingle'>
        <i-grid-icon>
            <image src="../../static/images/货物记录.png" />
        </i-grid-icon>
        <i-grid-label>自助办单</i-grid-label>
    </i-grid-item>

    <i-grid-item  @click='InquiryCenter'>
        <i-grid-icon>
            <image src="../../static/images/询价.png" />
        </i-grid-icon>
        <i-grid-label>询价中心</i-grid-label>
    </i-grid-item>

   </i-grid>
   </div>

  </div>
</template>

<script>
export default {

  data(){

  },

  methods:{

    OnlineInquiry(){
      console.log("在线询价")
      wx.navigateTo({
        url: 'pages/inquiry/index',
        events:{
            //为指定事件添加一个监听器,获取被打开页面传送到当前业务的数据
            acceptDataFromOpenedPage: function(data) {
              console.log(data)
            },
            someEvent: function(data) {
              console.log(data)
            }
          },
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
          }
        })
    },

    OnlineBooking(){
      console.log("在线订舱")
    },

    CargoTracking(){
      console.log("货物跟踪")
    },

    ShipmentQuery(){
      console.log("船期查询")
    },

    OnlineSingle(){
      console.log("在线办单")
    },

    InquiryCenter(){
      console.log("询价中心")
    }
  },

  //生命周期
    //监听页面加载
    onLoad (option){
      // console.log(option.query)
      // const eventChannel = this.getOpenerEventChannel()
      // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
      // eventChannel.emit('someEvent', {data: 'test'});
      // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
      // eventChannel.on('acceptDataFromOpenerPage', function(data) {
      //   console.log(data)
      // })
    },

    //监听页面初次渲染完成
    onReady(){
    },

    //监听页面显示
    onShow(){
    },

    //监听页面隐藏
    onHide(){
    },

    //监听页面卸载
    onUnload(){
    },

    //页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh(){
    },

    //页面上拉触底事件的处理函数
    onReachBottom(){
    },

    //用户点击右上角分享
    onShareAppMessage(){
    }
}
</script>

<style>
.nav_img{
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
  width: 100%;
}
</style>