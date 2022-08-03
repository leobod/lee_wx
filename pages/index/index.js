// index.js
Page({
  data: {
    moto: '探索的欲望是发展想象的起点'

  },

  /**
   * 页面跳转到案例页面
   */
  onGotoDemo: function() {
    wx.redirectTo({
      url: '../account/index'
    })
  },

  /**
   * 页面跳转到工具
   */
  onGotoTool: function() {
    wx.redirectTo({
      url: '../account/index'
    })
  },

  /**
   * 页面跳转到我的
   */
  onGotoMy: function() {
    wx.redirectTo({
      url: '../account/index'
    })
  },

  onLoad() {
  }
})
