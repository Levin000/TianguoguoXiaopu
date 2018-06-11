export default Component({
  behaviors: [],
  properties: {
    locked: {
      type: String,
      value: "hide"
    },
    animationMode: {
      type: String,
      value: 'none'
    },
    align: {
      type: String,
      value: 'center'
    },
    status: {
      type: String,
      value: 'hide',
      observer(status) {
        if (status === 'show' || status === 'hide') {
          this.setData({
            maskStatus: status
          });
        }
        if (status === 'show') {
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
    }
  },
  data: {
    maskStatus: 'hide',
    zIndex: 1000
  },
  methods: {
    toggle(mode) {
      let status = this.data.status;
      if (typeof mode !== 'boolean') {
        mode = status !== 'show';
      }
      if (mode) {
        this.show();
      } else {
        this.hide();
      }
    },
    showMask() {
      this.setData({
        maskStatus: 'show'
      });
    },
    hideMask() {
      this.setData({
        maskStatus: 'hide'
      });
    },
    show() {

      if (this.data.animationMode !== 'none') {
        this.showMask();
        this.setData({
          status: 'fadeIn'
        });

        setTimeout(() => {
          this.setData({
            status: 'show'
          });
        }, 50);
      } else {
        this.showMask();
        this.setData({
          status: 'show'
        });
      }
    },
    forceHide() {
      this.setData({
        status: 'hide'
      });
      this.hideMask();
    },
    popupTap() {
      if (this.data.locked !== 'true') {
        this.hide();
      }
    },
    hide() {

      if (this.data.animationMode !== 'none') {
        this.setData({
          status: 'fadeOut'
        });

        clearTimeout(this._timer);

        this._timer = setTimeout(() => {
          this.forceHide();
        }, 300);
      } else {
        // 没有动画
        this.forceHide();
      }
    },
    onContentTap() {}
  }
});