# Radio 单选框

在一组备选项中进行单选。

## 示例
<ContainerDemo>
<RadioDemo/>
</ContainerDemo>

@[code](@examples/RadioDemo.vue)

## CVueRadio 属性

| 属性名                | 说明                                    | **类型**                  | **默认值** | **可选值**              |
| --------------------- | :-------------------------------------- | ------------------------- | ---------- | ----------------------- |
| model-value / v-model | 绑定值                                  | string / number / boolean | -          | -                       |
| size                  | 单选框组尺寸                            | string                    | default    | large / default / small |
| disabled              | 是否禁用                                | boolean                   | false      | -                       |
| text-color            | 按钮形式的 Radio 激活时的文本颜色       | string                    | #ffffff    | -                       |
| fill                  | 按钮形式的 Radio 激活时的填充色和边框色 | string                    | #409EFF    | -                       |



## CVueRadio 事件

| 事件名 | 说明                   | 参数                  |
| ------ | ---------------------- | --------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
