//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  /**
* 用户点击右上角分享
*/
  onShareAppMessage() {
    return {
      title: '菜单页面'//分享内容
      // path: '/pages/my/my'//分享地址
    }
  }
})
