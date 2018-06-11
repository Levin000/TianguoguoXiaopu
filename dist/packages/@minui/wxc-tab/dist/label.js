import Event from './Event.js';
export default Component({
  behaviors: [],
  properties: {
    tabIndex: Number,
    componentId: {
      type: String,
      value: ''
    }
  },
  data: {
    activeKey: 0,
    width: 0
  },
  attached() {
    const componentId = this.data.componentId;
    Event.emit(`tab-create-${componentId}`, {
      key: this.data.tabIndex
    });

    Event.on(`to-label-switch-${componentId}`, activeKey => {
      this.setData({ activeKey });
    });

    Event.on(`label-width-${componentId}`, width => {
      this.setData({ width });
    });
  },
  moved() {
    Event.removeListener();
  },
  methods: {
    onSwitch() {
      Event.emit(`from-label-switch-${this.data.componentId}`, this.data.tabIndex);
    }
  }
});