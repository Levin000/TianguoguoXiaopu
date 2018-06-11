import { TYPES, IconType } from './config.js';

export default Component({
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
    type: TYPES[Math.floor(Math.random() * TYPES.length)],
    iconStatus: IconType.HIDDEN,
    iconType: IconType
  },
  attached() {
    let iconStatus = IconType.HIDDEN;
    const icon = this.data.icon;
    if (icon) {
      iconStatus = IconType.SHOW_DEFAULT;
    }
    if (/\.(jpg|gif|jpeg|png)+$/.test(icon)) {
      iconStatus = IconType.SHOW_CONFIG;
    }
    this.setData({
      iconStatus
    });
  },
  methods: {}
});