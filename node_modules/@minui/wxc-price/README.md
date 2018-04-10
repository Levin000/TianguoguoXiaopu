# wxc-price

> MinUI 小程序组件 - 价格

## Install

``` bash
$ min install @minui/wxc-price
```

## API

### Price【props】

| 属性 | 描述 |
| --- | --- |
| value | [可选] 价格数值，优先级高于标签内嵌套值 |
| symbol | [可选] 货币符号。默认为 `￥` |
| status | [可选] 显示状态，若设置为 del 显示为删除态 |
| icon | [可选] 人民币符号显示规则 <br/><br/> - 如不设置，人民币符号的字号同价格数字一致 <br/> - 设为 sup，人民币符号字号缩小，位于价格左上方 <br/> - 设为 sub，人民币符号字号缩小，位于价格左下方 |
| decimal | [可选] 小数部分显示规则 <br/><br/> - 如不设置，显示 2 位小数，字号同整数部分一致 <br/> - 设置为 1，显示 1 位小数，小数部分向下取整 <br/> - 设为 none，不显示小数部分，只显示整数价格 <br/> - 设为 small，小数部分字号缩小|
| del-color | [可选] del 状态下文字颜色，只在del状态下有效，正常状态下文字颜色可继承父元素 <br/><br/> - 默认 #999|

## Link
||地址|
|--|---|
||price 组件文档 <br> [https://meili.github.io/min/docs/minui/index.html#price](https://meili.github.io/min/docs/minui/index.html#price)<br>|
||price 组件源码 <br> [https://github.com/meili/minui/tree/master/packages/wxc-price](https://github.com/meili/minui/tree/master/packages/wxc-price)<br>|
||MinUI 组件库 <br> [https://github.com/meili/minui](https://github.com/meili/minui) <br>|

## Preview
![price](https://s10.mogucdn.com/mlcdn/c45406/171107_2ihj6754hg63gahdhljb2c1hcdeg9_480x480.jpg_225x999.jpg)

##  ChangeLog

#### v1.0.6（2018.01.09)
- 增加货币符号属性
- del 状态下可自定义文字颜色

#### v1.0.3（2018.01.04）

- 修复保留两位小数，一位小数等问题

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本
