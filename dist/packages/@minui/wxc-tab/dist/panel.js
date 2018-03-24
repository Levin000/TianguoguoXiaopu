'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = require('./Event.js');

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Component({
  behaviors: [],
  properties: {
    tabIndex: Number,
    label: String,
    componentId: {
      type: String,
      value: ''
    }
  },
  data: {
    activeKey: 1,
    test: 0
  },
  attached: function attached() {
    var _this = this;

    this.componentId = this.data.componentId;
    this.data.label && _Event2.default.emit('tab-create-' + this.componentId, {
      key: this.data.tabIndex,
      label: this.data.label
    });
    _Event2.default.on('to-panel-switch-' + this.componentId, function (activeKey) {
      _this.setData({ activeKey: activeKey });
    });
  },

  methods: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidGFiSW5kZXgiLCJOdW1iZXIiLCJsYWJlbCIsIlN0cmluZyIsImNvbXBvbmVudElkIiwidHlwZSIsInZhbHVlIiwiZGF0YSIsImFjdGl2ZUtleSIsInRlc3QiLCJhdHRhY2hlZCIsImVtaXQiLCJrZXkiLCJvbiIsInNldERhdGEiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7OztBQUtFQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxjQUFVQyxNQURBO0FBRVZDLFdBQU9DLE1BRkc7QUFHVkMsaUJBQWE7QUFDWEMsWUFBTUYsTUFESztBQUVYRyxhQUFPO0FBRkk7QUFISCxHO0FBUVpDLFFBQU07QUFDSkMsZUFBVyxDQURQO0FBRUpDLFVBQU07QUFGRixHO0FBSU5DLFUsc0JBQVc7QUFBQTs7QUFDVCxTQUFLTixXQUFMLEdBQW1CLEtBQUtHLElBQUwsQ0FBVUgsV0FBN0I7QUFDQSxTQUFLRyxJQUFMLENBQVVMLEtBQVYsSUFBbUIsZ0JBQU1TLElBQU4saUJBQXlCLEtBQUtQLFdBQTlCLEVBQTZDO0FBQzlEUSxXQUFLLEtBQUtMLElBQUwsQ0FBVVAsUUFEK0M7QUFFOURFLGFBQU8sS0FBS0ssSUFBTCxDQUFVTDtBQUY2QyxLQUE3QyxDQUFuQjtBQUlBLG9CQUFNVyxFQUFOLHNCQUE0QixLQUFLVCxXQUFqQyxFQUFnRCxxQkFBYTtBQUMzRCxZQUFLVSxPQUFMLENBQWEsRUFBRU4sb0JBQUYsRUFBYjtBQUNELEtBRkQ7QUFHRCxHOztBQUNETyxXQUFTIiwiZmlsZSI6InBhbmVsLnd4YyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBiZWhhdmlvcnM6IFtdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGFiSW5kZXg6IE51bWJlcixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGNvbXBvbmVudElkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBhY3RpdmVLZXk6IDEsXG4gICAgdGVzdDogMFxuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudElkID0gdGhpcy5kYXRhLmNvbXBvbmVudElkO1xuICAgIHRoaXMuZGF0YS5sYWJlbCAmJiBFdmVudC5lbWl0KGB0YWItY3JlYXRlLSR7dGhpcy5jb21wb25lbnRJZH1gLCB7XG4gICAgICBrZXk6IHRoaXMuZGF0YS50YWJJbmRleCxcbiAgICAgIGxhYmVsOiB0aGlzLmRhdGEubGFiZWxcbiAgICB9KTtcbiAgICBFdmVudC5vbihgdG8tcGFuZWwtc3dpdGNoLSR7dGhpcy5jb21wb25lbnRJZH1gLCBhY3RpdmVLZXkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHsgYWN0aXZlS2V5IH0pO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7fVxufSJdfQ==