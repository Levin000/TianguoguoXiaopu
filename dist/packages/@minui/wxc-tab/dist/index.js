'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = require('./Event.js');

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Component({
  options: {
    multipleSlots: true // support multi slot
  },
  behaviors: [],
  properties: {
    defaultIndex: {
      type: Number,
      value: 0
    },
    componentId: {
      type: String,
      value: ''
    },
    animate: {
      type: Boolean,
      value: false
    },
    textColor: {
      type: String,
      value: '#000'
    },
    activeTextColor: {
      type: String,
      value: '#ff5777'
    },
    lineColor: {
      type: String,
      value: '#ddd'
    },
    activeLineColor: {
      type: String,
      value: '#ff5777'
    }
  },
  data: {
    tabs: [],
    width: 0,
    activeKey: 0,
    move: 0
  },
  attached: function attached() {
    var _this = this;

    this.componentId = this.data.componentId;
    this.tabs = [];
    _Event2.default.on('tab-create-' + this.componentId, function (tab) {
      _this.type = !tab.label ? 'complex' : 'simple';
      _this.tabs.push(tab);
    });
  },
  ready: function ready() {
    var activeKey = this.minAndMax(this.data.defaultIndex);
    this.onSwitch(activeKey, 'all');
    this.listenSwitch();
    //    const width = this.tabs.length < 5 ? (100 / this.tabs.length) : 25;
    var len = this.tabs.length;
    var width = parseInt(750 / (len > 5 ? 5 : len));
    this.type === 'complex' && _Event2.default.emit('label-width-' + this.componentId, width);
    this.setData({
      tabs: this.tabs,
      width: width,
      type: this.type,
      move: width * activeKey
    });
  },
  detached: function detached() {
    _Event2.default.removeListener();
  },

  methods: {

    // limit input range
    minAndMax: function minAndMax(activeKey) {
      var max = this.tabs.length - 1;
      var min = 0;
      if (activeKey > max) {
        return max;
      } else if (activeKey < min) {
        return 0;
      } else {
        return activeKey;
      }
    },


    // lisen child component tab event
    listenSwitch: function listenSwitch() {
      var _this2 = this;

      _Event2.default.on('from-label-switch-' + this.componentId, function (key) {
        _this2.onSwitch(key, 'to-panel');
      });
      _Event2.default.on('from-panel-switch-' + this.componentId, function (key) {
        _this2.onSwitch(key, 'to-label');
      });
    },
    onSwitch: function onSwitch(activeKey, toNotice) {
      if (!toNotice) {
        activeKey = activeKey.currentTarget.dataset.idx;
        toNotice = 'to-panel';
      }
      var move = activeKey * this.data.width;
      this.setData({
        activeKey: activeKey,
        move: move
      });

      // to notice panel and label tab has switched
      if (toNotice === 'all') {
        _Event2.default.emit('to-label-switch-' + this.componentId, activeKey);
        _Event2.default.emit('to-panel-switch-' + this.componentId, activeKey);
      } else {
        _Event2.default.emit(toNotice + '-switch-' + this.componentId, activeKey);
      }

      this.afterSwitch(activeKey);
    },
    afterSwitch: function afterSwitch(activeKey) {
      this.triggerEvent('tabchange', {
        key: activeKey,
        componentId: this.componentId
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJvcHRpb25zIiwibXVsdGlwbGVTbG90cyIsImJlaGF2aW9ycyIsInByb3BlcnRpZXMiLCJkZWZhdWx0SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsImFuaW1hdGUiLCJCb29sZWFuIiwidGV4dENvbG9yIiwiYWN0aXZlVGV4dENvbG9yIiwibGluZUNvbG9yIiwiYWN0aXZlTGluZUNvbG9yIiwiZGF0YSIsInRhYnMiLCJ3aWR0aCIsImFjdGl2ZUtleSIsIm1vdmUiLCJhdHRhY2hlZCIsIm9uIiwidGFiIiwibGFiZWwiLCJwdXNoIiwicmVhZHkiLCJtaW5BbmRNYXgiLCJvblN3aXRjaCIsImxpc3RlblN3aXRjaCIsImxlbiIsImxlbmd0aCIsInBhcnNlSW50IiwiZW1pdCIsInNldERhdGEiLCJkZXRhY2hlZCIsInJlbW92ZUxpc3RlbmVyIiwibWV0aG9kcyIsIm1heCIsIm1pbiIsImtleSIsInRvTm90aWNlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZHgiLCJhZnRlclN3aXRjaCIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7QUFLRUEsV0FBUztBQUNQQyxtQkFBZSxJQURSLENBQ2E7QUFEYixHO0FBR1RDLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLGtCQUFjO0FBQ1pDLFlBQU1DLE1BRE07QUFFWkMsYUFBTztBQUZLLEtBREo7QUFLVkMsaUJBQWE7QUFDWEgsWUFBTUksTUFESztBQUVYRixhQUFPO0FBRkksS0FMSDtBQVNWRyxhQUFTO0FBQ1BMLFlBQU1NLE9BREM7QUFFUEosYUFBTztBQUZBLEtBVEM7QUFhVkssZUFBVztBQUNUUCxZQUFNSSxNQURHO0FBRVRGLGFBQU87QUFGRSxLQWJEO0FBaUJWTSxxQkFBaUI7QUFDZlIsWUFBTUksTUFEUztBQUVmRixhQUFPO0FBRlEsS0FqQlA7QUFxQlZPLGVBQVc7QUFDVFQsWUFB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T0FIRCxNQUdPO0FBQ0wsd0JBQU1jLElBQU4sQ0FBY1EsUUFBZCxnQkFBaUMsS0FBS2pDLFdBQXRDLEVBQXFEVyxTQUFyRDtBQUNEOztBQUVELFdBQUswQixXQUFMLENBQWlCMUIsU0FBakI7QUFDRCxLQTdDTTtBQStDUDBCLGVBL0NPLHVCQStDSzFCLFNBL0NMLEVBK0NnQjtBQUNyQixXQUFLMkIsWUFBTCxDQUFrQixXQUFsQixFQUErQjtBQUM3Qk4sYUFBS3JCLFNBRHdCO0FBRTdCWCxxQkFBYSxLQUFLQTtBQUZXLE9BQS9CO0FBSUQ7QUFwRE0iLCJmaWxlIjoiaW5kZXgud3hjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWc6IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHt9XG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlIC8vIHN1cHBvcnQgbXVsdGkgc2xvdFxuICB9LFxuICBiZWhhdmlvcnM6IFtdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgZGVmYXVsdEluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMFxuICAgIH0sXG4gICAgY29tcG9uZW50SWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgdGV4dENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyMwMDAnLFxuICAgIH0sXG4gICAgYWN0aXZlVGV4dENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmZjU3NzcnLFxuICAgIH0sXG4gICAgbGluZUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNkZGQnLFxuICAgIH0sXG4gICAgYWN0aXZlTGluZUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmZjU3NzcnLFxuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIHRhYnM6IFtdLFxuICAgIHdpZHRoOiAwLFxuICAgIGFjdGl2ZUtleTogMCxcbiAgICBtb3ZlOiAwXG4gIH0sXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuY29tcG9uZW50SWQgPSB0aGlzLmRhdGEuY29tcG9uZW50SWQ7XG4gICAgdGhpcy50YWJzID0gW107XG4gICAgRXZlbnQub24oYHRhYi1jcmVhdGUtJHt0aGlzLmNvbXBvbmVudElkfWAsIHRhYiA9PiB7XG4gICAgICB0aGlzLnR5cGUgPSAhdGFiLmxhYmVsID8gJ2NvbXBsZXgnIDogJ3NpbXBsZSc7XG4gICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIH0pO1xuICB9LFxuICByZWFkeSgpIHtcbiAgICBsZXQgYWN0aXZlS2V5ID0gdGhpcy5taW5BbmRNYXgodGhpcy5kYXRhLmRlZmF1bHRJbmRleCk7XG4gICAgdGhpcy5vblN3aXRjaChhY3RpdmVLZXksICdhbGwnKTtcbiAgICB0aGlzLmxpc3RlblN3aXRjaCgpO1xuLy8gICAgY29uc3Qgd2lkdGggPSB0aGlzLnRhYnMubGVuZ3RoIDwgNSA/ICgxMDAgLyB0aGlzLnRhYnMubGVuZ3RoKSA6IDI1O1xuICAgIGxldCBsZW4gPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQoNzUwIC8gKGxlbiA+IDU/IDUgOiBsZW4pKVxuICAgIHRoaXMudHlwZSA9PT0gJ2NvbXBsZXgnICYmIEV2ZW50LmVtaXQoYGxhYmVsLXdpZHRoLSR7dGhpcy5jb21wb25lbnRJZH1gLCB3aWR0aCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHRhYnM6IHRoaXMudGFicyxcbiAgICAgIHdpZHRoLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbW92ZTogd2lkdGggKiBhY3RpdmVLZXlcbiAgICB9KTtcbiAgfSxcbiAgZGV0YWNoZWQoKSB7XG4gICAgRXZlbnQucmVtb3ZlTGlzdGVuZXIoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuXG4gICAgLy8gbGltaXQgaW5wdXQgcmFuZ2VcbiAgICBtaW5BbmRNYXgoYWN0aXZlS2V5KSB7XG4gICAgICBjb25zdCBtYXggPSB0aGlzLnRhYnMubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IG1pbiA9IDA7XG4gICAgICBpZiAoIGFjdGl2ZUtleSA+IG1heCApIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlS2V5IDwgbWluKXtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYWN0aXZlS2V5O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBsaXNlbiBjaGlsZCBjb21wb25lbnQgdGFiIGV2ZW50XG4gICAgbGlzdGVuU3dpdGNoKCkge1xuICAgICAgRXZlbnQub24oYGZyb20tbGFiZWwtc3dpdGNoLSR7dGhpcy5jb21wb25lbnRJZH1gLCBrZXkgPT4ge1xuICAgICAgICB0aGlzLm9uU3dpdGNoKGtleSwgJ3RvLXBhbmVsJyk7XG4gICAgICB9KTtcbiAgICAgIEV2ZW50Lm9uKGBmcm9tLXBhbmVsLXN3aXRjaC0ke3RoaXMuY29tcG9uZW50SWR9YCwga2V5ID0+IHtcbiAgICAgICAgdGhpcy5vblN3aXRjaChrZXksICd0by1sYWJlbCcpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3dpdGNoKGFjdGl2ZUtleSwgdG9Ob3RpY2UpIHtcbiAgICAgIGlmICghdG9Ob3RpY2UpIHtcbiAgICAgICAgYWN0aXZlS2V5ID0gYWN0aXZlS2V5LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZHg7XG4gICAgICAgIHRvTm90aWNlID0gJ3RvLXBhbmVsJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1vdmUgPSBhY3RpdmVLZXkgKiB0aGlzLmRhdGEud2lkdGg7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhY3RpdmVLZXksXG4gICAgICAgIG1vdmVcbiAgICAgIH0pO1xuXG4gICAgICAvLyB0byBub3RpY2UgcGFuZWwgYW5kIGxhYmVsIHRhYiBoYXMgc3dpdGNoZWRcbiAgICAgIGlmICh0b05vdGljZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgRXZlbnQuZW1pdChgdG8tbGFiZWwtc3dpdGNoLSR7dGhpcy5jb21wb25lbnRJZH1gLCBhY3RpdmVLZXkpO1xuICAgICAgICBFdmVudC5lbWl0KGB0by1wYW5lbC1zd2l0Y2gtJHt0aGlzLmNvbXBvbmVudElkfWAsIGFjdGl2ZUtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFdmVudC5lbWl0KGAke3RvTm90aWNlfS1zd2l0Y2gtJHt0aGlzLmNvbXBvbmVudElkfWAsIGFjdGl2ZUtleSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWZ0ZXJTd2l0Y2goYWN0aXZlS2V5KTtcbiAgICB9LFxuXG4gICAgYWZ0ZXJTd2l0Y2goYWN0aXZlS2V5KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgndGFiY2hhbmdlJywge1xuICAgICAgICBrZXk6IGFjdGl2ZUtleSxcbiAgICAgICAgY29tcG9uZW50SWQ6IHRoaXMuY29tcG9uZW50SWRcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG59Il19