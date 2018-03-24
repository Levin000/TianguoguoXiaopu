# wxc-tab

> MinUI 小程序组件 - 选项卡

## Install

``` bash
$ min install @minui/wxc-tab
```

## API

### Tab【props】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`default-index`             | [说明]：当前激活面板的 index。<br>[类型]：`Number`<br>[默认值]：`0`
|`animate`                   | [说明]：是否开启动画。<br>[类型]：`Boolean`<br>[默认值]：`false`
|`component-id`              | [说明]：同时调用两个tab时，需要指定component-id。<br>[类型]：`String`<br>
|`bindtabchange`             | [说明]：tab切换的回调函数
|`text-color`                | [说明]：文字颜色。<br>[类型]：`String`<br>[默认值]：`#000`
|`active-text-color`         | [说明]：选中文字颜色。<br>[类型]：`String`<br>[默认值]：`#ff5777`
|`line-color`                | [说明]：线条颜色。<br>[类型]：`String`<br>[默认值]：`#ddd`
|`active-line-color`         | [说明]：选中线条颜色。<br>[类型]：`String`<br>[默认值]：`#ff5777`

### Tab-Panel【props】

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`tab-index`           | [说明]：激活当前面板的 index。<br>[类型]：`Number`<br>[默认值]：`0`
|`label`               | [说明]：选项卡头部显示的文字。<br>[类型]：`String`<br>
|`component-id`        | [说明]：同时调用两个tab时，需要指定component-id。<br>[类型]：`String`<br>

### Tab-Label【props】

自定义头部时，需要在外层加slot="tablabel"

| 名称                  | 描述                         |
|----------------------|------------------------------|
|`tab-index`           | [说明]：激活当前面板的 index。<br>[类型]：`Number`<br>[默认值]：`0`
|`component-id`        | [说明]：同时调用两个tab时，需要指定component-id。<br>[类型]：`String`<br>

##  ChangeLog

#### v1.0.3（2018.01.04）

- 修复点击tab时的定位问题

#### v1.0.2（2017.11.02）

- update .npmignore

#### v1.0.1（2017.10.24）

- 初始版本

