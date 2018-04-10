'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
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
    show: function show() {
      var _this = this;

      var duration = this.data.duration;

      clearTimeout(this._timer);
      this.setData({
        isShow: true
      });

      if (duration > 0 && duration !== Infinity) {
        this._timer = setTimeout(function () {
          _this.hide();
          _this.triggerEvent('success', {}, {});
        }, duration);
      }
    },
    hide: function hide() {
      this._timer = clearTimeout(this._timer);

      this.setData({ isShow: false });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiaXNTaG93IiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsIm9ic2VydmVyIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInpJbmRleCIsIl96SW5kZXgiLCJzZXREYXRhIiwidGV4dCIsIlN0cmluZyIsImljb24iLCJpY29uQ29sb3IiLCJzcmMiLCJkdXJhdGlvbiIsIk51bWJlciIsImRhdGEiLCJtZXRob2RzIiwic2hvdyIsImNsZWFyVGltZW91dCIsIl90aW1lciIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1FQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxZQUFRO0FBQ05DLFlBQU1DLE9BREE7QUFFTkMsYUFBTyxLQUZEO0FBR05DLGNBSE0sb0JBR0dKLE1BSEgsRUFHVztBQUNmLFlBQUlBLE1BQUosRUFBWTtBQUNWLGNBQUksQ0FBQ0ssU0FBU0MsVUFBZCxFQUEwQjtBQUN4QkMsbUJBQU9DLE1BQVAsQ0FBY0gsUUFBZCxFQUF3QixFQUFDQyxZQUFZLEVBQWIsRUFBeEI7QUFDRDtBQUNELGNBQUlBLGFBQWFELFNBQVNDLFVBQTFCO0FBQ0EsY0FBSUcsU0FBUyxDQUFDSCxXQUFXSSxPQUFYLElBQXNCLElBQXZCLElBQStCLENBQTVDO0FBQ0FKLHFCQUFXSSxPQUFYLEdBQXFCRCxNQUFyQjtBQUNBLGVBQUtFLE9BQUwsQ0FBYTtBQUNYRixvQkFBUUE7QUFERyxXQUFiO0FBR0Q7QUFDRjtBQWZLLEtBREU7QUFrQlZHLFVBQU07QUFDSlgsWUFBTVksTUFERjtBQUVKVixhQUFPO0FBRkgsS0FsQkk7QUFzQlZXLFVBQU07QUFDSmIsWUFBTVksTUFERjtBQUVKVixhQUFPO0FBRkgsS0F0Qkk7QUEwQlZZLGVBQVc7QUFDVGQsWUFBTVksTUFERztBQUVUVixhQUFPO0FBRkUsS0ExQkQ7QUE4QlZhLFNBQUs7QUFDSGYsWUFBTVksTUFESDtBQUVIVixhQUFPO0FBRkosS0E5Qks7QUFrQ1ZjLGNBQVU7QUFDUmhCLFlBQU1pQixNQURFO0FBRVJmLGFBQU87QUFGQztBQWxDQSxHO0FBdUNaZ0IsUUFBTTtBQUNKVixZQUFRO0FBREosRztBQUdOVyxXQUFTO0FBQ1BDLFFBRE8sa0JBQ0E7QUFBQTs7QUFDTCxVQUFJSixXQUFXLEtBQUtFLElBQUwsQ0FBVUYsUUFBekI7O0FBRUFLLG1CQUFhLEtBQUtDLE1BQWxCO0FBQ0EsV0FBS1osT0FBTCxDQUFhO0FBQ1hYLGdCQUFRO0FBREcsT0FBYjs7QUFJQSxVQUFJaUIsV0FBVyxDQUFYLElBQWdCQSxhQUFhTyxRQUFqQyxFQUEyQztBQUN6QyxhQUFLRCxNQUFMLEdBQWNFLFdBQVcsWUFBTTtBQUM3QixnQkFBS0MsSUFBTDtBQUNBLGdCQUFLQyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDO0FBQ0QsU0FIYSxFQUdYVixRQUhXLENBQWQ7QUFJRDtBQUNGLEtBZk07QUFpQlBTLFFBakJPLGtCQWlCQTtBQUNMLFdBQUtILE1BQUwsR0FBY0QsYUFBYSxLQUFLQyxNQUFsQixDQUFkOztBQUVBLFdBQUtaLE9BQUwsQ0FBYSxFQUFFWCxRQUFRLEtBQVYsRUFBYjtBQUNEO0FBckJNIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnd3hjLWljb24nOiAnQG1pbnVpL3d4Yy1pY29uJ1xuICAgIH1cbiAgfSxcbiAgYmVoYXZpb3JzOiBbXSxcbiAgcHJvcGVydGllczoge1xuICAgIGlzU2hvdzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyKGlzU2hvdykge1xuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgaWYgKCFnZXRBcHAoKS5nbG9iYWxEYXRhKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGdldEFwcCgpLCB7Z2xvYmFsRGF0YToge319KVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZ2xvYmFsRGF0YSA9IGdldEFwcCgpLmdsb2JhbERhdGFcbiAgICAgICAgICBsZXQgekluZGV4ID0gKGdsb2JhbERhdGEuX3pJbmRleCB8fCAxMDAwKSArIDFcbiAgICAgICAgICBnbG9iYWxEYXRhLl96SW5kZXggPSB6SW5kZXhcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgekluZGV4OiB6SW5kZXhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgaWNvbkNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBkdXJhdGlvbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDIwMDBcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICB6SW5kZXg6IDEwMDBcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3coKSB7XG4gICAgICBsZXQgZHVyYXRpb24gPSB0aGlzLmRhdGEuZHVyYXRpb25cblxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNTaG93OiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZHVyYXRpb24gPiAwICYmIGR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xuICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3N1Y2Nlc3MnLCB7fSwge30pXG4gICAgICAgIH0sIGR1cmF0aW9uKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoaWRlKCkge1xuICAgICAgdGhpcy5fdGltZXIgPSBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpXG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7IGlzU2hvdzogZmFsc2UgfSlcbiAgICB9XG4gIH1cbn0iXX0=