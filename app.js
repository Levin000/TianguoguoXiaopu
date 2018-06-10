//app.js
var starscore = require("./templates/starscore/starscore.js");
App({
  onLaunch: function () {
    var that = this;
    //  获取商城名称
    wx.request({
      url: 'https://api.it120.cc/'+ that.globalData.subDomain +'/config/get-value',
      data: {
        key: 'mallName'
      },
      success: function(res) {
        if (res.data.code == 0) {
          wx.setStorageSync('mallName', res.data.data.value);
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/score/send/rule',
      data: {
        code: 'goodReputation'
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.globalData.order_reputation_score = res.data.data[0].score;
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'recharge_amount_min'
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.globalData.recharge_amount_min = res.data.data.value;
        }
      }
    })
    // 获取砍价设置
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/shop/goods/kanjia/list',
      data: {},
      success: function (res) {
        if (res.data.code == 0) {
          that.globalData.kanjiaList = res.data.data.result;
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/shop/goods/category/all',
      success: function (res) {
        var categories = []; //{ id: 0, name: "全品类" }
        if (res.data.code == 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            categories.push(res.data.data[i]);
          }
        }
        that.globalData.categories = categories
        that.getGoods(0);//获取全品类商品
      },
      fail: function () {
        that.globalData.onLoadStatus = false
        wx.hideLoading()
        console.log('11')
      }
    })
  },
  sendTempleMsg: function (orderId, trigger, template_id, form_id, page, postJsonString, emphasis_keyword){
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'), //登录接口返回的登录凭证
        type: 0, //0 小程序 1 服务号
        module: 'order', //所属模块：immediately 立即发送模板消息；order 所属订单模块
        business_id: orderId, //登录接口返回的登录凭证
        trigger: trigger, //module不为immediately时必填，代表对应的【订单】触发的状态
        template_id: template_id, //模板消息ID
        form_id: form_id, //type=0时必填，表单提交场景下，为 submit 事件带上的 formId；支付场景下，为本次支付的 prepay_id
        url: page, //小程序：点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）；服务号：跳转的网页地址
        postJsonString: postJsonString, //模板消息内容
        emphasis_keyword: emphasis_keyword //小程序："keyword1.DATA" 模板需要放大的关键词，不填则默认无放大
      },
      success: (res) => {
        //console.log(res.data);
      }
    })
  },
  getGoods: function (categoryId) {
    if (categoryId == 0) {
      categoryId = "";
    }
    console.log(categoryId)
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/shop/goods/list',
      data: {
        page: that.globalData.page,
        pageSize: that.globalData.pageSize,
        categoryId: categoryId
      },
      success: function (res) {
        that.globalData.goods = []
        var goods = [];

        if (res.data.code != 0 || res.data.data.length == 0) {
          /*that.setData({
            prePageBtn: false,
            nextPageBtn: true,
            toBottom: true
          });*/
          return;
        }
        var temp;
        for (var i = 0; i < res.data.data.length; i++) {
          temp = res.data.data[i];
          temp.minPrice = temp.minPrice.toFixed(2);
          temp.originalPrice = temp.originalPrice.toFixed(2);
          goods.push(temp);
        }


        console.log('goods----------------------')
        console.log(goods)

        var goodsName = []; //获取全部商品名称，做为智能联想输入库
        for (var i = 0; i < goods.length; i++) {
          goodsName.push(goods[i].name);
        }
        that.globalData.goodsName = goodsName

        var page = that.globalData.page;
        var pageSize = that.globalData.pageSize;
        for (let i = 0; i < goods.length; i++) {
          goods[i].starscore = (goods[i].numberGoodReputation / goods[i].numberOrders) * 5
          goods[i].starscore = Math.ceil(goods[i].starscore / 0.5) * 0.5
          goods[i].starpic = starscore.picStr(goods[i].starscore)
          
        }
        that.globalData.goods = goods
        console.log('getGoodsReputation----------------------')
        console.log(that.globalData.goods)


        wx.request({
          url: 'https://api.it120.cc/' + that.globalData.subDomain + '/shop/goods/list',
          data: {
            page: that.globalData.page,
            pageSize: that.globalData.pageSize,
            categoryId: categoryId
          },
          success: function (res) {
            var categories = that.globalData.categories
            var goodsList = [],
              id,
              key,
              name,
              typeStr,
              goodsTemp = []
            for (let i = 0; i < categories.length; i++) {
              id = categories[i].id;
              key = categories[i].key;
              name = categories[i].name;
              typeStr = categories[i].type;
              goodsTemp = [];
              for (let j = 0; j < goods.length; j++) {
                if (goods[j].categoryId === id) {
                  goodsTemp.push(goods[j])
                }
              }
              if ((that.globalData.activeCategoryId === null)&(goodsTemp.length>0)){
                that.globalData.activeCategoryId = categories[i].id  
              }
              goodsList.push({ 'id': id, 'key': key, 'name': name, 'type': typeStr, 'goods': goodsTemp })
              console.log("你好," + categories[i].name)
            }

            that.globalData.goodsList = goodsList
            that.globalData.onLoadStatus = true
            console.log('categories:',categories)
            //that.globalData.activeCategoryId = categories[0].id   改为第一个不为null的类
            

            console.log('getGoodsList----------------------')
            console.log(that.globalData.goodsList)
          },
          fail: function () {
            that.globalData.onLoadStatus = false
            
            console.log('33')
          }
        })





      }
    })
  },
  globalData:{
    page: 1, //初始加载商品时的页面号
    pageSize: 10000, //初始加载时的商品数，设置为10000保证小商户能加载完全部商品
    categories: [],
    goods: [],
    hotGoods: ['桔', '火龙果', '香蕉', '酸奶', '甘蔗'], //自定义热门搜索商品
    goodsName: [],
    goodsList: [],
    onLoadStatus: true,
    activeCategoryId: null,

    globalBGColor: '#00afb4',
    bgRed: 0,
    bgGreen: 175,
    bgBlue: 180,
    userInfo: null,
    subDomain: "tggtest",// 商城后台个性域名tgg
    version: "2.0.6",
    shareProfile: '   一流的服务，做超新鲜的水果' // 首页转发的时候术语
  }
  // 根据自己需要修改下单时候的模板消息内容设置，可增加关闭订单、收货时候模板消息提醒
})
