// index.js
var starscore = require("../../templates/starscore/starscore.js");
var WxSearch = require('../../templates/wxSearch/wxSearch.js');
var app = getApp()
Page({
  data: {
      scrollTop: 0,
      searchInput: '',
      keyword:"",
      pageNum:1,
      pageSize:1000,
      load_statue:true,
      goods: [] ,
      goodsNum: 0,
      loadingHidden: false,
  },
  onLoad: function (options) {
    var that = this;
    console.log(options)
    //初始化的时候渲染wxSearchdata 第二个为你的search高度
    WxSearch.init(that, 43, app.globalData.hotGoods);
    WxSearch.initMindKeys(app.globalData.goodsName);
    this.setData({
      keyword: options.keyword,
    })
    this.refreshGoodsList();
  },
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })
  },
  loadSearchContent: function (keyword, pageNum, pageSize){
      wx.showLoading({
        title: '加载中',
      })
      var that=this;
      console.log(keyword + "---" + pageNum + "---" + pageSize);
      wx.request({
        url: "https://api.it120.cc/" + app.globalData.subDomain + "/shop/goods/list",
        data:{
          page: pageNum,
          pageSize: pageSize,
          nameLike: keyword,
        },
        success:function(res){
          that.setData({
            load_statue: true
          })

          var goods = that.data.goods;
          if (res.data.data != null) {
            for (var i = 0; i < res.data.data.length; i++) {
              goods.push(res.data.data[i])
            }


            var page = 1;
            var pageSize = that.data.pageSize;
            for (let i = 0; i < goods.length; i++) {
              wx.request({
                url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/reputation',
                data: {
                  goodsId: goods[i].id,
                  page: page,
                  pageSize: pageSize
                },
                success: function (res) {
                  if (res.data.code === 0) {
                    if (res.data.data.length < pageSize) {
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
              })
            }
            console.log('getGoodsReputation----------------------')
            that.setData({
              goodsNum: goods.length
            })
          }
          if (res.data.data == null || res.data.data.length < 10) {
            console.log("数据为空")
            that.setData({
              loadingHidden: true
            })
          } else {
            that.setData({
              loadingHidden: false
            })
          }

          console.log(that.data)

           wx.showToast({
             title: '加载成功',
           })
        },
        fail:function(){
          that.setData({
            load_statue: false
          })
          wx.showToast({
            title: '加载失败',
          })
        }
      })
  },
  refreshGoodsList:function(){
    this.setData({
      pageNum: 1,
      goods: []
    })
    this.loadSearchContent(this.data.keyword, this.data.pageNum, this.data.pageSize);
  },
  loadMoreGoodsList:function(){
    var page = this.data.pageNum+ 1;
    this.setData({
      pageNum: page
    })
    this.loadSearchContent(this.data.keyword, this.data.pageNum, this.data.pageSize);
  },
  toSearch:function(e){
    var that = this
    console.log(e)
    
    this.refreshGoodsList();
  },
  toDetailsTap: function (e) {
    console.log(e)
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },
  //////////////////////////////////////
  wxSearchFn: function (e) {
    var that = this
    that.toSearch();
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);

    that.setData({
      keyword: that.data.wxSearchData.value,
    })
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);

    that.setData({
      keyword: that.data.wxSearchData.value,
    })
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})