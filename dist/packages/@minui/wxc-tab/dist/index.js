import Event from './Event.js';
export default Component({
  options: {
    multipleSlots: true // support multi slot
  },
  behaviors: [],
  properties: {
    fullScreen: {
      type: Boolean,
      value: false
    },
    defaultIndex: {
      type: Number,
      value: 0
    },
    componentId: {
      type: String,
      value: ''
    },
    animate: {
      type: Boolean,
      value: false
    },
    textColor: {
      type: String,
      value: '#000'
    },
    activeTextColor: {
      type: String,
      value: '#ff5777'
    },
    lineColor: {
      type: String,
      value: '#ddd'
    },
    activeLineColor: {
      type: String,
      value: '#ff5777'
    }
  },
  data: {
    tabs: [],
    width: 0,
    activeKey: 0,
    move: 0
  },
  attached() {
    this.componentId = this.data.componentId;
    this.tabs = [];
    Event.on(`tab-create-${this.componentId}`, tab => {
      this.type = !tab.label ? 'complex' : 'simple';
      this.tabs.push(tab);
    });
  },
  ready() {
    let activeKey = this.minAndMax(this.data.defaultIndex);
    this.onSwitch(activeKey, 'all');
    this.listenSwitch();
    // const width = this.tabs.length < 5 ? (100 / this.tabs.length) : 25;
    let len = this.tabs.length;
    const width = parseInt(750 / (len > 5 ? 5 : len));
    this.type === 'complex' && Event.emit(`label-width-${this.componentId}`, width);
    this.setData({
      tabs: this.tabs,
      width,
      type: this.type,
      move: width * activeKey
    });
  },
  detached() {
    Event.removeListener();
  },
  methods: {

    // limit input range
    minAndMax(activeKey) {
      const max = this.tabs.length - 1;
      const min = 0;
      if (activeKey > max) {
        return max;
      } else if (activeKey < min) {
        return 0;
      } else {
        return activeKey;
      }
    },

    // lisen child component tab event
    listenSwitch() {
      Event.on(`from-label-switch-${this.componentId}`, key => {
        this.onSwitch(key, 'to-panel');
      });
      Event.on(`from-panel-switch-${this.componentId}`, key => {
        this.onSwitch(key, 'to-label');
      });
    },

    onSwitch(activeKey, toNotice) {
      if (!toNotice) {
        activeKey = activeKey.currentTarget.dataset.idx;
        toNotice = 'to-panel';
      }
      const move = activeKey * this.data.width;
      this.setData({
        activeKey,
        move
      });

      // to notice panel and label tab has switched
      if (toNotice === 'all') {
        Event.emit(`to-label-switch-${this.componentId}`, activeKey);
        Event.emit(`to-panel-switch-${this.componentId}`, activeKey);
      } else {
        Event.emit(`${toNotice}-switch-${this.componentId}`, activeKey);
      }

      this.afterSwitch(activeKey);
    },

    afterSwitch(activeKey) {
      this.triggerEvent('tabchange', {
        key: activeKey,
        componentId: this.componentId
      });
    }

  }
});