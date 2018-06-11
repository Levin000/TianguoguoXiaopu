import Event from './Event.js';
export default Component({
  behaviors: [],
  properties: {
    tabIndex: Number,
    label: String,
    componentId: {
      type: String,
      value: ''
    }
  },
  data: {
    activeKey: 1,
    test: 0
  },
  attached() {
    this.componentId = this.data.componentId;
    this.data.label && Event.emit(`tab-create-${this.componentId}`, {
      key: this.data.tabIndex,
      label: this.data.label
    });
    Event.on(`to-panel-switch-${this.componentId}`, activeKey => {
      this.setData({ activeKey });
    });
  },
  methods: {}
});