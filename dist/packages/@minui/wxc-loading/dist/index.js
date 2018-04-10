'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  _timer: null,

  behaviors: [],
  properties: {
    isShow: {
      type: Boolean,
      value: false,
      observer: function observer(isShow) {
        if (isShow) {
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
    show: function show() {
      var _this = this;

      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._timer = setTimeout(function () {
        _this._timer = null;
        _this.setData({ isShow: true });
      }, 500);
    },
    hide: function hide() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
      this.setData({ isShow: false });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJfdGltZXIiLCJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiaXNTaG93IiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsIm9ic2VydmVyIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInpJbmRleCIsIl96SW5kZXgiLCJzZXREYXRhIiwiU3RyaW5nIiwiaW1hZ2UiLCJzbGlwIiwiZGF0YSIsIm1ldGhvZHMiLCJzaG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNFQSxVQUFRLEk7O0FBSVJDLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLFlBQVE7QUFDTkMsWUFBTUMsT0FEQTtBQUVOQyxhQUFPLEtBRkQ7QUFHTkMsY0FITSxvQkFHR0osTUFISCxFQUdXO0FBQ2YsWUFBSUEsTUFBSixFQUFZO0FBQ1YsY0FBSSxDQUFDSyxTQUFTQyxVQUFkLEVBQTBCO0FBQ3hCQyxtQkFBT0MsTUFBUCxDQUFjSCxRQUFkLEVBQXdCLEVBQUNDLFlBQVksRUFBYixFQUF4QjtBQUNEO0FBQ0QsY0FBSUEsYUFBYUQsU0FBU0MsVUFBMUI7QUFDQSxjQUFJRyxTQUFTLENBQUNILFdBQVdJLE9BQVgsSUFBc0IsSUFBdkIsSUFBK0IsQ0FBNUM7QUFDQUoscUJBQVdJLE9BQVgsR0FBcUJELE1BQXJCO0FBQ0EsZUFBS0UsT0FBTCxDQUFhO0FBQ1hGLG9CQUFRQTtBQURHLFdBQWI7QUFHRDtBQUNGO0FBZkssS0FERTtBQWtCVlIsVUFBTTtBQUNKQSxZQUFNVyxNQURGO0FBRUpULGFBQU87QUFGSCxLQWxCSTtBQXNCVlUsV0FBTztBQUNMWixZQUFNVyxNQUREO0FBRUxULGFBQU87QUFGRixLQXRCRztBQTBCVlcsVUFBTTtBQUNKYixZQUFNVyxNQURGO0FBRUpULGFBQU87QUFGSDtBQTFCSSxHO0FBK0JaWSxRQUFNO0FBQ0ZOLFlBQVE7QUFETixHO0FBR05PLFdBQVM7QUFDUEMsUUFETyxrQkFDQTtBQUFBOztBQUNMLFVBQUksS0FBS3BCLE1BQVQsRUFBaUI7QUFDZnFCLHFCQUFhLEtBQUtyQixNQUFsQjtBQUNEO0FBQ0QsV0FBS0EsTUFBTCxHQUFjc0IsV0FBVyxZQUFNO0FBQzdCLGNBQUt0QixNQUFMLEdBQWMsSUFBZDtBQUNBLGNBQUtjLE9BQUwsQ0FBYSxFQUFFWCxRQUFRLElBQVYsRUFBYjtBQUNELE9BSGEsRUFHWCxHQUhXLENBQWQ7QUFJRCxLQVRNO0FBVVBvQixRQVZPLGtCQVVBO0FBQ0wsVUFBSSxLQUFLdkIsTUFBVCxFQUFpQjtBQUNmcUIscUJBQWEsS0FBS3JCLE1BQWxCO0FBQ0EsYUFBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUNELFdBQUtjLE9BQUwsQ0FBYSxFQUFFWCxRQUFRLEtBQVYsRUFBYjtBQUNEO0FBaEJNIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3RpbWVyOiBudWxsLFxuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHt9XG4gIH0sXG4gIGJlaGF2aW9yczogW10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpc1Nob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlcihpc1Nob3cpIHtcbiAgICAgICAgaWYgKGlzU2hvdykge1xuICAgICAgICAgIGlmICghZ2V0QXBwKCkuZ2xvYmFsRGF0YSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihnZXRBcHAoKSwge2dsb2JhbERhdGE6IHt9fSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGdsb2JhbERhdGEgPSBnZXRBcHAoKS5nbG9iYWxEYXRhXG4gICAgICAgICAgbGV0IHpJbmRleCA9IChnbG9iYWxEYXRhLl96SW5kZXggfHwgMTAwMCkgKyAxXG4gICAgICAgICAgZ2xvYmFsRGF0YS5fekluZGV4ID0gekluZGV4XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHpJbmRleDogekluZGV4XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdtZ2onXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBzbGlwOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICAgIHpJbmRleDogMTAwMFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpXG4gICAgICB9XG4gICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl90aW1lciA9IG51bGxcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgaXNTaG93OiB0cnVlIH0pXG4gICAgICB9LCA1MDApXG4gICAgfSxcbiAgICBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcilcbiAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgICB0aGlzLnNldERhdGEoeyBpc1Nob3c6IGZhbHNlIH0pXG4gICAgfVxuICB9XG59Il19