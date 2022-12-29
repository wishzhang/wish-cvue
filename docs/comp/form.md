# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 基础用法
Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

`Form` 组件提供了表单验证的功能，只需为表单或表单的 columns 配置 `rules` 属性传入约定的验证规则。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

<ContainerDemo>
<form-basic/>
</ContainerDemo>

:::details
@[code](@examples/form/basic.vue)
:::

## 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域。

<ContainerDemo>
<form-inline/>
</ContainerDemo>

:::details
@[code](@examples/form/inline.vue)
:::



## 对齐方式

根据你们的设计情况，来选择最佳的标签对齐方式。

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`， 当设为 `top` 时标签会置于表单域的顶部

<ContainerDemo>
<form-label-position/>
</ContainerDemo>

:::details
@[code](@examples/form/label-position.vue)
:::


## 属性

| 属性名                    | 说明                                                         | 类型                            | 默认值  |
| ------------------------- | :----------------------------------------------------------- | ------------------------------- | ------- |
| model                     | 表单数据对象                                                 | Record<string, any&gt;          | -       |
| rules                     | 表单验证规则                                                 | FormRules                       | -       |
| inline                    | 行内表单模式                                                 | boolean                         | false   |
| label-position            | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | 'left' \| 'right' \| 'top'      | 'right' |
| label-width               | 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。 | string \| number                | -       |
| label-suffix              | 表单域标签的后缀                                             | string                          | -       |
| hide-required-asterisk    | 是否隐藏必填字段标签旁边的红色星号。                         | boolean                         | false   |
| require-asterisk-position | 星号的位置。                                                 | 'left' \| 'right'               | 'left'  |
| show-message              | 是否显示校验错误信息                                         | boolean                         | true    |
| inline-message            | 是否以行内形式展示校验信息                                   | boolean                         | false   |
| status-icon               | 是否在输入框中显示校验结果反馈图标                           | boolean                         | false   |
| validate-on-rule-change   | 是否在 rules 属性改变后立即触发一次验证                      | boolean                         | true    |
| size                      | 用于控制该表单内组件的尺寸                                   | 'large' \| 'default' \| 'small' | -       |
| disabled                  | 是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性 | boolean                         | false   |
| scroll-to-error           | 当校验失败时，滚动到第一个错误表单项                         | boolean                         | false   |

## 事件

| 插槽名   | 说明                   | slotProps                                                    |
| -------- | ---------------------- | ------------------------------------------------------------ |
| validate | 任一表单项被校验后触发 | (prop: FormItemProp, isValid: boolean, message: string) => void |

