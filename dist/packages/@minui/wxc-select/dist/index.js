export default Component({
  behaviors: [],
  properties: {
    items: {
      type: Array,
      value: []
    },
    checked: {
      type: [String, Number],
      value: ''
    },
    color: {
      type: String,
      value: '#ff5777'
    }
  },
  data: {},
  methods: {
    radioChange(e) {
      this.setData({
        checked: e.detail.value
      });
      let detail = e.detail || {};
      let option = {};
      this.triggerEvent('change', detail, option);
    }
  }
});