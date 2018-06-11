import Types from './config.js';

export default Component({
  behaviors: [],
  properties: {
    type: {
      type: String,
      value: '',
      observer(type) {
        if (type && Types[type]) {
          let image = this.data.image || Types[type].image;
          let title = this.data.title || Types[type].title;
          let button = this.data.button || Types[type].button;
          let tip = this.data.tip || Types[type].tip;
          this.setData({
            image,
            title,
            button,
            tip
          });
        }
      }
    },
    image: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    tip: {
      type: String,
      value: ''
    },
    button: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    emitAbnorTap(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('abnortap', detail, option);
    }
  }
});