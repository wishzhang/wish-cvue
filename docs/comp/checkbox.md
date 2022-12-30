# Checkbox 多选框

在一组备选项中进行多选。

## 示例
<ContainerDemo>
<checkbox/>
</ContainerDemo>

```vue
<script lang="ts" setup>
import { reactive, ref } from "vue";

const value = ref([]);
const dic = reactive([
  { label: "选项1", value: 1 },
  { label: "选项2", value: 2 },
  { label: "选项3", value: 3 },
]);
</script>

<template>
  <cvue-checkbox v-model="value" :dic="dic"></cvue-checkbox>
</template>
```

## Checkbox 属性

| 属性名                | 说明                               | **类型** | **默认值** | **可选值**              |
| --------------------- | :--------------------------------- | -------- | ---------- | ----------------------- |
| model-value / v-model | 绑定值                             | array    | []         | -                       |
| size                  | 多选框组尺寸                       | string   | default    | large / default / small |
| disabled              | 是否禁用                           | boolean  | false      | -                       |
| min                   | 可被勾选的 checkbox 的最小数量     | number   | -          | -                       |
| max                   | 可被勾选的 checkbox 的最大数量     | number   | -          | -                       |
| label                 | 为屏幕阅读器准备的标签             | string   | -          | -                       |
| text-color            | 当按钮为活跃状态时的字体颜色       | string   | \#ffffff   | -                       |
| fill                  | 当按钮为活跃状态时的边框和背景颜色 | string   | \#409EFF   | -                       |
| validate-event        | 输入时是否触发表单的校验           | boolean  | true       | -                       |

## Checkbox 事件

| **事件名** | **说明**                 | **回调参数** |
| ---------- | ------------------------ | ------------ |
| change     | 当绑定值变化时触发的事件 | value        |
