# wxc-abnor

> MinUI 小程序组件 - 异常流提示

## Install

``` bash
$ min install @minui/wxc-abnor
```

## API

### Abnor【props】

| 名称             | 描述                                       |
| -------------- | ---------------------------------------- |
| `type`         | [说明]：异常状态类型，其优先级低于其他属性。<br>[类型]：`String`<br>默认值：`""` <br>[可选值]：`REQUEST_ERROR, NOT_FOUND, DATA, FOLLOW, FEED,SHOP, WEIBO, SEARCH, TAG, MESSAGE, LIVE, ORDER, CART, FOOTPRINT, COUPON` |
| `image`        | [说明]：背景图。若与 `type` 同时指定，将覆盖 `type` 对应的 `image` 。<br>[类型]：`String`<br>[默认值]：`""` <br> |
| `title`        | [说明]：标题。若与 `type` 同时指定，将覆盖 `type` 对应的 `title` 。<br>[类型]：`String`<br>[默认值]：`""` <br> |
| `tip`          | [说明]：副标题。若与 `type` 同时指定，将覆盖 `type` 对应的 `tip` 。<br>[类型]：`String`<br>[默认值]：`""` <br> |
| `button`       | [说明]：按钮文案。若与 `type` 同时指定，将覆盖 `type` 对应的 `button` 。<br>[类型]：`String`<br>[默认值]：`""` <br> |
| `bindabnortap` | [说明]：按钮事件。若配置了 `button` 属性，则需要指定事件。其中 `REQUEST_ERROR, NOT_FOUND` 两种 `type` 中均设置了默认的按钮文案 |

## Link
||地址|
|--|---|
||abnor 组件文档 <br> [https://meili.github.io/min/docs/minui/index.html#abnor](https://meili.github.io/min/docs/minui/index.html#abnor)<br>|
||abnor 组件源码 <br> [https://github.com/meili/minui/tree/master/packages/wxc-abnor](https://github.com/meili/minui/tree/master/packages/wxc-abnor)<br>|
||MinUI 组件库 <br> [https://github.com/meili/minui](https://github.com/meili/minui) <br>|

## Preview
![abnor](https://s10.mogucdn.com/mlcdn/c45406/171107_3ddh6idjk6f6i6h67j013594k8910_480x480.jpg_225x999.jpg)

##  ChangeLog

#### v1.0.3（2018.01.04）

- 补全配置，避免报错

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本
