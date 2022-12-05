# DatePicker 日期选择器

用于选择或输入日期。

:::tip
该组件除了本文档的示例外，其它的 props 和 emits 的 API 及用法和
[Element Plus 的 DatePicker 组件](https://element-plus.org/zh-CN/component/date-picker.html) 保持一致。
:::

## 示例
<ContainerDemo>
<date-picker/>
</ContainerDemo>

```vue
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <cvue-date-picker v-model="value" />
</template>
```

## 属性

| 属性名                | 说明                                                         | **类型**                                         | **默认值**  | **可选值**                                                   |
| --------------------- | :----------------------------------------------------------- | ------------------------------------------------ | ----------- | ------------------------------------------------------------ |
| model-value / v-model | 绑定值，如果它是数组，长度应该是 2                           | Date / number / string / Array                   | -           | -                                                            |
| readonly              | 只读                                                         | boolean                                          | false       | -                                                            |
| disabled              | 禁用                                                         | boolean                                          | false       | -                                                            |
| size                  | 输入框尺寸                                                   | string                                           | default     | large/default/small                                          |
| editable              | 文本框可输入                                                 | boolean                                          | true        | -                                                            |
| clearable             | 是否显示清除按钮                                             | boolean                                          | true        | -                                                            |
| placeholder           | 非范围选择时的占位内容                                       | string                                           | -           | -                                                            |
| start-placeholder     | 范围选择时开始日期的占位内容                                 | string                                           | -           | -                                                            |
| end-placeholder       | 范围选择时结束日期的占位内容                                 | string                                           | -           | -                                                            |
| type                  | 显示类型                                                     | string                                           | date        | year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange |
| format                | 显示在输入框中的格式                                         | string                                           | YYYY-MM-DD  | 请查看 [date formats](https://element-plus.org/en-US/component/date-picker.html#date-formats) |
| popper-class          | DatePicker 下拉框的类名                                      | string                                           | -           | -                                                            |
| range-separator       | 选择范围时的分隔符                                           | string                                           | -           | '-'                                                          |
| default-value         | 可选，选择器打开时默认显示的时间                             | Date / [Date, Date]                              | -           | -                                                            |
| default-time          | 范围选择时选中日期所使用的当日内具体时刻                     | Date / [Date, Date]                              | -           | -                                                            |
| value-format          | 可选，绑定值的格式。 不指定则绑定值为 Date 对象              | string                                           | -           | 请查阅 [date formats](https://element-plus.org/en-US/component/date-picker.html#date-formats) |
| id                    | 等价于原生 id 属性                                           | string / [string, string]                        | -           | -                                                            |
| name                  | 等价于原生 name   属性                                       | string                                           | -           | -                                                            |
| unlink-panels         | 在范围选择器里取消两个日期面板之间的联动                     | boolean                                          | false       | -                                                            |
| prefix-icon           | 自定义前缀图标                                               | string / Component                               | Date        | -                                                            |
| clear-icon            | 自定义清除图标                                               | string / Component                               | CircleClose | -                                                            |
| validate-event        | 输入时是否触发表单的校验                                     | boolean                                          | true        | -                                                            |
| disabled-date         | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。 | function                                         | -           | -                                                            |
| shortcuts             | 设置快捷选项，需要传入数组对象                               | Array<{ text: string, value: Date \| Function }> | -           | -                                                            |
| cell-class-name       | 设置自定义类名                                               | Function(Date)                                   | -           | -                                                            |
| teleported            | 是否将 date-picker 的下拉列表插入至 body 元素                | boolean                                          | true        | true / false                                                 |

## 事件

| **事件名**      | **说明**                                                     | **回调参数**          |
| --------------- | ------------------------------------------------------------ | --------------------- |
| change          | 用户确认选定的值时触发                                       | (val: typeof v-model) |
| blur            | 在组件 Input 失去焦点时触发                                  | (e: FocusEvent)       |
| focus           | 在组件 Input 获得焦点时触发                                  | (e: FocusEvent)       |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。 你可以使用 default-value 来设置成其他的日期。 | (val: [Date, Date])   |
| panel-change    | 当日期面板改变时触发。                                       | (date, mode, view)    |
| visible-change  | 当 DatePicker 的下拉列表出现/消失时触发                      | (visibility: boolean) |

## 插槽

| **插槽名**      | **说明**             |
| --------------- | -------------------- |
| default         | 自定义内容           |
| range-separator | 自定义范围分割符内容 |

