// pages/demo/qrcode/index.js

import Notify from 'vant-weapp/notify/notify';

Page({
  data: {},

  onScan: function () {
    wx.scanCode({
      onlyFromCamera: false, // 是否只能使用相机
      scanType: ["barCode", "qrCode"], // 扫码类型
      success: this.onSuccessScan, // 扫码成功的回调
      fail: this.onFailScan, // 扫码失败的回调
    });
  },

  onSuccessScan: function (val) {
    console.log(val);
    Notify(`二维码内容:  ${val.result} `)
    // 标准返回格式
    // {
    //   charSet: "utf-8";
    //   codeVersion: 3;
    //   errMsg: "scanCode:ok";
    //   rawData: "aHR0cDovL2JhaWR1LmNvbQ==";
    //   result: "http://baidu.com";
    //   scanType: "QR_CODE";
    // }
  },

  onFailScan: function (val) {
    console.log(val);
    Notify(`错误提示: ${val.errMsg} `)
    // 扫码失败的结果
    // {
    //   errMsg: "scanCode:fail cancel"
    // }
  },

  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {},
});
