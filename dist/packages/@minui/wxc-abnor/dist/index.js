'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Component({
  behaviors: [],
  properties: {
    type: {
      type: String,
      value: '',
      observer: function observer(type) {
        if (type && _config2.default[type]) {
          var image = this.data.image || _config2.default[type].image;
          var title = this.data.title || _config2.default[type].title;
          var button = this.data.button || _config2.default[type].button;
          var tip = this.data.tip || _config2.default[type].tip;
          this.setData({
            image: image,
            title: title,
            button: button,
            tip: tip
          });
        }
      }
    },
    image: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    tip: {
      type: String,
      value: ''
    },
    button: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    emitAbnorTap: function emitAbnorTap(event) {
      var detail = event.detail;
      var option = {};
      this.triggerEvent('abnortap', detail, option);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwib2JzZXJ2ZXIiLCJpbWFnZSIsImRhdGEiLCJ0aXRsZSIsImJ1dHRvbiIsInRpcCIsInNldERhdGEiLCJtZXRob2RzIiwiZW1pdEFibm9yVGFwIiwiZXZlbnQiLCJkZXRhaWwiLCJvcHRpb24iLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7O0FBTUlBLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLFVBQU07QUFDSkEsWUFBTUMsTUFERjtBQUVKQyxhQUFPLEVBRkg7QUFHSkMsY0FISSxvQkFHS0gsSUFITCxFQUdXO0FBQ2IsWUFBSUEsUUFBUSxpQkFBTUEsSUFBTixDQUFaLEVBQXlCO0FBQ3ZCLGNBQUlJLFFBQVEsS0FBS0MsSUFBTCxDQUFVRCxLQUFWLElBQW1CLGlCQUFNSixJQUFOLEVBQVlJLEtBQTNDO0FBQ0EsY0FBSUUsUUFBUSxLQUFLRCxJQUFMLENBQVVDLEtBQVYsSUFBbUIsaUJBQU1OLElBQU4sRUFBWU0sS0FBM0M7QUFDQSxjQUFJQyxTQUFTLEtBQUtGLElBQUwsQ0FBVUUsTUFBVixJQUFvQixpQkFBTVAsSUFBTixFQUFZTyxNQUE3QztBQUNBLGNBQUlDLE1BQU0sS0FBS0gsSUFBTCxDQUFVRyxHQUFWLElBQWlCLGlCQUFNUixJQUFOLEVBQVlRLEdBQXZDO0FBQ0EsZUFBS0MsT0FBTCxDQUFhO0FBQ1hMLHdCQURXO0FBRVhFLHdCQUZXO0FBR1hDLDBCQUhXO0FBSVhDO0FBSlcsV0FBYjtBQU1EO0FBQ0Y7QUFoQkcsS0FESTtBQW1CVkosV0FBTztBQUNMSixZQUFNQyxNQUREO0FBRUxDLGFBQU87QUFGRixLQW5CRztBQXVCVkksV0FBTztBQUNMTixZQUFNQyxNQUREO0FBRUxDLGFBQU87QUFGRixLQXZCRztBQTJCVk0sU0FBSztBQUNIUixZQUFNQyxNQURIO0FBRUhDLGFBQU87QUFGSixLQTNCSztBQStCVkssWUFBUTtBQUNOUCxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRDtBQS9CRSxHO0FBb0NaRyxRQUFNLEU7QUFDTkssV0FBUztBQUNQQyxnQkFETyx3QkFDTUMsS0FETixFQUNhO0FBQ2xCLFVBQUlDLFNBQVNELE1BQU1DLE1BQW5CO0FBQ0EsVUFBSUMsU0FBUyxFQUFiO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQixVQUFsQixFQUE4QkYsTUFBOUIsRUFBc0NDLE1BQXRDO0FBQ0Q7QUFMTSIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZXMgZnJvbSAnLi9jb25maWcnXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICAgIH0sXG4gICAgYmVoYXZpb3JzOiBbXSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBvYnNlcnZlcih0eXBlKSB7XG4gICAgICAgICAgaWYgKHR5cGUgJiYgVHlwZXNbdHlwZV0pIHtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IHRoaXMuZGF0YS5pbWFnZSB8fCBUeXBlc1t0eXBlXS5pbWFnZTtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuZGF0YS50aXRsZSB8fCBUeXBlc1t0eXBlXS50aXRsZTtcbiAgICAgICAgICAgIGxldCBidXR0b24gPSB0aGlzLmRhdGEuYnV0dG9uIHx8IFR5cGVzW3R5cGVdLmJ1dHRvbjtcbiAgICAgICAgICAgIGxldCB0aXAgPSB0aGlzLmRhdGEudGlwIHx8IFR5cGVzW3R5cGVdLnRpcDtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICB0aXBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcbiAgICAgIHRpcDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge30sXG4gICAgbWV0aG9kczoge1xuICAgICAgZW1pdEFibm9yVGFwKGV2ZW50KSB7XG4gICAgICAgIGxldCBkZXRhaWwgPSBldmVudC5kZXRhaWw7XG4gICAgICAgIGxldCBvcHRpb24gPSB7fTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Fibm9ydGFwJywgZGV0YWlsLCBvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSJdfQ==