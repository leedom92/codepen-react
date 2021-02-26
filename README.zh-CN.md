# &lt;CodePen /&gt;

> 嵌入[codepen](http://codepen.io)的React组件

简体中文 | [English](./README.md)

## 安装

- `npm install --save react-codepen-box`
- `npm install --save prop-types`

## 使用

```js
import React from 'react'
import CodePen from 'react-codepen-box'

export default class CodeBox extends React.Component {
  render() {
    return (
      <CodePen
        user="leedom92"
        hash="gOLvgRe"
      />
    )
  }
}
```

## 属性

属性      |  类型    | 类别    | 可选值                   | 默认值     | 说明
---------|----------|--------|-------------------------|-----------|------------
type     | `string` | `可选` | `iframe, embed`          | `iframe`  | [codepen](http://codepen.io)的类型
user     | `string` | `必须` |                          | `null`    | codepen的用户名
hash     | `string` | `必须` |                          | `null`    | codepen的hash值
width    | `string` | `可选` | `'', %`                  | `100%`    | 宽度
height   | `string` | `可选` | `'', %`                  | `400`     | 高度
title    | `string` | `可选` |                          | `''`      | codepen的名称
theme    | `string` | `可选` |  `light, dark`           | `light`   | 主题
editable | `bool`   | `可选` | `true, false`            | `true`    | 是否可编辑
tab      | `string` | `可选` | `html, css, js, result`  | `result`  | 默认显示面板

## License
Copyright (c) 2021 [Leedom](https://github.com/leedom92)  
Licensed under the MIT license.
