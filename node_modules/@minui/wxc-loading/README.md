# wxc-loading

> MinUI 小程序组件 - 加载提示

## Install

``` bash
$ min install @minui/wxc-loading
```

## API

### Loading【props】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`is-show`             | [说明]：loading的显示控制属性。<br>[类型]：`String`<br>[默认值]：`false` |
|`type`                | [说明]：样式类型。type的优先级低于 `image, slip`。<br>[类型]：`String`<br>[默认值]：`"mgj"` <br>[可选值]：<br>`mgj`（蘑菇街女装精选 `loading` 样式）， <br>`mall`（企鹅微商城 `loading` 样式）|
|`image`               | [说明]：loading主背景图， 必须与slip同时指定。<br>[类型]：`String`<br>[默认值]：`""` <br>   |
|`slip`                | [说明]：loading动画背景图，必须与image同时指定。<br>[类型]：`String`<br>[默认值]：`""` <br>     |

### Loading【methods】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`show`                | [说明]：显示loading。<br>[类型]：`Function`<br>[参数]：`void`<br>[返回]：`void`|
|`hide`                | [说明]：隐藏loading。<br>[类型]：`Function`<br>[参数]：`void`<br>[返回]：`void`|

##  ChangeLog

#### v1.0.6（2018.01.09)
- z-index 层级规范方案修改

#### v1.0.3（2018.01.04）

- 更换小店微商城图标，规范 z-index 层级

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本
