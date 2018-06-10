//index.js
//获取应用实例
var starscore = require("../../templates/starscore/starscore.js");
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3500,
    duration: 1500,
    loadingMore: false, // loading中
    isEnd: false, //到底啦
    userInfo: {},
    swiperCurrent: 0,
    recommendTitlePicStr: '',
    categories: [],
    activeCategoryId: 0,
    goodsList: [], //按类别的商品
    recommendGoods: [], //推荐商品
    recommendGoodsShow: [], //显示的推荐商品，为了缓解网络加载压力设置每次加载15个推荐商品
    banners: [],
    showNoBanners: false,
    loadingMoreHidden: true,
    page: [],  //加载商品时的页数默认为1开始,在app页面加载
    pageSize: [],  //每页商品数设置为5000确保能全部加载商品，在app页面加载
    stv: {
      windowWidth: 0,
      windowHeight: 0,
    },
    height: []
  },
  onLoad: function () {
    var that = this
    that.setData({
      goodsList: app.globalData.goodsList,
      pageSize: app.globalData.pageSize,
      page: app.globalData.page,
      recommendGoodsShow: [],
      background_color: app.globalData.globalBGColor,
      bgRed: app.globalData.bgRed,
      bgGreen: app.globalData.bgGreen,
      bgBlue: app.globalData.bgBlue
    })
    that.getRecommendTitlePicStr();
    wx.setNavigationBarTitle({
      title: '果果精选',
    })
    that.getBanners();
    that.getNotice();
    that.getAppRecommendGoodsList()
    that.getRGshow()
    try {
      var res = wx.getSystemInfoSync()
      console.log('system information', res)
      if (that.data.noticeList) {
        that.setData({
          stv: {
            windowsWidth: res.windowWidth,
            windowsHeight: res.windowHeight
          },
          height: (750 / res.windowWidth) * res.windowHeight - 100
        })
      } else {
        that.setData({
          stv: {
            windowsWidth: res.windowWidth,
            windowsHeight: res.windowHeight
          },
          height: (750 / res.windowWidth) * res.windowHeight
        })
      }

    } catch (e) {

    }
    console.log('stv', that.data.stv, that.data.height)
  },
  onShow: function () {
    var that = this

  },
  onPullDownRefresh: function () {
    var that = this
    that.setData({
      loadingMore: true,
      isEnd: false
    })
    wx.showNavigationBarLoading()
    that.onLoad()
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },
  onShareAppMessage: function () {
    return {
      title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
      path: '/pages/finder/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onReachBottom: function(){
    var that = this
    that.getRGshow()
  },

  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },
  tapBanner: function (e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
      })
    }
  },
  getRecommendTitlePicStr: function () {
    var that = this;
    //  获取商城名称
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/config/get-value',
      data: {
        key: 'finderRecommendTtile'
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            recommendTitlePicStr: res.data.data.value
          })
          console.log('recommendTitlePicStr------------------')
          console.log(res.data.data.value)
          console.log('ok')
        }
      },
      fail: function () {
        console.log('fail')
      },
    })
  },
  // 从app页面的goodsList中获取推荐商品
  getAppRecommendGoodsList: function () {
    var that = this
    var goods = app.globalData.goods
    var recommendGoods = []
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].recommendStatus === 1) {
        recommendGoods.push(goods[i])
      }
    }
    that.setData({
      recommendGoods: recommendGoods
    })
    console.log('recommendGoods:', recommendGoods)
  },
  getNotice: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/notice/list',
      data: { pageSize: 7 },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            noticeList: res.data.data
          });
        }
      }
    })
  },
  getBanners: function () {
    var that = this
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/banner/list',
      data: {
        key: 'mallName'
      },
      success: function (res) {
        console.log("请求banners返回代码", res.data.code)
        if (res.data.code === 0) {
          that.setData({
            banners: res.data.data
          });
        } else if ((res.data.code === 404) || (res.data.code === 700) || (res.data.code === 701)) {
          that.setData({
            showNoBanners: true
          })

        } else {
          that.setData({
            showNoBanners: true
          })
          that.showPopup('.banners_warn_Popup')
        }
      }
    })
  },
  getRGshow: function () {
    var that = this;
    if (that.data.isEnd) {
      console.log('isEnd, return...')
      return;
    }
    console.log('notEnd, continue')
    that.setData({
      loadingMore: true
    })
    var pageSize = 10; //一次加载万所有的推荐商品，避免minui显示问题that.data.recommendGoods.length
    var recommendGoodsShow = that.data.recommendGoodsShow;
    var rgShowLen = recommendGoodsShow.length;
    console.log('rgShowLen', rgShowLen)
    if (rgShowLen + pageSize <= that.data.recommendGoods.length) {
      for (var i = rgShowLen; i < rgShowLen + pageSize; i++) {
        recommendGoodsShow.push(that.data.recommendGoods[i])
      }

      
      that.setData({
        recommendGoodsShow: recommendGoodsShow
      })

      if (recommendGoodsShow.length < that.data.recommendGoods.length) {
        that.setData({
          loadingMore: false,
        })
      } else {
        that.setData({
          loadingMore: false,
          isEnd: true
        })
      }
      console.log(recommendGoodsShow.length, '-=-=-=-=-=-=-=')
    } else if (rgShowLen < that.data.recommendGoods.length) {
      for (var i = rgShowLen; i < that.data.recommendGoods.length; i++) {
        recommendGoodsShow.push(that.data.recommendGoods[i])
      }
      //虚拟加载特效

      that.setData({
        recommendGoodsShow: recommendGoodsShow,
        loadingMore: false,
        isEnd: true
      })

      console.log(recommendGoodsShow.length, '-=-=-=-=-=-=-=')
    }
  },
  handlerStart(e) {
    console.log('handlerStart')
    let { clientX, clientY } = e.touches[0];
    this.startX = clientX;
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.data.stv.tStart = true;
    this.tapStartTime = e.timeStamp;
    this.setData({ stv: this.data.stv })
  },
  handlerMove(e) {
    console.log('handlerMove')
    let { clientX, clientY } = e.touches[0];
    let { stv } = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    stv.offset += offsetX;
    if (stv.offset <= 0) {
      stv.offset = 0;
    } else if (stv.offset >= stv.windowWidth * (this.tabsCount - 1)) {
      stv.offset = stv.windowWidth * (this.tabsCount - 1);
    }
    this.setData({ stv: stv });
  },
  handlerCancel(e) {

  },
  handlerEnd(e) {
    console.log('handlerEnd')
    let { clientX, clientY } = e.changedTouches[0];
    let endTime = e.timeStamp;
    let { tabs, stv, activeTab } = this.data;
    let { offset, windowWidth } = stv;
    //快速滑动
    if (endTime - this.tapStartTime <= 300) {
      console.log('快速滑动')
      //判断是否左右滑动(竖直方向滑动小于50)
      if (Math.abs(this.tapStartY - clientY) < 50) {
        //Y距离小于50 所以用户是左右滑动
        console.log('竖直滑动距离小于50')
        if (this.tapStartX - clientX > 5) {
          //向左滑动超过5个单位，activeTab增加
          console.log('向左滑动')

        } else if (clientX - this.tapStartX > 5) {
          //向右滑动超过5个单位，activeTab减少
          console.log('向右滑动')

        }
        stv.offset = stv.windowWidth * activeTab;
      } else {
        //Y距离大于50 所以用户是上下滑动
        console.log('竖直滑动距离大于50')

      }
    } else {

    }
    stv.tStart = false;
    this.setData({ stv: this.data.stv })
  },
  showPopup(PopupClassname) {
    let popupComponent = this.selectComponent(PopupClassname);
    popupComponent && popupComponent.show();
  }
})
