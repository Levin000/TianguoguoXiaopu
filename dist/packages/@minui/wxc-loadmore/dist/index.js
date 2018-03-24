'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config.js');

exports.default = Component({
  behaviors: [],
  properties: {
    text: {
      type: String,
      value: ''
    },
    isEnd: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String
    }
  },
  data: {
    type: _config.TYPES[Math.floor(Math.random() * _config.TYPES.length)],
    iconStatus: _config.IconType.HIDDEN,
    iconType: _config.IconType
  },
  attached: function attached() {
    var iconStatus = _config.IconType.HIDDEN;
    var icon = this.data.icon;
    if (icon) {
      iconStatus = _config.IconType.SHOW_DEFAULT;
    }
    if (/\.(jpg|gif|jpeg|png)+$/.test(icon)) {
      iconStatus = _config.IconType.SHOW_CONFIG;
    }
    this.setData({
      iconStatus: iconStatus
    });
  },

  methods: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImlzRW5kIiwiQm9vbGVhbiIsImljb24iLCJkYXRhIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaWNvblN0YXR1cyIsIkhJRERFTiIsImljb25UeXBlIiwiYXR0YWNoZWQiLCJTSE9XX0RFRkFVTFQiLCJ0ZXN0IiwiU0hPV19DT05GSUciLCJzZXREYXRhIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQU1FQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxVQUFNO0FBQ0pDLFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZILEtBREk7QUFLVkMsV0FBTztBQUNMSCxZQUFNSSxPQUREO0FBRUxGLGFBQU87QUFGRixLQUxHO0FBU1ZHLFVBQU07QUFDSkwsWUFBTUM7QUFERjtBQVRJLEc7QUFhWkssUUFBTTtBQUNKTixVQUFNLGNBQU1PLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixjQUFNQyxNQUFqQyxDQUFOLENBREY7QUFFSkMsZ0JBQVksaUJBQVNDLE1BRmpCO0FBR0pDO0FBSEksRztBQUtOQyxVLHNCQUFXO0FBQ1QsUUFBSUgsYUFBYSxpQkFBU0MsTUFBMUI7QUFDQSxRQUFNUCxPQUFPLEtBQUtDLElBQUwsQ0FBVUQsSUFBdkI7QUFDQSxRQUFJQSxJQUFKLEVBQVU7QUFDUk0sbUJBQWEsaUJBQVNJLFlBQXRCO0FBQ0Q7QUFDRCxRQUFLLHdCQUFELENBQTJCQyxJQUEzQixDQUFnQ1gsSUFBaEMsQ0FBSixFQUEyQztBQUN6Q00sbUJBQWEsaUJBQVNNLFdBQXRCO0FBQ0Q7QUFDRCxTQUFLQyxPQUFMLENBQWE7QUFDWFA7QUFEVyxLQUFiO0FBR0QsRzs7QUFDRFEsV0FBUyIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUWVBFUywgSWNvblR5cGUgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBiZWhhdmlvcnM6IFtdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBpc0VuZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgdHlwZTogVFlQRVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogVFlQRVMubGVuZ3RoKV0sXG4gICAgaWNvblN0YXR1czogSWNvblR5cGUuSElEREVOLFxuICAgIGljb25UeXBlOiBJY29uVHlwZVxuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgICBsZXQgaWNvblN0YXR1cyA9IEljb25UeXBlLkhJRERFTjtcbiAgICBjb25zdCBpY29uID0gdGhpcy5kYXRhLmljb247XG4gICAgaWYgKGljb24pIHtcbiAgICAgIGljb25TdGF0dXMgPSBJY29uVHlwZS5TSE9XX0RFRkFVTFQ7XG4gICAgfVxuICAgIGlmICgoL1xcLihqcGd8Z2lmfGpwZWd8cG5nKSskLykudGVzdChpY29uKSkge1xuICAgICAgaWNvblN0YXR1cyA9IEljb25UeXBlLlNIT1dfQ09ORklHO1xuICAgIH1cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaWNvblN0YXR1c1xuICAgIH0pXG4gIH0sXG4gIG1ldGhvZHM6IHt9XG59Il19