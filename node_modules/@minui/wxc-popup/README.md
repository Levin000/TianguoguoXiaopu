# wxc-popup

> MinUI 小程序组件 - 弹出层

## Install

``` bash
$ min install @minui/wxc-popup
```

## API

### Popup【props】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`animation-mode`           | 【说明】动画样式<br>【类型】`String`<br>【默认值】`""`<br>【可选值】`none, center, top, bottom, left, right`         |
|`align`           | 【说明】占位位置<br>【类型】`String`<br>【默认值】`""`<br>【可选值】`center, top, bottom, left, right`         |
|`status`           | 【说明】默认状态<br>【类型】`String`<br>【默认值】`""`<br>[可选值】`hide, show  `       |


### Popup【methods】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`show`         | 【说明】显示 `popup` <br>【params】void<br>【return】void        |
|`hide`			| 【说明】隐藏 `popup` <br>【params】void<br>【return】void		|
|`toggle`       | 【说明】切换 `popup` 的可见状态。<br>【params】`switch`: `Boolean`。可选。<br>【return】void|

##  ChangeLog

#### v1.0.6（2018.01.09)
- z-index 层级规范方案修改

#### v1.0.3（2018.01.04）

- 增加toggle方法，规范z-index层级

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本

