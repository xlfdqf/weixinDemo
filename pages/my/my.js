const app = getApp()

Page({
  data: {
    username:"用户登录",
    avatarUrl: '/images/avatarUrl.png'
  },
  onLoad: function () {

  },
  onShow:function(){
    this.setData({ // 解决第二次点击tabBar页面不刷新问题
      username: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
    })
    console.log(this.data.username)
  },
  next:function(){
    console.log('next')
    wx.switchTab({ //tabBar页面跳转
      url: '../index/index',
    })
  },
  /**
* 用户点击右上角分享
*/
  onShareAppMessage() {
    return {
      title: '我的页面'//分享内容
      // path: '/pages/my/my'//分享地址
    }
  }
})