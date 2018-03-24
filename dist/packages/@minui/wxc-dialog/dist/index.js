'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    title: {
      type: String
    },
    titleColor: {
      type: String,
      value: '#000000'
    },
    content: {
      type: String
    },
    contentColor: {
      type: String,
      value: '#888888'
    },
    confirmText: {
      type: String
    },
    confirmColor: {
      type: String,
      value: '#ff5777'
    },
    cancelText: {
      type: String
    },
    cancelColor: {
      type: String,
      value: '#666666'
    },
    image: {
      type: String
    }
  },
  data: {},
  methods: {
    show: function show() {
      var popupComponent = this.selectComponent('.popup');
      popupComponent && popupComponent.show();
    },
    hide: function hide() {
      var popupComponent = this.selectComponent('.popup');
      popupComponent && popupComponent.hide();
    },
    onContentTap: function onContentTap() {},
    cancelCallback: function cancelCallback() {
      this.triggerEvent('cancel');
    },
    confirmCallback: function confirmCallback() {
      this.triggerEvent('confirm');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwidGl0bGVDb2xvciIsInZhbHVlIiwiY29udGVudCIsImNvbnRlbnRDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiaW1hZ2UiLCJkYXRhIiwibWV0aG9kcyIsInNob3ciLCJwb3B1cENvbXBvbmVudCIsInNlbGVjdENvbXBvbmVudCIsImhpZGUiLCJvbkNvbnRlbnRUYXAiLCJjYW5jZWxDYWxsYmFjayIsInRyaWdnZXJFdmVudCIsImNvbmZpcm1DYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUVBLGFBQVcsRTtBQUNYQyxjQUFZO0FBQ1ZDLFdBQU87QUFDTEMsWUFBTUM7QUFERCxLQURHO0FBSVZDLGdCQUFZO0FBQ1ZGLFlBQU1DLE1BREk7QUFFVkUsYUFBTztBQUZHLEtBSkY7QUFRVkMsYUFBUztBQUNQSixZQUFNQztBQURDLEtBUkM7QUFXVkksa0JBQWM7QUFDWkwsWUFBTUMsTUFETTtBQUVaRSxhQUFPO0FBRkssS0FYSjtBQWVWRyxpQkFBYTtBQUNYTixZQUFNQztBQURLLEtBZkg7QUFrQlZNLGtCQUFjO0FBQ1pQLFlBQU1DLE1BRE07QUFFWkUsYUFBTztBQUZLLEtBbEJKO0FBc0JWSyxnQkFBWTtBQUNWUixZQUFNQztBQURJLEtBdEJGO0FBeUJWUSxpQkFBYTtBQUNYVCxZQUFNQyxNQURLO0FBRVhFLGFBQU87QUFGSSxLQXpCSDtBQTZCVk8sV0FBTztBQUNMVixZQUFNQztBQUREO0FBN0JHLEc7QUFpQ1pVLFFBQU0sRTtBQUNOQyxXQUFTO0FBQ1BDLFFBRE8sa0JBQ0E7QUFDTCxVQUFJQyxpQkFBaUIsS0FBS0MsZUFBTCxDQUFxQixRQUFyQixDQUFyQjtBQUNBRCx3QkFBa0JBLGVBQWVELElBQWYsRUFBbEI7QUFDRCxLQUpNO0FBS1BHLFFBTE8sa0JBS0E7QUFDTCxVQUFJRixpQkFBaUIsS0FBS0MsZUFBTCxDQUFxQixRQUFyQixDQUFyQjtBQUNBRCx3QkFBa0JBLGVBQWVFLElBQWYsRUFBbEI7QUFDRCxLQVJNO0FBU1BDLGdCQVRPLDBCQVNTLENBQUUsQ0FUWDtBQVVQQyxrQkFWTyw0QkFVVztBQUNoQixXQUFLQyxZQUFMLENBQWtCLFFBQWxCO0FBQ0QsS0FaTTtBQWFQQyxtQkFiTyw2QkFhWTtBQUNqQixXQUFLRCxZQUFMLENBQWtCLFNBQWxCO0FBQ0Q7QUFmTSIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3d4Yy1wb3B1cCc6ICdAbWludWkvd3hjLXBvcHVwJ1xuICAgIH1cbiAgfSxcbiAgYmVoYXZpb3JzOiBbXSxcbiAgcHJvcGVydGllczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIHRpdGxlQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnIzAwMDAwMCdcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgY29udGVudENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyM4ODg4ODgnXG4gICAgfSxcbiAgICBjb25maXJtVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBjb25maXJtQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2ZmNTc3NydcbiAgICB9LFxuICAgIGNhbmNlbFRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgY2FuY2VsQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnIzY2NjY2NidcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHt9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdygpIHtcbiAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcucG9wdXAnKVxuICAgICAgcG9wdXBDb21wb25lbnQgJiYgcG9wdXBDb21wb25lbnQuc2hvdygpO1xuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcucG9wdXAnKVxuICAgICAgcG9wdXBDb21wb25lbnQgJiYgcG9wdXBDb21wb25lbnQuaGlkZSgpO1xuICAgIH0sXG4gICAgb25Db250ZW50VGFwICgpIHt9LFxuICAgIGNhbmNlbENhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjYW5jZWwnKVxuICAgIH0sXG4gICAgY29uZmlybUNhbGxiYWNrICgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjb25maXJtJylcbiAgICB9XG4gIH1cbn0iXX0=