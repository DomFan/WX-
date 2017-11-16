// index.js 上传文件页面

let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 'admin',
    userPassword: null,
    sellerName: '', //商户名称
    sellerAddress: '', //商户地址
    sellerPerson: '', //联系人
    sellerPhone: '', //电话
    imageurl: '',
    url: '',
    urls: new Array(10),
    nameArr: ["营业执照", "组织代码证", "法人持证件照", "身份证正面", "身份证反面", "特殊资质一", "特殊资质二", "特殊资质三", "特殊资质四", "特殊资质五"]
  },

  /* 获取input输入值 */
  /* 商户 */
  nameinput: function (e) {
    this.setData({
      sellerName: e.detail.value
    })
  },
  /* 地址 */
  addressinput: function (e) {
    this.setData({
      sellerAddress: e.detail.value
    })
  },
  /* 联系人 */
  personinput: function (e) {
    this.setData({
      sellerPerson: e.detail.value
    })
  },
  /* 电话 */
  phoneinput: function (e) {
    this.setData({
      sellerPhone: e.detail.value
    })
  },
  
  /**上传图片 0 */
  uploadpic0: function(){
    app.uploadpic(0, this.data.urls, this.data.nameArr[0], this.data.userId)
    /*
    wx.chooseImage({
      success: function(res){
      
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
            console.log(data)
            that.setData({
              imageurl: filePath
            })
          }
        })

      }
    })
    */
    /** */
    // var urls = this.data.urls,
    //     index = 0
    // wx.chooseImage({
    //   count: 1, // 默认9
    //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //   success(res) {
    //     const src = res.tempFilePaths[0]
    //     // console.log(src, res, urls)

    //     // urls 清除第一个元素 添加元素
    //     if(urls[index]){
    //       urls.splice(index, 1, src)
    //     }else {
    //       urls.push(src)
    //     }
    //     /**
    //     wx.redirectTo({
    //       url: `../pic/pic?src=${src}`,
    //       success: function(){
    //         urls.push(src)
    //         that.setData({
    //           urls: urls
    //         })
    //         console.log(that.data.urls)
    //       }
    //     })
    //     */
    //   }
    // })
    
  },

  /*
  * 点击预览 0
  */
  lookpic0: function() {
    app.lookpic(0, this.data.urls)
  },
  /**
   * 上传图片 1
   */
  uploadpic1: function () {
    app.uploadpic(1, this.data.urls, this.data.nameArr[1], this.data.userId)
  },

  /**点击预览 1 */
  lookpic1: function(){
    app.lookpic(1, this.data.urls)
    // console.log('预览 1111')
  },
  uploadpic2: function () {
    app.uploadpic(2, this.data.urls, this.data.nameArr[2], this.data.userId)
  },
  lookpic2: function () {
    app.lookpic(2, this.data.urls)
  },
  uploadpic3: function () {
    app.uploadpic(3, this.data.urls, this.data.nameArr[3], this.data.userId)
  },
  lookpic3: function () {
    app.lookpic(3, this.data.urls)
  },
  uploadpic4: function () {
    app.uploadpic(4, this.data.urls, this.data.nameArr[4], this.data.userId)
  },
  lookpic4: function () {
    app.lookpic(4, this.data.urls)
  },
  uploadpic5: function () {
    app.uploadpic(5, this.data.urls, this.data.nameArr[5], this.data.userId)
  },
  lookpic5: function () {
    app.lookpic(5, this.data.urls)
  },
  uploadpic6: function () {
    app.uploadpic(6, this.data.urls, this.data.nameArr[6], this.data.userId)
  },
  lookpic6: function () {
    app.lookpic(6, this.data.urls)
  },
  uploadpic7: function () {
    app.uploadpic(7, this.data.urls, this.data.nameArr[7], this.data.userId)
  },
  lookpic7: function () {
    app.lookpic(7, this.data.urls)
  },
  uploadpic8: function () {
    app.uploadpic(8, this.data.urls, this.data.nameArr[8], this.data.userId)
  },
  lookpic8: function () {
    app.lookpic(8, this.data.urls)
  },
  uploadpic9: function () {
    app.uploadpic(9, this.data.urls, this.data.nameArr[9], this.data.userId)
  },
  lookpic9: function () {
    app.lookpic(9, this.data.urls)
  },

  /*
  * 确认提交
  */
  submitcfm: function (e) {
    wx.navigateTo({
      url: '../submitSuccess/submitSuccess',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**表单提交 */
  formSubmit: function(e) {
    console.log(this.data, e.detail.value)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

})
