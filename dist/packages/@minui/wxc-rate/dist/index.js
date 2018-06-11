export default Component({
  behaviors: [],
  properties: {
    value: {
      type: Number,
      value: 0
    },
    count: {
      type: Number,
      value: 5
    },
    size: {
      type: [String, Number],
      value: 44
    },
    color: {
      type: String,
      value: '#e5e5e5'
    },
    activeColor: {
      type: String,
      value: '#fdb757'
    },
    readonly: {
      type: Boolean,
      value: false
    },
    padding: {
      type: Number,
      value: 20
    }
  },
  data: {},
  methods: {
    handlerRate(e) {
      if (this.data.readonly) {
        return;
      }
      let score = e.target.dataset.score;
      if (score) {
        this.setData({
          value: score
        });
        let detail = e.detail;
        detail.value = score;
        let option = {};
        this.triggerEvent('rate', detail, option);
      }
    }
  }
});