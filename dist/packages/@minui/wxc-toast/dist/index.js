export default Component({
  behaviors: [],
  properties: {
    isShow: {
      type: Boolean,
      value: false,
      observer(isShow) {
        if (isShow) {
          if (!getApp().globalData) {
            Object.assign(getApp(), { globalData: {} });
          }
          let globalData = getApp().globalData;
          let zIndex = (globalData._zIndex || 1000) + 1;
          globalData._zIndex = zIndex;
          this.setData({
            zIndex: zIndex
          });
        }
      }
    },
    text: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    iconColor: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    duration: {
      type: Number,
      value: 2000
    }
  },
  data: {
    zIndex: 1000
  },
  methods: {
    show(message) {
      let text = this.data.text;
      if (message && typeof message === 'string') {
        text = message;
      }
      let duration = this.data.duration;

      clearTimeout(this._timer);
      this.setData({
        text: text,
        isShow: true
      });

      if (duration > 0 && duration !== Infinity) {
        this._timer = setTimeout(() => {
          this.hide();
          this.triggerEvent('success', {}, {});
        }, duration);
      }
    },

    hide() {
      this._timer = clearTimeout(this._timer);

      this.setData({ isShow: false });
    }
  }
});