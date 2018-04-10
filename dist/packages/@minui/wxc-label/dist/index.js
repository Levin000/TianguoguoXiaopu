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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInR5cGVDb2xvciIsInRleHRDb2xvciIsIl9zeXN0ZW1fIiwiZGF0YSIsIm1ldGhvZHMiLCJhdHRhY2hlZCIsImhvc3QiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsInN5c3RlbSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlJQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxVQUFNO0FBQ0pDLFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZILEtBREk7QUFLVkYsVUFBTTtBQUNKQSxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQUxJO0FBU1ZDLGVBQVc7QUFDVEgsWUFBTUMsTUFERztBQUVUQyxhQUFPO0FBRkUsS0FURDtBQWFWRSxlQUFXO0FBQ1RKLFlBQU1DLE1BREc7QUFFVEMsYUFBTztBQUZFLEtBYkQ7QUFpQlZHLGNBQVU7QUFDUkwsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkM7QUFqQkEsRztBQXNCWkksUUFBTSxFO0FBQ05DLFdBQVMsRTtBQUNUQyxZQUFVLG9CQUFZO0FBQ3BCLFFBQUlDLE9BQU8sSUFBWDtBQUNBQyxPQUFHQyxhQUFILElBQW9CRCxHQUFHQyxhQUFILENBQWlCO0FBQ25DQyxlQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJKLGFBQUtLLE9BQUwsQ0FBYTtBQUNYVCxvQkFBVSxDQUFDLENBQUMsQ0FBQ1EsSUFBSUUsTUFBSixDQUFXQyxPQUFYLENBQW1CLFNBQW5CLENBQUgsR0FBbUMsU0FBbkMsR0FBK0M7QUFEOUMsU0FBYjtBQUdEO0FBTGtDLEtBQWpCLENBQXBCO0FBT0QiLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICAgIH0sXG4gICAgYmVoYXZpb3JzOiBbXSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0ZXh0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdwbGFpbidcbiAgICAgIH0sXG4gICAgICB0eXBlQ29sb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJyNmZjU3NzcnXG4gICAgICB9LFxuICAgICAgdGV4dENvbG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcjZmZmZmZmJ1xuICAgICAgfSxcbiAgICAgIF9zeXN0ZW1fOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGhvc3QgPSB0aGlzO1xuICAgICAgd3guZ2V0U3lzdGVtSW5mbyAmJiB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGhvc3Quc2V0RGF0YSh7XG4gICAgICAgICAgICBfc3lzdGVtXzogISF+cmVzLnN5c3RlbS5pbmRleE9mKCdBbmRyb2lkJykgPyAnYW5kcm9pZCcgOiAnaW9zJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0iXX0=