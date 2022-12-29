# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法
<ContainerDemo>
<table-basic/>
</ContainerDemo>

:::details
@[code](@examples/table/basic.vue)
:::

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。




## 属性

| 属性名                  | 说明                                                         | 类型                                                      | 可选值                            | 默认值                                                       |
| ----------------------- | :----------------------------------------------------------- | --------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| data                    | 显示的数据                                                   | array                                                     | —                                 | —                                                            |
| height                  | Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string / number                                           | —                                 | —                                                            |
| max-height              | Table 的最大高度。 合法的值为数字或者单位为 px 的高度。      | string / number                                           | —                                 | —                                                            |
| stripe                  | 是否为斑马纹 table                                           | boolean                                                   | —                                 | false                                                        |
| border                  | 是否带有纵向边框                                             | boolean                                                   | —                                 | false                                                        |
| size                    | Table 的尺寸                                                 | string                                                    | large / default /small            | —                                                            |
| fit                     | 列的宽度是否自撑开                                           | boolean                                                   | —                                 | true                                                         |
| show-header             | 是否显示表头                                                 | boolean                                                   | —                                 | true                                                         |
| highlight-current-row   | 是否要高亮当前行                                             | boolean                                                   | —                                 | false                                                        |
| current-row-key         | 当前行的 key，只写属性                                       | string / number                                           | —                                 | —                                                            |
| row-class-name          | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | function({ row, rowIndex }) / string                      | —                                 | —                                                            |
| row-style               | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | function({ row, rowIndex }) / object                      | —                                 | —                                                            |
| cell-class-name         | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | function({ row, column, rowIndex, columnIndex }) / string | —                                 | —                                                            |
| cell-style              | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | function({ row, column, rowIndex, columnIndex }) / object | —                                 | —                                                            |
| header-row-class-name   | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | function({ row, rowIndex }) / string                      | —                                 | —                                                            |
| header-row-style        | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | function({ row, rowIndex }) / object                      | —                                 | —                                                            |
| header-cell-class-name  | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | function({ row, column, rowIndex, columnIndex }) / string | —                                 | —                                                            |
| header-cell-style       | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | function({ row, column, rowIndex, columnIndex }) / object | —                                 | —                                                            |
| row-key                 | 行数据的 Key，用来优化 Table 的渲染； 在使用`reserve-selection`功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | function(row) / string                                    | —                                 | —                                                            |
| empty-text              | 空数据时显示的文本内容， 也可以通过 `#empty` 设置            | string                                                    | —                                 | No Data                                                      |
| default-expand-all      | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | boolean                                                   | —                                 | false                                                        |
| expand-row-keys         | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 | array                                                     | —                                 | —                                                            |
| default-sort            | 默认的排序列的 prop 和顺序。 它的 `prop` 属性指定默认的排序的列，`order` 指定默认排序的顺序 | object                                                    | (order: 'ascending' 'descending') | 如果 `prop` 已配置, 同时 `order` 未配置, 那么 `order` 默认为升序 |
| tooltip-effect          | tooltip `effect` 属性                                        | string                                                    | dark / light                      | dark                                                         |
| show-summary            | 是否在表尾显示合计行                                         | boolean                                                   | —                                 | false                                                        |
| sum-text                | 合计行第一列的文本                                           | string                                                    | —                                 | 合计                                                         |
| summary-method          | 自定义的合计计算方法                                         | function({ columns, data })                               | —                                 | —                                                            |
| span-method             | 合并行或列的计算方法                                         | function({ row, column, rowIndex, columnIndex })          | —                                 | —                                                            |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行 | boolean                                                   | —                                 | true                                                         |
| indent                  | 展示树形数据时，树节点的缩进                                 | number                                                    | —                                 | 16                                                           |
| lazy                    | 是否懒加载子节点数据                                         | boolean                                                   | —                                 | —                                                            |
| load                    | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | function(row, treeNode, resolve)                          | —                                 | —                                                            |
| tree-props              | 渲染嵌套数据的配置选项                                       | object                                                    | —                                 | `{ hasChildren: 'hasChildren', children: 'children' }`       |
| table-layout            | 设置表格单元、行和列的布局方式                               | string                                                    | fixed / auto                      | fixed                                                        |
| scrollbar-always-on     | 总是显示滚动条                                               | boolean                                                   | —                                 | false                                                        |
| flexible2.2.1           | 确保主轴的最小尺寸                                           | boolean                                                   | —                                 | false                                                        |



## 事件

| 事件名             | 说明                                                         | 参数                              |
| :----------------- | :----------------------------------------------------------- | :-------------------------------- |
| select             | 当用户手动勾选数据行的 Checkbox 时触发的事件                 | selection, row                    |
| select-all         | 当用户手动勾选全选 Checkbox 时触发的事件                     | selection                         |
| selection-change   | 当选择项发生变化时会触发该事件                               | selection                         |
| cell-mouse-enter   | 当单元格 hover 进入时会触发该事件                            | row, column, cell, event          |
| cell-mouse-leave   | 当单元格 hover 退出时会触发该事件                            | row, column, cell, event          |
| cell-click         | 当某个单元格被点击时会触发该事件                             | row, column, cell, event          |
| cell-dblclick      | 当某个单元格被双击击时会触发该事件                           | row, column, cell, event          |
| cell-contextmenu   | 当某个单元格被鼠标右键点击时会触发该事件                     | row, column, cell, event          |
| row-click          | 当某一行被点击时会触发该事件                                 | row, column, event                |
| row-contextmenu    | 当某一行被鼠标右键点击时会触发该事件                         | row, column, event                |
| row-dblclick       | 当某一行被双击时会触发该事件                                 | row, column, event                |
| header-click       | 当某一列的表头被点击时会触发该事件                           | column, event                     |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件                     | column, event                     |
| sort-change        | 当表格的排序条件发生变化的时候会触发该事件                   | `{ column, prop, order }`         |
| filter-change      | column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 | filters                           |
| current-change     | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow         |
| header-dragend     | 当拖动表头改变了列的宽度的时候会触发该事件                   | newWidth, oldWidth, column, event |
| expand-change      | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded    |