'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
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
      observer: function observer(status) {
        if (status === 'show' || status === 'hide') {
          this.setData({
            maskStatus: status
          });
        }
        if (status === 'show') {
          if (!getApp().globalData) {
            Object.assign(getApp(), { globalData: {} });
          }
          var globalData = getApp().globalData;
          var zIndex = (globalData._zIndex || 1000) + 1;
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
    toggle: function toggle(mode) {
      var status = this.data.status;
      if (typeof mode !== 'boolean') {
        mode = status !== 'show';
      }
      if (mode) {
        this.show();
      } else {
        this.hide();
      }
    },
    showMask: function showMask() {
      this.setData({
        maskStatus: 'show'
      });
    },
    hideMask: function hideMask() {
      this.setData({
        maskStatus: 'hide'
      });
    },
    show: function show() {
      var _this = this;

      if (this.data.animationMode !== 'none') {
        this.showMask();
        this.setData({
          status: 'fadeIn'
        });

        setTimeout(function () {
          _this.setData({
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
    forceHide: function forceHide() {
      this.setData({
        status: 'hide'
      });
      this.hideMask();
    },
    popupTap: function popupTap() {
      if (this.data.locked !== 'true') {
        this.hide();
      }
    },
    hide: function hide() {
      var _this2 = this;

      if (this.data.animationMode !== 'none') {
        this.setData({
          status: 'fadeOut'
        });

        clearTimeout(this._timer);

        this._timer = setTimeout(function () {
          _this2.forceHide();
        }, 300);
      } else {
        // 没有动画
        this.forceHide();
      }
    },
    onContentTap: function onContentTap() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwibG9ja2VkIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwiYW5pbWF0aW9uTW9kZSIsImFsaWduIiwic3RhdHVzIiwib2JzZXJ2ZXIiLCJzZXREYXRhIiwibWFza1N0YXR1cyIsImdldEFwcCIsImdsb2JhbERhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ6SW5kZXgiLCJfekluZGV4IiwiZGF0YSIsIm1ldGhvZHMiLCJ0b2dnbGUiLCJtb2RlIiwic2hvdyIsImhpZGUiLCJzaG93TWFzayIsImhpZGVNYXNrIiwic2V0VGltZW91dCIsImZvcmNlSGlkZSIsInBvcHVwVGFwIiwiY2xlYXJUaW1lb3V0IiwiX3RpbWVyIiwib25Db250ZW50VGFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNRUEsYUFBVyxFO0FBQ1hDLGNBQVk7QUFDVkMsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQURFO0FBS1ZDLG1CQUFlO0FBQ2JILFlBQU1DLE1BRE87QUFFYkMsYUFBTztBQUZNLEtBTEw7QUFTVkUsV0FBTztBQUNMSixZQUFNQyxNQUREO0FBRUxDLGFBQU87QUFGRixLQVRHO0FBYVZHLFlBQVE7QUFDTkwsWUFBTUMsTUFEQTtBQUVOQyxhQUFPLE1BRkQ7QUFHTkksY0FITSxvQkFHR0QsTUFISCxFQUdXO0FBQ2YsWUFBSUEsV0FBVyxNQUFYLElBQXFCQSxXQUFXLE1BQXBDLEVBQTRDO0FBQzFDLGVBQUtFLE9BQUwsQ0FBYTtBQUNYQyx3QkFBWUg7QUFERCxXQUFiO0FBR0Q7QUFDRCxZQUFJQSxXQUFXLE1BQWYsRUFBdUI7QUFDckIsY0FBSSxDQUFDSSxTQUFTQyxVQUFkLEVBQTBCO0FBQ3hCQyxtQkFBT0MsTUFBUCxDQUFjSCxRQUFkLEVBQXdCLEVBQUNDLFlBQVksRUFBYixFQUF4QjtBQUNEO0FBQ0QsY0FBSUEsYUFBYUQsU0FBU0MsVUFBMUI7QUFDQSxjQUFJRyxTQUFTLENBQUNILFdBQVdJLE9BQVgsSUFBc0IsSUFBdkIsSUFBK0IsQ0FBNUM7QUFDQUoscUJBQVdJLE9BQVgsR0FBcUJELE1BQXJCO0FBQ0EsZUFBS04sT0FBTCxDQUFhO0FBQ1hNLG9CQUFRQTtBQURHLFdBQWI7QUFHRDtBQUNGO0FBcEJLO0FBYkUsRztBQW9DWkUsUUFBTTtBQUNKUCxnQkFBWSxNQURSO0FBRUpLLFlBQVE7QUFGSixHO0FBSU5HLFdBQVM7QUFDUEMsVUFETyxrQkFDQUMsSUFEQSxFQUNNO0FBQ1gsVUFBSWIsU0FBUyxLQUFLVSxJQUFMLENBQVVWLE1BQXZCO0FBQ0EsVUFBSSxPQUFPYSxJQUFQLEtBQWdCLFNBQXBCLEVBQStCO0FBQzdCQSxlQUFPYixXQUFXLE1BQWxCO0FBQ0Q7QUFDRCxVQUFJYSxJQUFKLEVBQVU7QUFDTixhQUFLQyxJQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0MsSUFBTDtBQUNIO0FBQ0YsS0FYTTtBQVlQQyxZQVpPLHNCQVlJO0FBQ1QsV0FBS2QsT0FBTCxDQUFhO0FBQ1hDLG9CQUFZO0FBREQsT0FBYjtBQUdELEtBaEJNO0FBaUJQYyxZQWpCTyxzQkFpQkk7QUFDVCxXQUFLZixPQUFMLENBQWE7QUFDWEMsb0JBQVk7QUFERCxPQUFiO0FBR0QsS0FyQk07QUFzQlBXLFFBdEJPLGtCQXNCQTtBQUFBOztBQUVMLFVBQUksS0FBS0osSUFBTCxDQUFVWixhQUFWLEtBQTRCLE1BQWhDLEVBQXdDO0FBQ3RDLGFBQUtrQixRQUFMO0FBQ0EsYUFBS2QsT0FBTCxDQUFhO0FBQ1hGLGtCQUFRO0FBREcsU0FBYjs7QUFJQWtCLG1CQUFXLFlBQU07QUFDZixnQkFBS2hCLE9BQUwsQ0FBYTtBQUNYRixvQkFBUTtBQURHLFdBQWI7QUFHRCxTQUpELEVBSUcsRUFKSDtBQUtELE9BWEQsTUFXTztBQUNMLGFBQUtnQixRQUFMO0FBQ0EsYUFBS2QsT0FBTCxDQUFhO0FBQ1hGLGtCQUFRO0FBREcsU0FBYjtBQUdEO0FBQ0YsS0F6Q007QUEwQ1BtQixhQTFDTyx1QkEwQ0s7QUFDVixXQUFLakIsT0FBTCxDQUFhO0FBQ1hGLGdCQUFRO0FBREcsT0FBYjtBQUdBLFdBQUtpQixRQUFMO0FBQ0QsS0EvQ007QUFnRFBHLFlBaERPLHNCQWdESTtBQUNULFVBQUksS0FBS1YsSUFBTCxDQUFVaEIsTUFBVixLQUFxQixNQUF6QixFQUFpQztBQUMvQixhQUFLcUIsSUFBTDtBQUNEO0FBQ0YsS0FwRE07QUFxRFBBLFFBckRPLGtCQXFEQTtBQUFBOztBQUVMLFVBQUksS0FBS0wsSUFBTCxDQUFVWixhQUFWLEtBQTRCLE1BQWhDLEVBQXdDO0FBQ3RDLGFBQUtJLE9BQUwsQ0FBYTtBQUNYRixrQkFBUTtBQURHLFNBQWI7O0FBSUFxQixxQkFBYSxLQUFLQyxNQUFsQjs7QUFFQSxhQUFLQSxNQUFMLEdBQWNKLFdBQVcsWUFBTTtBQUM3QixpQkFBS0MsU0FBTDtBQUNELFNBRmEsRUFFWCxHQUZXLENBQWQ7QUFJRCxPQVhELE1BV087QUFDTDtBQUNBLGFBQUtBLFNBQUw7QUFDRDtBQUNGLEtBdEVNO0FBdUVQSSxnQkF2RU8sMEJBdUVRLENBQUU7QUF2RVYiLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd3eGMtbWFzayc6ICdAbWludWkvd3hjLW1hc2snXG4gICAgfVxuICB9LFxuICBiZWhhdmlvcnM6IFtdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbG9ja2VkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogXCJoaWRlXCJcbiAgICB9LFxuICAgIGFuaW1hdGlvbk1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbm9uZSdcbiAgICB9LFxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2NlbnRlcidcbiAgICB9LFxuICAgIHN0YXR1czoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdoaWRlJyxcbiAgICAgIG9ic2VydmVyKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnc2hvdycgfHwgc3RhdHVzID09PSAnaGlkZScpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgbWFza1N0YXR1czogc3RhdHVzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnc2hvdycpIHtcbiAgICAgICAgICBpZiAoIWdldEFwcCgpLmdsb2JhbERhdGEpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZ2V0QXBwKCksIHtnbG9iYWxEYXRhOiB7fX0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBnbG9iYWxEYXRhID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YVxuICAgICAgICAgIGxldCB6SW5kZXggPSAoZ2xvYmFsRGF0YS5fekluZGV4IHx8IDEwMDApICsgMVxuICAgICAgICAgIGdsb2JhbERhdGEuX3pJbmRleCA9IHpJbmRleFxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB6SW5kZXg6IHpJbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBtYXNrU3RhdHVzOiAnaGlkZScsXG4gICAgekluZGV4OiAxMDAwXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGUobW9kZSkge1xuICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuZGF0YS5zdGF0dXNcbiAgICAgIGlmICh0eXBlb2YgbW9kZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG1vZGUgPSBzdGF0dXMgIT09ICdzaG93J1xuICAgICAgfVxuICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01hc2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtYXNrU3RhdHVzOiAnc2hvdydcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZU1hc2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBtYXNrU3RhdHVzOiAnaGlkZSdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvdygpIHtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5hbmltYXRpb25Nb2RlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5zaG93TWFzaygpO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0YXR1czogJ2ZhZGVJbidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3Nob3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93TWFzaygpO1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0YXR1czogJ3Nob3cnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZm9yY2VIaWRlKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc3RhdHVzOiAnaGlkZSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oaWRlTWFzaygpO1xuICAgIH0sXG4gICAgcG9wdXBUYXAoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxvY2tlZCAhPT0gJ3RydWUnKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGlkZSgpIHtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5hbmltYXRpb25Nb2RlICE9PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzdGF0dXM6ICdmYWRlT3V0J1xuICAgICAgICB9KTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuXG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JjZUhpZGUoKTtcbiAgICAgICAgfSwgMzAwKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDmsqHmnInliqjnlLtcbiAgICAgICAgdGhpcy5mb3JjZUhpZGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ29udGVudFRhcCgpIHt9XG4gIH1cbn0iXX0=