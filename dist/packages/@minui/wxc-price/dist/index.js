/**
   * 小数保留处理
   * @param priceNum 价格数字（单位元）
   * @param len 保留的小数长度
   * @param dir 取整方向，f (floor) 为向下取整，默认值；c（ceiling）为向上取整
   */
function getDecimal(priceNum, len, dir) {
  if (!priceNum || !len) {
    return false;
  }

  dir = dir || 'f';
  priceNum = parseFloat(priceNum, 10);
  len = parseInt(len, 10);

  if (dir === 'f') {
    let intNumStr = priceNum.toString().split('.')[0];
    let decimalNumStr = priceNum.toString().split('.')[1] || '00';
    if (decimalNumStr.length < 2) {
      decimalNumStr += '0';
    }

    return intNumStr + '.' + decimalNumStr.substring(0, len);
  } else {
    return priceNum.toFixed(len);
  }
}

export default Component({
  behaviors: [],
  properties: {
    symbol: {
      type: String,
      value: '￥'
    },
    value: {
      type: [Number, String],
      value: ''
    },
    icon: {
      type: [String],
      value: ''
    },
    status: {
      type: String,
      value: ''
    },
    delColor: {
      type: String,
      value: '#999'
    },
    decimal: {
      type: String,
      value: '2'
    },
    decimalNum: {
      type: [Number, String],
      value: ''
    }
  },
  data: {},
  methods: {},
  attached: function () {

    if (this.data.value) {
      let value = this.data.value;

      switch (this.data.decimal) {

        // 保留一位小数
        case '1':
          {
            value = getDecimal(this.data.value, 1);
            break;
          }

        // 只显示整数
        case 'none':
          {
            value = parseInt(this.data.value);
            break;
          }

        // 小数部分缩小
        case 'small':
          {
            value = parseInt(this.data.value).toString().trim();

            this.setData({
              decimalNum: (this.data.value.toString().split('.')[1] || '00').trim()
            });
            break;
          }
        default:
          {
            value = getDecimal(this.data.value, 2);
            break;
          }

      }

      this.setData({
        value: value
      });
    }
  }
});