//index.js
//获取应用实例
var starscore = require("../../templates/starscore/starscore.js");
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false , // loading
    userInfo: {},
    swiperCurrent: 0,  
    recommendTitlePicStr: '',
    categories: [],
    activeCategoryId: 0,
    goodsList:[], //按类别的商品
    recommendGoods: [], //推荐商品
    banners:[],
    loadingMoreHidden:true,
    page:1,  //加载商品时的页数默认为1开始
    pageSize:10000,  //每页商品数设置为5000确保能全部加载商品
  },

  //事件处理函数
  swiperchange: function(e) {
      //console.log(e.detail.current)
       this.setData({  
        swiperCurrent: e.detail.current  
    })  
  },
  toDetailsTap:function(e){
    wx.navigateTo({
      url:"/pages/goods-details/index?id="+e.currentTarget.dataset.id
    })
  },
  tapBanner: function(e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
      })
    }
  },
  onPullDownRefresh: function(){
    var that = this
    wx.showNavigationBarLoading()
    that.onLoad()
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },
  onLoad: function () {
    var that = this
    that.setData({
      goodsList: app.globalData.goodsList
    })
    that.getRecommendTitlePicStr();
    wx.setNavigationBarTitle({
      title: '果果精选',
    })
    /*
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    */
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/banner/list',
      data: {
        key: 'mallName'
      },
      success: function(res) {
        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请在后台添加 banner 轮播图片',
            showCancel: false
          })
        } else {
          that.setData({
            banners: res.data.data
          });
        }
      }
    })
    /*wx.request({
      url: 'https://api.it120.cc/'+ app.globalData.subDomain +'/shop/goods/category/all',
      success: function(res) {
        var categories = [{id:0, name:"全品类"}];
        if (res.data.code == 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            categories.push(res.data.data[i]);
          }
        }
        that.setData({
          categories:categories,
          activeCategoryId:0,
          page:1,
        });
        that.getRecommendGoodsList(that.data.activeCategoryId)
        //that.getGoodsList(that.data.activeCategoryId)
      }
    })*/
    that.getNotice ();
    that.getAppRecommendGoodsList()
  },
  onShow: function() {
    
  },
  onShareAppMessage: function () {
    return {
      title: wx.getStorageSync('mallName') + '——' + app.globalData.shareProfile,
      path: '/pages/select/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
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
    for(let i = 0;i < goods.length; i++){
      if (goods[i].recommendStatus === 1){
        recommendGoods.push(goods[i])
      }
    }
    that.setData({
      recommendGoods : recommendGoods
    })
  },
  // 从原始网站获取推荐商品
  getRecommendGoodsList: function (categoryId) {
    if (categoryId == 0) {
      categoryId = "";
    }
    // console.log(categoryId)
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
      data: {
        page: that.data.page,
        pageSize: that.data.pageSize,
        categoryId: categoryId,
        recommendStatus: 1
      },
      success: function (res) {
        that.setData({
          recommendGoods: [],
          loadingMoreHidden: true
        });
        var goods = [];
        if (res.data.code != 0 || res.data.data.length == 0) {
          that.setData({
            loadingMoreHidden: false,
          });
          return;
        }
        for (var i = 0; i < res.data.data.length; i++) {
          goods.push(res.data.data[i])
        }

        console.log('getRecommendGoodsList----------------------')
        console.log(goods)


        for (let i = 0; i < goods.length; i++) {
          goods[i].starscore = (goods[i].numberGoodReputation / goods[i].numberOrders) * 5
          goods[i].starscore = Math.ceil(goods[i].starscore / 0.5) * 0.5
          goods[i].starpic = starscore.picStr(goods[i].starscore)
        }
        console.log('getRecommendGoodsReputation----------------------')
        console.log(goods)
        that.setData({
          recommendGoods: goods,
        });
      }
    })
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
  getNotice: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/notice/list',
      data: { pageSize :7},
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            noticeList: res.data.data
          });
        }
      }
    })
  },
})
