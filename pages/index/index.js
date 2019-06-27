//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    clientHeight:'',
    isHide:false,
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  // 页面渲染后执行
  onLoad: function () {
    var that = this;
    //查看是否授权
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              // console.log("用户的信息：", res.userInfo);
              app.globalData.userInfo = res.userInfo; //将用户信息赋值给全局对象globalData中
                // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                // 根据自己的需求有其他操作再补充
                // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                wx.login({
                  success:res =>{
                    // console.log("用户的code：",res.code);
                    //可以将code传给后台，再经过解析获取用户的openid
                    //或者可以直接使用微信提供的接口获取 openid ，如下：
                    var appId = '...';
                    var secret = '...';
                    //  wx.request({
                    //     // 自行补上自己的 APPID 和 SECRET
                    //   //  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code',//报错：不在一下合法域名列表，所以推荐传code给后台，让后台去请求微信的官方接口获得openId和session-key
                    //    header: {
                    //      'content-type': 'json'
                    //    },
                    //   success: res => {
                    //       // 获取到用户的 openid
                    //       console.log("用户的openid:" + res);
                    //   }
                    // });
                  }
                })
            }
          })
        }else{
          // 用户没有授权，改变 isHide 的值，显示授权页面
          that.setData({
            isHide:true
          })
        }
      }
    }),

    wx.getSystemInfo({ //获取系统信息
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight/3
        });
      }
    })
  },


   bindGetUserInfo: function (e) {//这里授权获取用户信息和登录获取用户信息是一致的
     if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      //  console.log("用户的信息：",e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
       app.globalData.userInfo = e.detail.userInfo; //将用户信息赋值给全局对象globalData中
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
           
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }


})
