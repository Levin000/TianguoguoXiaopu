export default Component({
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
    show() {
      let popupComponent = this.selectComponent('.popup');
      popupComponent && popupComponent.show();
    },
    hide() {
      let popupComponent = this.selectComponent('.popup');
      popupComponent && popupComponent.hide();
    },
    onContentTap() {},
    cancelCallback() {
      this.triggerEvent('cancel');
    },
    confirmCallback() {
      this.triggerEvent('confirm');
    }
  }
});