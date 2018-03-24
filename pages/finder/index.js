//index.js
//获取应用实例
var starscore = require("../../templates/starscore/starscore.js");
var app = getApp()
Page({
  data: {
    page:1,
    pageSize:10000,
    searchInput:'',
    loadingHidden: false, // loading
    userInfo: {},
    categories: [],
    goods: [],
    scrollTop: 0,
    loadingMoreHidden: false,
    hasNoCoupons: true,
    couponsTitlePicStr:'',
    coupons: [],
  },
  
  onPullDownRefresh: function () {
    var that = this
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
  onLoad: function () {
    var that = this
    that.getCouponsTitlePicStr();
    /*
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    */
    /*wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
      success: function (res) {
        var categories = [{ id: 0, name: "全品类" }];
        if (res.data.code == 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            categories.push(res.data.data[i]);
          }
        }
        that.setData({
          categories: categories,
          activeCategoryId: 0
        });
        that.getGoodsList(that.data.activeCategoryId);
      }
    })*/
    that.getCoupons();
  },
  getCouponsTitlePicStr: function () {
    var that = this;
    //  获取商城名称
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/config/get-value',
      data: {
        key: 'couponsTitlePicStr'
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            couponsTitlePicStr: res.data.data.value
          })
          console.log('couponsTitlePicStr------------------')
          console.log(res.data.data.value)
          console.log('ok')
        }
      },
      fail: function () {
        console.log('fail')
      },
    })
  },
  //事件处理函数
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })
    
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },
  toSearch: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/search/index?keyword=' + this.data.searchInput,
    })
    console.log(e);
  },
  getGoodsList: function (categoryId) {
    if (categoryId == 0) {
      categoryId = "";
    }
    console.log(categoryId)
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
      data: {
        page: that.data.page,
        pageSize: that.data.pageSize,
        categoryId: categoryId
      },
      success: function (res) {
        that.setData({
          goods: [],
          loadingMoreHidden: true
        });
        var goods = [];
        if (res.data.code != 0 || res.data.data.length == 0) {
          that.setData({
            loadingMoreHidden: false,
            prePageBtn: false,
            nextPageBtn: true,
            toBottom: true
          });
          return;
        }
        for (var i = 0; i < res.data.data.length; i++) {
          goods.push(res.data.data[i]);
        }


        console.log('getGoodsList----------------------')
        console.log(goods)


        for (let i = 0; i < goods.length; i++) {
          goods[i].starscore = (goods[i].numberGoodReputation / goods[i].numberOrders) * 5
          goods[i].starscore = Math.ceil(goods[i].starscore / 0.5) * 0.5
          goods[i].starpic = starscore.picStr(goods[i].starscore)
          /*wx.request({
            url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/reputation',
            data: {
              goodsId: goods[i].id,
              page: that.data.page,
              pageSize: that.data.pageSize
            },
            success: function (res) {
              if (res.data.code === 0) {
                if (res.data.data.length < that.data.pageSize) {
                  goods[i].numberReputation = res.data.data.length;
                  console.log('goods:', i, 'reputationNum:', goods[i].numberReputation)
                  goods[i].starscore = (goods[i].numberGoodReputation / goods[i].numberReputation) * 5
                  goods[i].starscore = Math.ceil(goods[i].starscore / 0.5) * 0.5
                  goods[i].starpic = starscore.picStr(goods[i].starscore)
                }
                else {
                  goods[i].numberReputation = -1;
                }
              }
              else if (res.data.code === 700) {
                goods[i].numberReputation = 0;
                //console.log('goods:', i, 'reputationNum:', goods[i].numberReputation)
                goods[i].starscore = (goods[i].numberGoodReputation / goods[i].numberReputation) * 5
                goods[i].starscore = Math.ceil(goods[i].starscore / 0.5) * 0.5
                goods[i].starpic = starscore.picStr(goods[i].starscore)
              }
              that.setData({
                goods: goods,
              });
            },
            fail: function (res) {

            }
          })*/
        }
        console.log('getGoodsReputation----------------------')
        console.log(goods)

      }
    })
  },
  getCoupons: function () {
    wx.showLoading({
      title: '获取优惠券中···',
    })
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/coupons',
      data: {
        type: ''
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            hasNoCoupons: false,
            coupons: res.data.data
          });
          wx.showToast({
            title: '完成',
          })
        } else if (res.data.code == 700) {
          that.setData({
            hasNoCoupons: true,
            coupons: res.data.data
          });
          wx.showToast({
            title: '暂无优惠券可领',
          })
        }
      },
      fail: function(res) {
        
      }
    })
  },
  gitCoupon: function (e) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/discounts/fetch',
      data: {
        id: e.currentTarget.dataset.id,
        token: app.globalData.token
      },
      success: function (res) {
        if (res.data.code == 20001 || res.data.code == 20002) {
          wx.showModal({
            title: '错误',
            content: '来晚了',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 20003) {
          wx.showModal({
            title: '错误',
            content: '你领过了，别贪心哦~',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 30001) {
          wx.showModal({
            title: '错误',
            content: '您的积分不足',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 20004) {
          wx.showModal({
            title: '错误',
            content: '已过期~',
            showCancel: false
          })
          return;
        }
        if (res.data.code == 0) {
          wx.showToast({
            title: '领取成功，赶紧去下单吧~',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showModal({
            title: '错误',
            content: res.data.msg,
            showCancel: false
          })
        }
      }
    })
  },
  
})
