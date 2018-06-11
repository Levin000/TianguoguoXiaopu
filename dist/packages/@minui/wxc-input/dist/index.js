export default Component({
  behaviors: [],
  properties: {
    title: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    iconColor: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'normal' // 输入框的模式选择，可选值：wrapped，有边框包裹, normal，只有下边框，none，无边框
    },
    right: {
      type: Boolean,
      value: false // 输入框是否居右显示
    },
    error: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    placeholderStyle: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: [Number, String],
      value: 140
    },
    cursorSpacing: {
      type: [Number, String],
      value: 0
    },
    focus: {
      type: Boolean,
      value: false
    },
    confirmType: {
      type: String,
      value: 'done'
    },
    confirmHold: {
      type: Boolean,
      value: false
    },
    cursor: {
      type: [Number, String],
      value: 0
    },
    selectionStart: {
      type: [Number, String],
      value: -1
    },
    selectionEnd: {
      type: [Number, String],
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    }
  },
  data: {},
  methods: {
    onInput(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('input', detail, option);
    },
    onFocus(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('focus', detail, option);
    },
    onBlur(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('blur', detail, option);
    },
    onConfirm(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('confirm', detail, option);
    }
  }
});