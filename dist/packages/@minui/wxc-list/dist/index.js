export default Component({
  behaviors: [],
  properties: {
    title: {
      type: String,
      value: '' // 标题
    },
    detail: {
      type: String,
      value: '' // 标题下方的具体描述
    },
    desc: {
      type: String,
      value: '' // 右侧描述部分
    },
    icon: {
      type: String,
      value: '' // 标题左侧icon pintuan
    },
    iconColor: {
      type: String,
      value: '#ff5077' // 标题左侧icon颜色
    },
    src: {
      type: String,
      value: '' // 标题左侧icon图片链接
    },
    dot: {
      type: Boolean,
      value: false // 右侧描述部分的左侧红点
    },
    dotColor: {
      type: String,
      value: '#f5123e' // 右侧描述部分的左侧红点颜色
    },
    arrow: {
      type: Boolean,
      value: true // 是否显示箭头
    },
    mode: {
      type: String,
      value: 'normal' // 有边框和无边框 normal, none
    }
  },
  data: {},
  methods: {
    onClick(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('click', detail, option);
    }
  }
});