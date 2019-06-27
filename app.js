//app.js
App({
   // 小程序启动之后 触发
  onLaunch: function (options) {
    var that=this
    // console.log('222', that.globalData.userInfo)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    
    // 获取用户信息（用来首次进入授权，后续不再出现授权弹窗）
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onShow: function (options) {
    //  console.log('onShow', options)
     },
  onHide: function (options) {
    //  console.log('onHide', options) 
     },
  onError: function (options) {//发生脚本错误，或API调用失败
    //  console.log('onError', options) 
     },
  globalData: { //全局共享数据
    userInfo: ''
  },
})