export default Component({
  behaviors: [],
  properties: {
    percent: {
      type: [Number, String],
      value: 100
    },
    strokeWidth: {
      type: [Number, String],
      value: 16
    },
    activeLineColor: {
      type: Array,
      value: []
    },
    activeColor: {
      type: [String, Array],
      value: '#ffca49, #ffb262'
    },
    backgroundColor: {
      type: String,
      value: '#e5e5e5'
    },
    radius: {
      type: [Number, String],
      value: 15
    }
  },
  data: {},
  methods: {},
  attached: function () {
    let activeColor = this.data.activeColor;

    if (!!~activeColor.indexOf(',')) {
      this.setData({
        activeLineColor: activeColor.split(',')
      });
    }
  }
});