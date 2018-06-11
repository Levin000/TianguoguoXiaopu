export default Component({
  _timer: null,

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
    type: {
      type: String,
      value: 'mgj'
    },
    image: {
      type: String,
      value: ''
    },
    slip: {
      type: String,
      value: ''
    }
  },
  data: {
    zIndex: 1000
  },
  methods: {
    show() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timer = setTimeout(() => {
        this._timer = null;
        this.setData({ isShow: true });
      }, 500);
    },
    hide() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
      this.setData({ isShow: false });
    }
  }
});