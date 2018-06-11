export default Component({
  behaviors: [],
  properties: {
    showIcon: {
      type: Boolean,
      value: true // 是否显示 search icon
    },
    iconColor: {
      type: String,
      value: '#bbb' // search icon 的颜色
    },
    phColor: {
      type: String,
      value: '#bbb' // placeholder 的颜色
    },
    bgColor: {
      type: String,
      value: '#f6f6f6' // 搜索栏背景色
    },
    align: {
      type: String,
      value: 'left' // static 模式下，内容居左还是居中center, left
    },
    color: {
      type: String,
      value: '#333' // 输入框字体颜色
    },
    radius: {
      type: [Number, String],
      value: 6 // 圆角弧度
    },
    placeholder: {
      type: String,
      value: '搜索'
    },
    mode: {
      type: String,
      value: 'normal' // normal static
    },
    showClear: {
      type: Boolean,
      value: true
    },
    button: {
      type: String,
      value: '' // 显示按钮
    },
    btnColor: {
      type: String,
      value: '#333' // 按钮颜色
    }
  },
  data: {
    _showClear: false,
    value: ''
  },
  methods: {
    onInput(e) {
      let value = e.detail.value;
      let _showClear = value && this.data.showClear;
      this.setData({
        value,
        _showClear
      });

      let detail = e.detail || {};
      let option = {};
      this.triggerEvent('input', detail, option);
    },
    onConfirm(e) {
      let detail = e.detail || {};
      let option = {};
      detail.value = this.data.value;
      this.triggerEvent('confirm', detail, option);
    },
    onSubmit(e) {
      let detail = e.detail || {};
      let option = {};
      detail.value = this.data.value;
      this.triggerEvent('submit', detail, option);
    },
    onClear() {
      this.setData({
        value: '',
        _showClear: false
      });
    }
  }
});