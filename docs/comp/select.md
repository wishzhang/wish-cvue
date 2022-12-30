# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 示例
<ContainerDemo>
<SelectDemo/>
</ContainerDemo>

@[code](@examples/SelectDemo.vue)

## 属性

| 属性名                        | 说明                                                         | 类型                                       | 默认值           | 可选值                                                       |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------ | ---------------- | ------------------------------------------------------------ |
| model-value / v-model         | 选中项绑定值                                                 | array / string / number / boolean / object | -                | -                                                            |
| multiple                      | 是否多选                                                     | boolean                                    | false            | true/false                                                   |
| disabled                      | 是否禁用                                                     | boolean                                    | false            | true / false                                                 |
| value-key                     | 作为 value 唯一标识的键名，绑定值为对象类型时必填            | string                                     | value            | -                                                            |
| size                          | 输入框尺寸                                                   | string                                     | default          | large/default/small                                          |
| clearable                     | 是否可以清空选项                                             | boolean                                    | false            | true / false                                                 |
| collapse-tags                 | 多选时是否将选中值按文字的形式展示                           | boolean                                    | false            | true/false                                                   |
| collapse-tags-tooltip         | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags 属性必须设定为 true | boolean                                    | false            | true / false                                                 |
| multiple-limit                | multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数， 为 0 则不限制 | number                                     | 0                | -                                                            |
| name                          | Select 输入框的原生 name 属性                                | string                                     | -                | -                                                            |
| effect                        | Tooltip 主题，内置了 dark / light 两种                       | string                                     | light            | string                                                       |
| autocomplete                  | Select 输入框的原生 autocomplete 属性                        | string                                     | off              | -                                                            |
| placeholder                   | 占位文字                                                     | string                                     | Select           | -                                                            |
| filterable                    | Select 组件是否可筛选                                        | boolean                                    | false            | true / false                                                 |
| allow-create                  | 是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。 | boolean                                    | false            | true/false                                                   |
| filter-method                 | 自定义筛选方法                                               | function                                   | -                | -                                                            |
| remote                        | 其中的选项是否从服务器远程加载                               | boolean                                    | false            | true / false                                                 |
| remote-method                 | 自定义远程搜索方法                                           | function                                   | -                | -                                                            |
| remote-show-suffix            | 远程搜索方法显示后缀图标                                     | boolean                                    | false            | true / false                                                 |
| loading                       | 是否正在从远程获取数据                                       | boolean                                    | false            | true / false                                                 |
| loading-text                  | 从服务器加载内容时显示的文本                                 | string                                     | Loading          | -                                                            |
| no-match-text                 | 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置        | string                                     | No matching data | -                                                            |
| no-data-text                  | 无选项时显示的文字，也可以使用 empty 插槽设置自定义内容      | string                                     | No data          | -                                                            |
| popper-class                  | 选择器下拉菜单的自定义类名                                   | string                                     | -                | -                                                            |
| reserve-keyword               | 当 multiple 和 filter 被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词 | boolean                                    | true             | true / false                                                 |
| default-first-option          | 是否在输入框按下回车时，选择第一个匹配项。 需配合 `filterable` 或 `remote` 使用 | boolean                                    | false            | true / false                                                 |
| popper-append-to-body(已废弃) | 是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false。 | boolean                                    | true             | true / false                                                 |
| teleported                    | 该下拉菜单是否使用teleport插入body元素                       | boolean                                    | true             | true / false                                                 |
| persistent                    | 当下拉选择器未被激活并且`persistent`设置为`false`，选择器会被删除。 | boolean                                    | true             | true / false                                                 |
| automatic-dropdown            | 对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单 | boolean                                    | false            | true / false                                                 |
| clear-icon                    | 自定义清除图标                                               | `string | Component`                       | CircleClose      | -                                                            |
| fit-input-width               | 下拉框的宽度是否与输入框相同                                 | boolean                                    | false            | true / false                                                 |
| suffix-icon                   | 自定义后缀图标组件                                           | `string | Component`                       | ArrowDown        | -                                                            |
| suffix-transitiondeprecated   | 下拉菜单显示/消失时后缀图标的动画                            | boolean                                    | true             | true / false                                                 |
| tag-type                      | 标签类型                                                     | string                                     | info             | success/info/warning/danger                                  |
| validate-event                | 是否触发表单验证                                             | boolean                                    | true             | true / false                                                 |
| placement                     | 下拉框出现的位置                                             | string                                     | bottom-start     | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |



## 事件

| 事件名         | 说明                                     | 参数                               |
| -------------- | ---------------------------------------- | ---------------------------------- |
| change         | 选中值发生变化时触发                     | val，目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | val，出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除tag时触发                  | val，移除的tag值                   |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | -                                  |
| blur           | 当 input 失去焦点时触发                  | (event: FocusEvent)                |
| focus          | 当 input 获得焦点时触发                  | (event: FocusEvent)                |



## 插槽

| 插槽名  | 说明                | 子标签                |
| ------- | ------------------- | --------------------- |
| default | Option 组件列表     | Option Group / Option |
| prefix  | Select 组件头部内容 | -                     |
| empty   | 无选项时的列表      | -                     |

