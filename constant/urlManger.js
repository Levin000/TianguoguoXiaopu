var app = getApp()
const head = "https://api.it120.cc/"
const projectName = app.globalData.subDomain


const register = head + projectName + "/user/wxapp/register/complex";
const login = head + projectName + "/user/wxapp/login";
const loadBanner = head + projectName + "/banner/list";
const loadGoods = head + projectName + "/shop/goods/list";
const loadGoodsDetail = head + projectName +"/shop/goods/detail";
const loadGoodsPrice = head + projectName +"/shop/goods/price";
const loadCategory = head + projectName +"/shop/goods/category/all";
const addressHandler = head + projectName + "/user/shipping-address/";
const loadOrderDetail = head + projectName +"/order/detail";
const loadOrderDelivery = head + projectName +"/order/delivery";
const loadOrderReputation = head + projectName +"/order/reputation";
const closeOrder = head + projectName + "/order/close";
const loadOrderStatistics = head + projectName + "/order/statistics";
const loadOrders = head + projectName + "/order/list";
const createOrder = head + projectName + "/order/create";
const goodsPriceFreight = head + projectName +"/shop/goods/price/freight"
const loadShopDetail = head + projectName +"/shop/subshop/detail";





module.exports.login = login
module.exports.loadBanner = loadBanner;
module.exports.loadGoods = loadGoods;
module.exports.register = register;
module.exports.loadCategory = loadCategory;
module.exports.addressHandler = addressHandler;
module.exports.loadGoodsDetail = loadGoodsDetail;
module.exports.loadGoodsPrice = loadGoodsPrice;
module.exports.loadOrderDetail = loadOrderDetail;
module.exports.loadOrderDelivery = loadOrderDetail;
module.exports.loadOrderReputation = loadOrderReputation;
module.exports.closeOrder = closeOrder;
module.exports.loadOrderStatistics = loadOrderStatistics;
module.exports.loadOrders = loadOrders;
module.exports.createOrder = createOrder;
module.exports.goodsPriceFreight = goodsPriceFreight;
module.exports.loadShopDetail = loadShopDetail;