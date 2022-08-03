
const request = function(opts) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: opts.url,
      method: opts.method || 'GET',
      data: opts.data || {},
      success: resolve,
      fail: reject
    })
  })
}

export {
  request
}
