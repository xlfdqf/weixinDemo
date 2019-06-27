const app = getApp()

Page({
  data: {
    username:"",
    avatarUrl: ''
  },
  onLoad: function () {
    this.setData({
      username: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
    })
  },
  next:function(){
    console.log('next')
    wx.switchTab({ //tabBar页面跳转
      url: '../index/index',
    })
  }
})