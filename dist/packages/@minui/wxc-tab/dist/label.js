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
    componentId: {
      type: String,
      value: ''
    }
  },
  data: {
    activeKey: 0,
    width: 0
  },
  attached: function attached() {
    var _this = this;

    var componentId = this.data.componentId;
    _Event2.default.emit('tab-create-' + componentId, {
      key: this.data.tabIndex
    });

    _Event2.default.on('to-label-switch-' + componentId, function (activeKey) {
      _this.setData({ activeKey: activeKey });
    });

    _Event2.default.on('label-width-' + componentId, function (width) {
      _this.setData({ width: width });
    });
  },
  moved: function moved() {
    _Event2.default.removeListener();
  },

  methods: {
    onSwitch: function onSwitch() {
      _Event2.default.emit('from-label-switch-' + this.data.componentId, this.data.tabIndex);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidGFiSW5kZXgiLCJOdW1iZXIiLCJjb21wb25lbnRJZCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImRhdGEiLCJhY3RpdmVLZXkiLCJ3aWR0aCIsImF0dGFjaGVkIiwiZW1pdCIsImtleSIsIm9uIiwic2V0RGF0YSIsIm1vdmVkIiwicmVtb3ZlTGlzdGVuZXIiLCJtZXRob2RzIiwib25Td2l0Y2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7O0FBS0VBLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLGNBQVVDLE1BREE7QUFFVkMsaUJBQWE7QUFDWEMsWUFBTUMsTUFESztBQUVYQyxhQUFPO0FBRkk7QUFGSCxHO0FBT1pDLFFBQU07QUFDSkMsZUFBVyxDQURQO0FBRUpDLFdBQU87QUFGSCxHO0FBSU5DLFUsc0JBQVc7QUFBQTs7QUFDVCxRQUFNUCxjQUFjLEtBQUtJLElBQUwsQ0FBVUosV0FBOUI7QUFDQSxvQkFBTVEsSUFBTixpQkFBeUJSLFdBQXpCLEVBQXdDO0FBQ3RDUyxXQUFLLEtBQUtMLElBQUwsQ0FBVU47QUFEdUIsS0FBeEM7O0FBSUEsb0JBQU1ZLEVBQU4sc0JBQTRCVixXQUE1QixFQUEyQyxxQkFBWTtBQUNyRCxZQUFLVyxPQUFMLENBQWEsRUFBQ04sb0JBQUQsRUFBYjtBQUNELEtBRkQ7O0FBSUEsb0JBQU1LLEVBQU4sa0JBQXdCVixXQUF4QixFQUF1QyxpQkFBUTtBQUM3QyxZQUFLVyxPQUFMLENBQWEsRUFBRUwsWUFBRixFQUFiO0FBQ0QsS0FGRDtBQUdELEc7QUFDRE0sTyxtQkFBUTtBQUNOLG9CQUFNQyxjQUFOO0FBQ0QsRzs7QUFDREMsV0FBUztBQUNQQyxZQURPLHNCQUNJO0FBQ1Qsc0JBQU1QLElBQU4sd0JBQWdDLEtBQUtKLElBQUwsQ0FBVUosV0FBMUMsRUFBeUQsS0FBS0ksSUFBTCxDQUFVTixRQUFuRTtBQUNEO0FBSE0iLCJmaWxlIjoibGFiZWwud3hjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHt9XG4gIH0sXG4gIGJlaGF2aW9yczogW10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB0YWJJbmRleDogTnVtYmVyLFxuICAgIGNvbXBvbmVudElkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBhY3RpdmVLZXk6IDAsXG4gICAgd2lkdGg6IDBcbiAgfSxcbiAgYXR0YWNoZWQoKSB7XG4gICAgY29uc3QgY29tcG9uZW50SWQgPSB0aGlzLmRhdGEuY29tcG9uZW50SWQ7XG4gICAgRXZlbnQuZW1pdChgdGFiLWNyZWF0ZS0ke2NvbXBvbmVudElkfWAsIHtcbiAgICAgIGtleTogdGhpcy5kYXRhLnRhYkluZGV4XG4gICAgfSk7XG5cbiAgICBFdmVudC5vbihgdG8tbGFiZWwtc3dpdGNoLSR7Y29tcG9uZW50SWR9YCwgYWN0aXZlS2V5PT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHthY3RpdmVLZXl9KTtcbiAgICB9KTtcblxuICAgIEV2ZW50Lm9uKGBsYWJlbC13aWR0aC0ke2NvbXBvbmVudElkfWAsIHdpZHRoPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHsgd2lkdGggfSk7XG4gICAgfSk7XG4gIH0sXG4gIG1vdmVkKCkge1xuICAgIEV2ZW50LnJlbW92ZUxpc3RlbmVyKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblN3aXRjaCgpIHtcbiAgICAgIEV2ZW50LmVtaXQoYGZyb20tbGFiZWwtc3dpdGNoLSR7dGhpcy5kYXRhLmNvbXBvbmVudElkfWAsIHRoaXMuZGF0YS50YWJJbmRleCk7XG4gICAgfSxcbiAgfVxufSJdfQ==