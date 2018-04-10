# wxc-mask

> MinUI 小程序组件 - 遮罩层

## Install

``` bash
$ min install @minui/wxc-mask
```

## API

### Mask【props】
| 名称                  | 描述                         |
|----------------------|------------------------------|
|`status`              | [说明]：控制遮罩层显示隐藏。<br>[类型]：`String`<br>[默认值]：`"hide"` <br>[可选值]：`"hide"`，遮罩层隐藏；`"show"`，遮罩层显示。<br>|
|`opacity`             | [说明]：设置遮罩层的不透明级别。<br>[类型]：`[String,Number]`<br>[默认值]：`"0.6"` <br>   |
|`background-color`    | [说明]：设置遮罩层的颜色。<br>[类型]：`String`<br>[默认值]：`"#000000"` <br>     |
|`locked`              | [说明]：遮罩层是否设置锁定态。<br>[类型]：`[String]`<br>[默认值]：`"hide"` <br>[可选值]：<br>`"true"`，点击遮罩层背景部分不会关闭遮罩（点击子节点部分关闭遮罩）。<br>`"hide"`，点击遮罩层背景部分关闭遮罩（点击子节点部分不会关闭遮罩）。<br>      |
|`content-align`       | [说明]：设置遮罩层 content 定位位置。<br>[类型]：`String`<br>[默认值]：`"tl"` <br>[可选值]：`"tl"`:页面左上角；`"tr"`:页面右上角；`"cc"`:页面中心；`"bl"`:页面左下角；`"br"`:页面右下角。 <br>  |
|`bind:masktap`        | [说明]：`locked` 为 `"true"` 时，遮罩层点击事件的回掉函数|

### Mask【methods】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`show`                | [说明]：显示遮罩层。<br>[类型]：`Function`<br>[参数]：`void`<br>[返回]：`void`|
|`hide`                | [说明]：隐藏遮罩层。<br>[类型]：`Function`<br>[参数]：`void`<br>[返回]：`void`|
|`toggle`              | [说明]：切换遮罩层的可见状态。<br>[类型]：`Function`<br>[参数]：`switch`: `Boolean`。可选。<br>[返回]：`void`|

## Link
||地址|
|--|---|
||mask 组件文档 <br> [https://meili.github.io/min/docs/minui/index.html#mask](https://meili.github.io/min/docs/minui/index.html#mask)<br>|
||mask 组件源码 <br> [https://github.com/meili/minui/tree/master/packages/wxc-mask](https://github.com/meili/minui/tree/master/packages/wxc-mask)<br>|
||MinUI 组件库 <br> [https://github.com/meili/minui](https://github.com/meili/minui) <br>|

## Preview
![mask](https://s10.mogucdn.com/mlcdn/c45406/171107_27jgk40354eflg8e35c7fhl4ec35f_480x480.jpg_225x999.jpg)

##  ChangeLog

#### v1.0.6（2018.01.09)
- z-index 层级规范方案修改

#### v1.0.3（2018.01.04）

- 增加show,hide,toggle方法，增加自定义事件，规范z-index层级

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本
