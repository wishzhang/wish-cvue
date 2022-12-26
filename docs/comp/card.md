# Card 卡片

将信息聚合在卡片容器中展示。

:::tip
该组件除了本文档的示例外，其它的 props 和 emits 的 API 及用法和
[Element Plus 的 Card 组件](https://element-plus.org/zh-CN/component/card.html) 保持一致。
:::

## 示例

卡片包含标题，内容以及操作区域。
Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。
<ContainerDemo>
<CardDemo/>
</ContainerDemo>

:::details
@[code](@examples/CardDemo.vue)
:::

## 属性

| 属性名        | 说明                                                      | **类型** | **默认值** | **可选值**                |
|------------|:--------------------------------------------------------|--------|---------|------------------------|
| header     | 卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 | string | -       | -                      |
| body-style | body 的样式                                                | object | -       | { padding: '20px' }    |
| shadow     | 设置阴影显示时机                                                | string | always  | always / hover / never |

## 插槽

| 插槽名  | 说明           | slotProps |
| ------- | -------------- | --------- |
| default | 自定义默认内容 | -         |
| header  | 卡片标题内容   | -         |

