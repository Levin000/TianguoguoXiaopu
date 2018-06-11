function hexToRgb(hex) {
  let color = [];
  let rgb = [];

  hex = hex.replace(/#/, '');

  if (hex.length === 3) {
    let tmp = [];

    for (let i = 0; i < 3; i++) {
      tmp.push(hex.charAt(i) + hex.charAt(i));
    }

    hex = tmp.join('');
  }

  for (let i = 0; i < 3; i++) {
    color[i] = '0x' + hex.substr(i * 2, 2);
    rgb.push(parseInt(Number(color[i])));
  }

  return rgb.join(',');
}

export default Component({
  properties: {
    status: {
      type: String,
      value: 'hide',
      observer: function (status) {
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
    },
    opacity: {
      type: [String, Number],
      value: 0.6
    },
    backgroundColor: {
      type: String,
      value: '#000000'
    },
    locked: {
      type: [String],
      value: 'hide'
    },
    contentAlign: {
      type: String,
      value: 'tl'
    },
    __positionStyle: {
      type: String,
      value: 'top:0; left:0'
    }
  },

  data: {
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
    show() {
      this.setData({
        status: 'show'
      });
    },
    hide() {
      this.setData({
        status: 'hide'
      });
    },
    omMaskTap: function (event) {
      let data = this.data;
      let detail = event.detail;
      let option = {};

      if (data.locked && data.locked !== 'true') {
        this.setData({
          status: 'hide'
        });
        this.triggerEvent('masktap', detail, option);
      }
    }
  },

  attached: function () {
    let data = this.data;

    this.setData({
      backgroundColor: hexToRgb(data.backgroundColor)
    });

    let contentAlignStyle;

    switch (data.contentAlign) {
      case 'tl':
        {
          contentAlignStyle = 'top:0; left:0';
          break;
        }

      case 'tr':
        {
          contentAlignStyle = 'top:0; right:0';
          break;
        }

      case 'bl':
        {
          contentAlignStyle = 'bottom:0; left:0';
          break;
        }

      case 'br':
        {
          contentAlignStyle = 'bottom:0; right:0';
          break;
        }

      case 'cc':
        {
          contentAlignStyle = 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
          break;
        }
    }

    this.setData({
      __positionStyle: contentAlignStyle
    });
  }
});