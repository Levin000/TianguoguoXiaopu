# wxc-dialog

> MinUI 小程序组件 - 对话框

## Install

``` bash
$ min install @minui/wxc-dialog
```

## API

### Dialog【props】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`title`           | 【说明】标题文案<br>【类型】`String`<br>【默认值】`""`   |
|`title-color`      | 【说明】标题颜色<br>【类型】`String`<br>【默认值】`#000000`    |
|`content`         | 【说明】内容 <br>【类型】`String`<br>【默认值】`""`       |
|`content-color`    | 【说明】内容颜色<br>【类型】`String`<br>【默认值】`#888888`      |
|`confirm-text`     | 【说明】确认按钮文案 <br>【类型】`String`<br>【默认值】`""`               |
|`confirm-color`    | 【说明】确认按钮文案颜色<br>【类型】`String`<br>【默认值】`#ff5777`  |
|`cancel-text`      | 【说明】取消按钮文案   <br>【类型】`String`<br>【默认值】`""`           |
|`cancel-color`     | 【说明】取消按钮文案颜色<br>【类型】`String`<br>【默认值】`#666666`  |
|`image`           | 【说明】显示的图片链接     <br>【类型】`String`<br>【默认值】`""`              |

## Link
||地址|
|--|---|
||dialog 组件文档 <br> [https://meili.github.io/min/docs/minui/index.html#dialog](https://meili.github.io/min/docs/minui/index.html#dialog)<br>|
||dialog 组件源码 <br> [https://github.com/meili/minui/tree/master/packages/wxc-dialog](https://github.com/meili/minui/tree/master/packages/wxc-dialog)<br>|
||MinUI 组件库 <br> [https://github.com/meili/minui](https://github.com/meili/minui) <br>|

## Preview
![dialog](https://s10.mogucdn.com/mlcdn/c45406/171107_1a6e68g65akjebkb73gab3bi37jj8_480x480.jpg_225x999.jpg)

### Dialog【methods】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`show`         | 【说明】显示弹窗<br>【params】void<br>【return】void        |
|`hide`			| 【说明】隐藏弹窗<br>【params】void<br>【return】void		|


##  ChangeLog

#### v1.0.3（2018.01.04）

- 修复点击蒙层即关闭 dialog 的问题

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本
