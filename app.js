//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 微信登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  getImage: function () {
    console.log(1111111)
  },

  /**上传图片  */
  uploadpic: function (index, urls, indexName, userId) { // 索引，本地图片地址， 当前栏， 用户ID
    // 选择图片
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        // urls 清除元素 添加元素
        urls.splice(index, 1, src)

        console.log(res.tempFilePaths)
        console.log(src)
        // 上传文件
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload',
          filePath: src,
          name: indexName,
          header: {},
          formData: {
            id: userId 
          },
          success: function(res) {
            console.log(name, this.formData)
          },
          fail: function(res) {
            console.log(res, 'fail', name, this.formData, this.filePath)
            //{errMsg: "uploadFile:fail Error: connect ECONNREFUSED 192.157.208.178:443"}errMsg: "uploadFile:fail Error: connect ECONNREFUSED 192.157.208.178:443"__proto__: Object "fail" "" undefined undefined
          },
          complete: function(res) {},
        })

      }
    })
  },

  /**预览图片 */
  lookpic: function (index, urls) {
    console.log(urls[index])
    if (urls[index]){
      wx.previewImage({
        current: urls[index],
        urls: urls,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.showToast({
        title: '请先上传文件',
        icon: 'loading',
        image: '',
        duration: 1000,
        mask: false,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    

    /** 
    wx.navigateTo({
      url: '../pic/pic',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    */
  },

})