'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    text: {
      type: String,
      value: 0
    },
    type: {
      type: String,
      value: 'plain'
    },
    typeColor: {
      type: String,
      value: '#ff5777'
    },
    textColor: {
      type: String,
      value: '#ffffff'
    },
    _system_: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {},
  attached: function attached() {
    var host = this;

    wx.getSystemInfo && wx.getSystemInfo({
      success: function success(res) {
        host.setData({
          _system_: !!~res.system.indexOf('Android') ? 'android' : 'ios'
        });
      }
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInR5cGVDb2xvciIsInRleHRDb2xvciIsIl9zeXN0ZW1fIiwiZGF0YSIsIm1ldGhvZHMiLCJhdHRhY2hlZCIsImhvc3QiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsInN5c3RlbSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlJQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxVQUFNO0FBQ0pDLFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZILEtBREk7QUFLVkYsVUFBTTtBQUNKQSxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQUxJO0FBU1ZDLGVBQVc7QUFDVEgsWUFBTUMsTUFERztBQUVUQyxhQUFPO0FBRkUsS0FURDtBQWFWRSxlQUFXO0FBQ1RKLFlBQU1DLE1BREc7QUFFVEMsYUFBTztBQUZFLEtBYkQ7QUFpQlZHLGNBQVU7QUFDUkwsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkM7QUFqQkEsRztBQXNCWkksUUFBTSxFO0FBQ05DLFdBQVMsRTtBQUNUQyxZQUFVLG9CQUFZO0FBQ3BCLFFBQUlDLE9BQU8sSUFBWDs7QUFFQUMsT0FBR0MsYUFBSCxJQUFvQkQsR0FBR0MsYUFBSCxDQUFpQjtBQUNuQ0MsZUFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCSixhQUFLSyxPQUFMLENBQWE7QUFDWFQsb0JBQVUsQ0FBQyxDQUFDLENBQUNRLElBQUlFLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixTQUFuQixDQUFILEdBQW1DLFNBQW5DLEdBQStDO0FBRDlDLFNBQWI7QUFHRDtBQUxrQyxLQUFqQixDQUFwQjtBQU9EIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb25maWc6IHtcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge31cbiAgICB9LFxuICAgIGJlaGF2aW9yczogW10sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdGV4dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9LFxuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAncGxhaW4nXG4gICAgICB9LFxuICAgICAgdHlwZUNvbG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcjZmY1Nzc3J1xuICAgICAgfSxcbiAgICAgIHRleHRDb2xvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnI2ZmZmZmZidcbiAgICAgIH0sXG4gICAgICBfc3lzdGVtXzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBob3N0ID0gdGhpcztcblxuICAgICAgd3guZ2V0U3lzdGVtSW5mbyAmJiB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGhvc3Quc2V0RGF0YSh7XG4gICAgICAgICAgICBfc3lzdGVtXzogISF+cmVzLnN5c3RlbS5pbmRleE9mKCdBbmRyb2lkJykgPyAnYW5kcm9pZCcgOiAnaW9zJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0iXX0=