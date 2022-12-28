# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 基础用法
<ContainerDemo>
<form-basic/>
</ContainerDemo>

:::details
@[code](@examples/form/basic.vue)
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

