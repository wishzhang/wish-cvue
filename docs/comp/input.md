# Input 输入框

通过鼠标或键盘输入字符。

## 示例
<ContainerDemo>
<InputDemo/>
</ContainerDemo>

@[code](@examples/InputDemo.vue)

## 属性



| 属性名                | 说明                                                         | **类型**                                                     | 默认值  | 可选值 |
| --------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ | ------- | ------ |
| type                  | 类型                                                         | string [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types) | text    | -      |
| model-value / v-model | 绑定值                                                       | string / number                                              | -       | -      |
| maxlength             | 最大输入长度                                                 | string / number                                              | -       | -      |
| minlength             | 原生属性，最小输入长度                                       | number                                                       | -       | -      |
| show-word-limit       | 是否显示统计字数, 只在 type 为 text 或 textarea 的时候生效   | boolean                                                      | boolean | -      |
| placeholder           | 输入框占位文本                                               | string                                                       | -       | -      |
| clearable             | 是否显示清除按钮，只有当 type 不是 textarea时生效            | boolean                                                      | false   | -      |
| formatter             | 指定输入值的格式。(只有当 type 是"text"时才能工作)           | Function                                                     | -       | -      |
| parser                | 指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用) | Function                                                     | -       | -      |
| show-password         | 是否显示切换密码图标                                         | boolean                                                      | false   | -      |
| disabled              | 是否禁用                                                     | boolean                                                      | false   | -      |
| size                  | 输入框尺寸，只在 type 不为 'textarea' 时有效                 | enum                                                         | -       | -      |
| prefix-icon           | 自定义前缀图标                                               | string / Component                                           | -       | -      |
| suffix-icon           | 自定义后缀图标                                               | string / Component                                           | -       | -      |
| rows                  | 输入框行数，仅 type 为 'textarea' 时有效                     | number                                                       | number  | -      |
| autosize              | textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 } | boolean / object                                             | false   | -      |
| autocomplete          | 原生 autocomplete 属性                                       | string                                                       | off     | -      |
| name                  | 等价于原生 input 的name 属性                                 | string                                                       | -       | -      |
| readonly              | 原生 readonly 属性，是否只读                                 | boolean                                                      | false   | -      |
| max                   | 原生 max 属性，设置最大值                                    | -                                                            | -       | -      |
| min                   | 原生属性，设置最小值                                         | -                                                            | -       | -      |
| step                  | 原生属性，设置输入字段的合法数字间隔                         | -                                                            | -       | -      |
| resize                | 控制是否能被用户缩放                                         | enum                                                         | -       | -      |
| autofocus             | 原生属性，自动获取焦点                                       | boolean                                                      | false   | -      |
| form                  | 原生属性                                                     | string                                                       | -       | -      |
| labela11y             | 等价于原生 input  的  aria-label 属性                        | string                                                       | -       | -      |
| tabindex              | 输入框的 tabindex                                            | string / number                                              | -       | -      |
| validate-event        | 输入时是否触发表单的校验                                     | boolean                                                      | true    | -      |
| input-style           | input 元素或 textarea 元素的 style                           | string / object                                              | {}      | -      |



## 事件

| **事件名** | **说明**                                                    | **类型**                        |
| ---------- | ----------------------------------------------------------- | ------------------------------- |
| blur       | 当选择器的输入框失去焦点时触发                              | (event: FocusEvent) => void     |
| focus      | 当选择器的输入框获得焦点时触发                              | (event: FocusEvent) => void     |
| change     | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | (value: string \| number)=>void |
| input      | 在 Input 值改变时触发                                       | (value: string \| number)=>void |
| clear      | 在点击由 clearable 属性生成的清空按钮时触发                 | () => void                      |



## 插槽

| 插槽名  | 说明                                        | slotProps |
| ------- | ------------------------------------------- | --------- |
| prefix  | 输入框头部内容，只对非 type="textarea" 有效 | -         |
| suffix  | 输入框尾部内容，只对非 type="textarea" 有效 | -         |
| prepend | 输入框前置内容，只对非 type="textarea" 有效 | -         |
| append  | 输入框后置内容，只对非 type="textarea" 有效 | -         |

