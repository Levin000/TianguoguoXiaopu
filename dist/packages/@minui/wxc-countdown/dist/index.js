'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Component({
  behaviors: [],
  properties: {
    countdown: {
      type: Number,
      value: 0,
      observer: 'init'
    },
    format: {
      type: String,
      value: 'dd天hh时mm分ss秒'
    },
    numStyle: {
      type: String,
      value: ''
    },
    symbolStyle: {
      type: String,
      value: ''
    }
  },
  data: {
    computeTime: 0,
    endTimeMs: 0
  },
  detached: function detached() {
    this.onPageHide();
  },

  methods: {
    /**
     * Initialization
     */
    init: function init() {
      var _data = this.data,
          countdown = _data.countdown,
          format = _data.format;
      // countdown seconds

      this.computeTime = countdown;
      // time format
      this.format = format;

      var now = Date.now();
      // end timestamp (millisecond)
      this.endTimeMs = now + this.computeTime * 1000;

      this.initCountdown();
    },


    /**
     * timer
     */
    initCountdown: function initCountdown() {
      var _this = this;

      clearInterval(this._timer);

      var now = Date.now();
      // countdown milliseconds
      var computeTimeMs = this.endTimeMs - now;
      // countdown interval
      var timeout = computeTimeMs % 1000 || 0;

      this._timer = setTimeout(function () {
        _this.initCountdown();
      }, timeout);

      this.setCountdownTimeItems(computeTimeMs);
    },


    /**
     * set countdown seconds
     * @param  {Number} computeTimeMs - Countdown milliseconds
     */
    setCountdownTimeItems: function setCountdownTimeItems(computeTimeMs) {
      this.computeTime = parseInt(Math.ceil(computeTimeMs / 1000));
      this.emitRunCount(this.computeTime);

      if (this.computeTime <= 0) {
        clearInterval(this._timer);
        this.emitEndCount();
      }

      var timeItems = this.getTimeItems(this.computeTime, this.format);
      this.setData({
        timeItems: timeItems
      });
    },


    /**
     * get rendering data
     * @param  {Number} computeTime - countdown seconds
     * @param  {String} format - time format
     * @return {Array} rendering data
     */
    getTimeItems: function getTimeItems(computeTime, format) {
      if (computeTime < 0) {
        computeTime = 0;
      }
      var arr = format.match(/[a-zA-Z]{1,3}/g) || [];
      var symbolArr = format.match(/[\u4e00-\u9fa5]+|[^a-zA-Z]/g) || [];
      var time = this.getTime(computeTime, format);
      return arr.map(function (item, i) {
        return {
          num: time[item],
          symbol: symbolArr[i]
        };
      });
    },


    /**
     * get countdown object
     * @param  {Number} leftseconds - countdown seconds
     * @param  {String} format - time format
     * @return {Object} separated countdown seconds width d, h, m, s
     */
    getTime: function getTime(leftseconds, format) {
      var d = leftseconds;

      var _map = [60, 60, 24].map(function (unit) {
        var num = d % unit;
        d = Math.floor(d / unit);
        return num;
      }),
          _map2 = _slicedToArray(_map, 3),
          s = _map2[0],
          m = _map2[1],
          h = _map2[2];

      if (leftseconds > 86400 && format.indexOf('d') === -1) {
        h += d * 24;
      }

      if (leftseconds > 3600 && format.indexOf('h') === -1) {
        m += h * 60;
      }

      if (leftseconds > 60 && format.indexOf('m') === -1) {
        s += m * 60;
      }

      return {
        dd: this.formatTime(d),
        hh: this.formatTime(h),
        mm: this.formatTime(m),
        ss: this.formatTime(s),
        d: d,
        h: h,
        m: m,
        s: s
      };
    },


    /**
     * zero padding
     * @param  {Number} val - number
     * @return {Number|String} the number after zero padding
     */
    formatTime: function formatTime(val) {
      return val < 10 ? '0' + val : val;
    },


    /**
     * timing callback
     */
    emitRunCount: function emitRunCount() {
      this.triggerEvent('runcount', {
        computeTime: this.computeTime
      });
    },


    /**
     * end callback
     */
    emitEndCount: function emitEndCount() {
      this.triggerEvent('endcount');
    },
    onPageShow: function onPageShow() {
      var now = Date.now();
      if (this.format && this.endTimeMs) {
        this.computeTime = parseInt((this.endTimeMs - now) / 1000);
        this.initCountdown();
      }
    },
    onPageHide: function onPageHide() {
      clearInterval(this._timer);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwiY291bnRkb3duIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib2JzZXJ2ZXIiLCJmb3JtYXQiLCJTdHJpbmciLCJudW1TdHlsZSIsInN5bWJvbFN0eWxlIiwiZGF0YSIsImNvbXB1dGVUaW1lIiwiZW5kVGltZU1zIiwiZGV0YWNoZWQiLCJvblBhZ2VIaWRlIiwibWV0aG9kcyIsImluaXQiLCJub3ciLCJEYXRlIiwiaW5pdENvdW50ZG93biIsImNsZWFySW50ZXJ2YWwiLCJfdGltZXIiLCJjb21wdXRlVGltZU1zIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJzZXRDb3VudGRvd25UaW1lSXRlbXMiLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwiZW1pdFJ1bkNvdW50IiwiZW1pdEVuZENvdW50IiwidGltZUl0ZW1zIiwiZ2V0VGltZUl0ZW1zIiwic2V0RGF0YSIsImFyciIsIm1hdGNoIiwic3ltYm9sQXJyIiwidGltZSIsImdldFRpbWUiLCJtYXAiLCJpdGVtIiwiaSIsIm51bSIsInN5bWJvbCIsImxlZnRzZWNvbmRzIiwiZCIsInVuaXQiLCJmbG9vciIsInMiLCJtIiwiaCIsImluZGV4T2YiLCJkZCIsImZvcm1hdFRpbWUiLCJoaCIsIm1tIiwic3MiLCJ2YWwiLCJ0cmlnZ2VyRXZlbnQiLCJvblBhZ2VTaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJRUEsYUFBVyxFO0FBQ1hDLGNBQVk7QUFDVkMsZUFBVztBQUNUQyxZQUFNQyxNQURHO0FBRVRDLGFBQU8sQ0FGRTtBQUdUQyxnQkFBVTtBQUhELEtBREQ7QUFNVkMsWUFBUTtBQUNOSixZQUFNSyxNQURBO0FBRU5ILGFBQU87QUFGRCxLQU5FO0FBVVZJLGNBQVU7QUFDUk4sWUFBTUssTUFERTtBQUVSSCxhQUFPO0FBRkMsS0FWQTtBQWNWSyxpQkFBYTtBQUNYUCxZQUFNSyxNQURLO0FBRVhILGFBQU87QUFGSTtBQWRILEc7QUFtQlpNLFFBQU07QUFDSkMsaUJBQWEsQ0FEVDtBQUVKQyxlQUFXO0FBRlAsRztBQUlOQyxVLHNCQUFZO0FBQ1YsU0FBS0MsVUFBTDtBQUNELEc7O0FBQ0RDLFdBQVM7QUFDUDs7O0FBR0FDLFFBSk8sa0JBSUE7QUFBQSxrQkFDcUIsS0FBS04sSUFEMUI7QUFBQSxVQUNBVCxTQURBLFNBQ0FBLFNBREE7QUFBQSxVQUNXSyxNQURYLFNBQ1dBLE1BRFg7QUFFTDs7QUFDQSxXQUFLSyxXQUFMLEdBQW1CVixTQUFuQjtBQUNBO0FBQ0EsV0FBS0ssTUFBTCxHQUFjQSxNQUFkOztBQUVBLFVBQU1XLE1BQU1DLEtBQUtELEdBQUwsRUFBWjtBQUNBO0FBQ0EsV0FBS0wsU0FBTCxHQUFpQkssTUFBTSxLQUFLTixXQUFMLEdBQW1CLElBQTFDOztBQUVBLFdBQUtRLGFBQUw7QUFDRCxLQWhCTTs7O0FBa0JQOzs7QUFHQUEsaUJBckJPLDJCQXFCUztBQUFBOztBQUNkQyxvQkFBYyxLQUFLQyxNQUFuQjs7QUFFQSxVQUFNSixNQUFNQyxLQUFLRCxHQUFMLEVBQVo7QUFDQTtBQUNBLFVBQUlLLGdCQUFnQixLQUFLVixTQUFMLEdBQWlCSyxHQUFyQztBQUNBO0FBQ0EsVUFBSU0sVUFBVUQsZ0JBQWdCLElBQWhCLElBQXdCLENBQXRDOztBQUVBLFdBQUtELE1BQUwsR0FBY0csV0FBVyxZQUFNO0FBQzFCLGNBQUtMLGFBQUw7QUFDSixPQUZhLEVBRVhJLE9BRlcsQ0FBZDs7QUFJQSxXQUFLRSxxQkFBTCxDQUEyQkgsYUFBM0I7QUFDRCxLQW5DTTs7O0FBcUNQOzs7O0FBSUFHLHlCQXpDTyxpQ0F5Q2VILGFBekNmLEVBeUM4QjtBQUNuQyxXQUFLWCxXQUFMLEdBQW1CZSxTQUFTQyxLQUFLQyxJQUFMLENBQVVOLGdCQUFnQixJQUExQixDQUFULENBQW5CO0FBQ0EsV0FBS08sWUFBTCxDQUFrQixLQUFLbEIsV0FBdkI7O0FBRUEsVUFBSSxLQUFLQSxXQUFMLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCUyxzQkFBYyxLQUFLQyxNQUFuQjtBQUNBLGFBQUtTLFlBQUw7QUFDRDs7QUFFRCxVQUFJQyxZQUFZLEtBQUtDLFlBQUwsQ0FBa0IsS0FBS3JCLFdBQXZCLEVBQW9DLEtBQUtMLE1BQXpDLENBQWhCO0FBQ0EsV0FBSzJCLE9BQUwsQ0FBYTtBQUNYRjtBQURXLE9BQWI7QUFHRCxLQXRETTs7O0FBd0RQOzs7Ozs7QUFNQUMsZ0JBOURPLHdCQThETXJCLFdBOUROLEVBOERtQkwsTUE5RG5CLEVBOEQyQjtBQUNoQyxVQUFJSyxjQUFjLENBQWxCLEVBQXFCO0FBQ25CQSxzQkFBYyxDQUFkO0FBQ0Q7QUFDRCxVQUFJdUIsTUFBTTVCLE9BQU82QixLQUFQLENBQWEsZ0JBQWIsS0FBa0MsRUFBNUM7QUFDQSxVQUFJQyxZQUFZOUIsT0FBTzZCLEtBQVAsQ0FBYSw2QkFBYixLQUErQyxFQUEvRDtBQUNBLFVBQUlFLE9BQU8sS0FBS0MsT0FBTCxDQUFhM0IsV0FBYixFQUEwQkwsTUFBMUIsQ0FBWDtBQUNBLGFBQU80QixJQUFJSyxHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDMUIsZUFBTztBQUNMQyxlQUFLTCxLQUFLRyxJQUFMLENBREE7QUFFTEcsa0JBQVFQLFVBQVVLLENBQVY7QUFGSCxTQUFQO0FBSUQsT0FMTSxDQUFQO0FBTUQsS0EzRU07OztBQTZFUDs7Ozs7O0FBTUFILFdBbkZPLG1CQW1GQ00sV0FuRkQsRUFtRmN0QyxNQW5GZCxFQW1Gc0I7QUFDM0IsVUFBSXVDLElBQUlELFdBQVI7O0FBRDJCLGlCQUVYLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWFMLEdBQWIsQ0FBaUIsVUFBQ08sSUFBRCxFQUFVO0FBQ3pDLFlBQUlKLE1BQU1HLElBQUlDLElBQWQ7QUFDQUQsWUFBSWxCLEtBQUtvQixLQUFMLENBQVdGLElBQUlDLElBQWYsQ0FBSjtBQUNBLGVBQU9KLEdBQVA7QUFDRCxPQUplLENBRlc7QUFBQTtBQUFBLFVBRXRCTSxDQUZzQjtBQUFBLFVBRW5CQyxDQUZtQjtBQUFBLFVBRWhCQyxDQUZnQjs7QUFRM0IsVUFBSU4sY0FBYyxLQUFkLElBQXVCdEMsT0FBTzZDLE9BQVAsQ0FBZSxHQUFmLE1BQXdCLENBQUMsQ0FBcEQsRUFBdUQ7QUFDckRELGFBQUtMLElBQUksRUFBVDtBQUNEOztBQUVELFVBQUlELGNBQWMsSUFBZCxJQUFzQnRDLE9BQU82QyxPQUFQLENBQWUsR0FBZixNQUF3QixDQUFDLENBQW5ELEVBQXNEO0FBQ3BERixhQUFLQyxJQUFJLEVBQVQ7QUFDRDs7QUFFRCxVQUFJTixjQUFjLEVBQWQsSUFBb0J0QyxPQUFPNkMsT0FBUCxDQUFlLEdBQWYsTUFBd0IsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsREgsYUFBS0MsSUFBSSxFQUFUO0FBQ0Q7O0FBRUQsYUFBTztBQUNMRyxZQUFJLEtBQUtDLFVBQUwsQ0FBZ0JSLENBQWhCLENBREM7QUFFTFMsWUFBSSxLQUFLRCxVQUFMLENBQWdCSCxDQUFoQixDQUZDO0FBR0xLLFlBQUksS0FBS0YsVUFBTCxDQUFnQkosQ0FBaEIsQ0FIQztBQUlMTyxZQUFJLEtBQUtILFVBQUwsQ0FBZ0JMLENBQWhCLENBSkM7QUFLTEgsWUFMSztBQU1MSyxZQU5LO0FBT0xELFlBUEs7QUFRTEQ7QUFSSyxPQUFQO0FBVUQsS0FqSE07OztBQW1IUDs7Ozs7QUFLQUssY0F4SE8sc0JBd0hJSSxHQXhISixFQXdIUztBQUNkLGFBQU9BLE1BQU0sRUFBTixTQUFlQSxHQUFmLEdBQXVCQSxHQUE5QjtBQUNELEtBMUhNOzs7QUE0SFA7OztBQUdBNUIsZ0JBL0hPLDBCQStIUTtBQUNiLFdBQUs2QixZQUFMLENBQWtCLFVBQWxCLEVBQThCO0FBQzVCL0MscUJBQWEsS0FBS0E7QUFEVSxPQUE5QjtBQUdELEtBbklNOzs7QUFxSVA7OztBQUdBbUIsZ0JBeElPLDBCQXdJUTtBQUNiLFdBQUs0QixZQUFMLENBQWtCLFVBQWxCO0FBQ0QsS0ExSU07QUE0SVBDLGNBNUlPLHdCQTRJTTtBQUNYLFVBQU0xQyxNQUFNQyxLQUFLRCxHQUFMLEVBQVo7QUFDQSxVQUFJLEtBQUtYLE1BQUwsSUFBZSxLQUFLTSxTQUF4QixFQUFtQztBQUNqQyxhQUFLRCxXQUFMLEdBQW1CZSxTQUFTLENBQUMsS0FBS2QsU0FBTCxHQUFpQkssR0FBbEIsSUFBeUIsSUFBbEMsQ0FBbkI7QUFDQSxhQUFLRSxhQUFMO0FBQ0Q7QUFDRixLQWxKTTtBQW9KUEwsY0FwSk8sd0JBb0pNO0FBQ1hNLG9CQUFjLEtBQUtDLE1BQW5CO0FBQ0Q7QUF0Sk0iLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHt9XG4gIH0sXG4gIGJlaGF2aW9yczogW10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBjb3VudGRvd246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgb2JzZXJ2ZXI6ICdpbml0J1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2Rk5aSpaGjml7ZtbeWIhnNz56eSJ1xuICAgIH0sXG4gICAgbnVtU3R5bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgc3ltYm9sU3R5bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIGNvbXB1dGVUaW1lOiAwLFxuICAgIGVuZFRpbWVNczogMFxuICB9LFxuICBkZXRhY2hlZCAoKSB7XG4gICAgdGhpcy5vblBhZ2VIaWRlKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemF0aW9uXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgIGxldCB7Y291bnRkb3duLCBmb3JtYXR9ID0gdGhpcy5kYXRhO1xuICAgICAgLy8gY291bnRkb3duIHNlY29uZHNcbiAgICAgIHRoaXMuY29tcHV0ZVRpbWUgPSBjb3VudGRvd247XG4gICAgICAvLyB0aW1lIGZvcm1hdFxuICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG5cbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAvLyBlbmQgdGltZXN0YW1wIChtaWxsaXNlY29uZClcbiAgICAgIHRoaXMuZW5kVGltZU1zID0gbm93ICsgdGhpcy5jb21wdXRlVGltZSAqIDEwMDA7XG5cbiAgICAgIHRoaXMuaW5pdENvdW50ZG93bigpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHRpbWVyXG4gICAgICovXG4gICAgaW5pdENvdW50ZG93bigpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuXG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgLy8gY291bnRkb3duIG1pbGxpc2Vjb25kc1xuICAgICAgbGV0IGNvbXB1dGVUaW1lTXMgPSB0aGlzLmVuZFRpbWVNcyAtIG5vdztcbiAgICAgIC8vIGNvdW50ZG93biBpbnRlcnZhbFxuICAgICAgbGV0IHRpbWVvdXQgPSBjb21wdXRlVGltZU1zICUgMTAwMCB8fCAwO1xuXG4gICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICB0aGlzLmluaXRDb3VudGRvd24oKTtcbiAgICAgIH0sIHRpbWVvdXQpXG5cbiAgICAgIHRoaXMuc2V0Q291bnRkb3duVGltZUl0ZW1zKGNvbXB1dGVUaW1lTXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzZXQgY291bnRkb3duIHNlY29uZHNcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGNvbXB1dGVUaW1lTXMgLSBDb3VudGRvd24gbWlsbGlzZWNvbmRzXG4gICAgICovXG4gICAgc2V0Q291bnRkb3duVGltZUl0ZW1zKGNvbXB1dGVUaW1lTXMpIHtcbiAgICAgIHRoaXMuY29tcHV0ZVRpbWUgPSBwYXJzZUludChNYXRoLmNlaWwoY29tcHV0ZVRpbWVNcyAvIDEwMDApKTtcbiAgICAgIHRoaXMuZW1pdFJ1bkNvdW50KHRoaXMuY29tcHV0ZVRpbWUpO1xuXG4gICAgICBpZiAodGhpcy5jb21wdXRlVGltZSA8PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICB0aGlzLmVtaXRFbmRDb3VudCgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUl0ZW1zID0gdGhpcy5nZXRUaW1lSXRlbXModGhpcy5jb21wdXRlVGltZSwgdGhpcy5mb3JtYXQpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdGltZUl0ZW1zXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBnZXQgcmVuZGVyaW5nIGRhdGFcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGNvbXB1dGVUaW1lIC0gY291bnRkb3duIHNlY29uZHNcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZvcm1hdCAtIHRpbWUgZm9ybWF0XG4gICAgICogQHJldHVybiB7QXJyYXl9IHJlbmRlcmluZyBkYXRhXG4gICAgICovXG4gICAgZ2V0VGltZUl0ZW1zKGNvbXB1dGVUaW1lLCBmb3JtYXQpIHtcbiAgICAgIGlmIChjb21wdXRlVGltZSA8IDApIHtcbiAgICAgICAgY29tcHV0ZVRpbWUgPSAwO1xuICAgICAgfVxuICAgICAgbGV0IGFyciA9IGZvcm1hdC5tYXRjaCgvW2EtekEtWl17MSwzfS9nKSB8fCBbXTtcbiAgICAgIGxldCBzeW1ib2xBcnIgPSBmb3JtYXQubWF0Y2goL1tcXHU0ZTAwLVxcdTlmYTVdK3xbXmEtekEtWl0vZykgfHwgW107XG4gICAgICBsZXQgdGltZSA9IHRoaXMuZ2V0VGltZShjb21wdXRlVGltZSwgZm9ybWF0KTtcbiAgICAgIHJldHVybiBhcnIubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbnVtOiB0aW1lW2l0ZW1dLFxuICAgICAgICAgIHN5bWJvbDogc3ltYm9sQXJyW2ldLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBnZXQgY291bnRkb3duIG9iamVjdFxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbGVmdHNlY29uZHMgLSBjb3VudGRvd24gc2Vjb25kc1xuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZm9ybWF0IC0gdGltZSBmb3JtYXRcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHNlcGFyYXRlZCBjb3VudGRvd24gc2Vjb25kcyB3aWR0aCBkLCBoLCBtLCBzXG4gICAgICovXG4gICAgZ2V0VGltZShsZWZ0c2Vjb25kcywgZm9ybWF0KSB7XG4gICAgICBsZXQgZCA9IGxlZnRzZWNvbmRzO1xuICAgICAgbGV0IFtzLCBtLCBoXSA9IFs2MCwgNjAsIDI0XS5tYXAoKHVuaXQpID0+IHtcbiAgICAgICAgbGV0IG51bSA9IGQgJSB1bml0O1xuICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gdW5pdCk7XG4gICAgICAgIHJldHVybiBudW07XG4gICAgICB9KVxuXG4gICAgICBpZiAobGVmdHNlY29uZHMgPiA4NjQwMCAmJiBmb3JtYXQuaW5kZXhPZignZCcpID09PSAtMSkge1xuICAgICAgICBoICs9IGQgKiAyNDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRzZWNvbmRzID4gMzYwMCAmJiBmb3JtYXQuaW5kZXhPZignaCcpID09PSAtMSkge1xuICAgICAgICBtICs9IGggKiA2MDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRzZWNvbmRzID4gNjAgJiYgZm9ybWF0LmluZGV4T2YoJ20nKSA9PT0gLTEpIHtcbiAgICAgICAgcyArPSBtICogNjA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRkOiB0aGlzLmZvcm1hdFRpbWUoZCksXG4gICAgICAgIGhoOiB0aGlzLmZvcm1hdFRpbWUoaCksXG4gICAgICAgIG1tOiB0aGlzLmZvcm1hdFRpbWUobSksXG4gICAgICAgIHNzOiB0aGlzLmZvcm1hdFRpbWUocyksXG4gICAgICAgIGQsXG4gICAgICAgIGgsXG4gICAgICAgIG0sXG4gICAgICAgIHNcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogemVybyBwYWRkaW5nXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB2YWwgLSBudW1iZXJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSB0aGUgbnVtYmVyIGFmdGVyIHplcm8gcGFkZGluZ1xuICAgICAqL1xuICAgIGZvcm1hdFRpbWUodmFsKSB7XG4gICAgICByZXR1cm4gdmFsIDwgMTAgPyBgMCR7dmFsfWAgOiB2YWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHRpbWluZyBjYWxsYmFja1xuICAgICAqL1xuICAgIGVtaXRSdW5Db3VudCgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdydW5jb3VudCcsIHtcbiAgICAgICAgY29tcHV0ZVRpbWU6IHRoaXMuY29tcHV0ZVRpbWVcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGVuZCBjYWxsYmFja1xuICAgICAqL1xuICAgIGVtaXRFbmRDb3VudCgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdlbmRjb3VudCcpO1xuICAgIH0sXG5cbiAgICBvblBhZ2VTaG93KCkge1xuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIGlmICh0aGlzLmZvcm1hdCAmJiB0aGlzLmVuZFRpbWVNcykge1xuICAgICAgICB0aGlzLmNvbXB1dGVUaW1lID0gcGFyc2VJbnQoKHRoaXMuZW5kVGltZU1zIC0gbm93KSAvIDEwMDApO1xuICAgICAgICB0aGlzLmluaXRDb3VudGRvd24oKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QYWdlSGlkZSgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgIH1cbiAgfVxufSJdfQ==