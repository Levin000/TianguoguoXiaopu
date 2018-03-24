'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    percent: {
      type: [Number, String],
      value: 100
    },
    strokeWidth: {
      type: [Number, String],
      value: 16
    },
    activeLineColor: {
      type: Array,
      value: []
    },
    activeColor: {
      type: [String, Array],
      value: '#ffca49, #ffb262'
    },
    backgroundColor: {
      type: String,
      value: '#e5e5e5'
    },
    radius: {
      type: [Number, String],
      value: 15
    }
  },
  data: {},
  methods: {},
  attached: function attached() {
    var activeColor = this.data.activeColor;

    if (!!~activeColor.indexOf(',')) {
      this.setData({
        activeLineColor: activeColor.split(',')
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwicGVyY2VudCIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJ2YWx1ZSIsInN0cm9rZVdpZHRoIiwiYWN0aXZlTGluZUNvbG9yIiwiQXJyYXkiLCJhY3RpdmVDb2xvciIsImJhY2tncm91bmRDb2xvciIsInJhZGl1cyIsImRhdGEiLCJtZXRob2RzIiwiYXR0YWNoZWQiLCJpbmRleE9mIiwic2V0RGF0YSIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJRUEsYUFBVyxFO0FBQ1hDLGNBQVk7QUFDVkMsYUFBUztBQUNQQyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURDO0FBRVBDLGFBQU87QUFGQSxLQURDO0FBS1ZDLGlCQUFhO0FBQ1hKLFlBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREs7QUFFWEMsYUFBTztBQUZJLEtBTEg7QUFTVkUscUJBQWlCO0FBQ2ZMLFlBQU1NLEtBRFM7QUFFZkgsYUFBTztBQUZRLEtBVFA7QUFhVkksaUJBQWE7QUFDWFAsWUFBTSxDQUFDRSxNQUFELEVBQVNJLEtBQVQsQ0FESztBQUVYSCxhQUFPO0FBRkksS0FiSDtBQWlCVksscUJBQWlCO0FBQ2ZSLFlBQU1FLE1BRFM7QUFFZkMsYUFBTztBQUZRLEtBakJQO0FBcUJWTSxZQUFRO0FBQ05ULFlBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREE7QUFFTkMsYUFBTztBQUZEO0FBckJFLEc7QUEwQlpPLFFBQU0sRTtBQUNOQyxXQUFTLEU7QUFDVEMsWUFBVSxvQkFBWTtBQUNwQixRQUFJTCxjQUFjLEtBQUtHLElBQUwsQ0FBVUgsV0FBNUI7O0FBRUEsUUFBSSxDQUFDLENBQUMsQ0FBQ0EsWUFBWU0sT0FBWixDQUFvQixHQUFwQixDQUFQLEVBQWlDO0FBQy9CLFdBQUtDLE9BQUwsQ0FBYTtBQUNYVCx5QkFBaUJFLFlBQVlRLEtBQVosQ0FBa0IsR0FBbEI7QUFETixPQUFiO0FBR0Q7QUFDRiIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIHVzaW5nQ29tcG9uZW50czoge31cbiAgfSxcbiAgYmVoYXZpb3JzOiBbXSxcbiAgcHJvcGVydGllczoge1xuICAgIHBlcmNlbnQ6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICB2YWx1ZTogMTAwXG4gICAgfSxcbiAgICBzdHJva2VXaWR0aDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIHZhbHVlOiAxNlxuICAgIH0sXG4gICAgYWN0aXZlTGluZUNvbG9yOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0sXG4gICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgIHZhbHVlOiAnI2ZmY2E0OSwgI2ZmYjI2MidcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZTVlNWU1J1xuICAgIH0sXG4gICAgcmFkaXVzOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgdmFsdWU6IDE1XG4gICAgfVxuICB9LFxuICBkYXRhOiB7fSxcbiAgbWV0aG9kczoge30sXG4gIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFjdGl2ZUNvbG9yID0gdGhpcy5kYXRhLmFjdGl2ZUNvbG9yO1xuXG4gICAgaWYgKCEhfmFjdGl2ZUNvbG9yLmluZGV4T2YoJywnKSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYWN0aXZlTGluZUNvbG9yOiBhY3RpdmVDb2xvci5zcGxpdCgnLCcpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSJdfQ==