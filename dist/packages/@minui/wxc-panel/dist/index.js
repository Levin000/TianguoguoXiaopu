export default Component({
  behaviors: [],
  properties: {
    title: {
      type: String,
      value: ''
    },
    margin: {
      type: Boolean,
      value: true
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  data: {},
  methods: {
    onClick(event) {
      let detail = event.detail;
      let option = {};
      this.triggerEvent('click', detail, option);
    }
  }
});