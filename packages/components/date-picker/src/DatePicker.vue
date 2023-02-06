<script setup lang="ts">
  import { ref } from 'vue'

  interface CvueDatePickerProps {
    placeholder?: string
  }

  defineOptions({
    name: 'CvueDatePicker',
  })

  const { placeholder = '请选择' } = defineProps<CvueDatePickerProps>()

  // expose
  const datePicker = ref()

  const focus = () => {
    datePicker.value.focus
  }

  const handleOpen = () => {
    datePicker.value.handleOpen
  }

  const handleClose = () => {
    datePicker.value.handleClose
  }

  defineExpose({
    focus,
    handleOpen,
    handleClose,
  })
</script>

<template>
  <el-date-picker ref="datePicker" v-bind="$attrs" :placeholder="placeholder">
    <slot></slot>
    <template #range-separator>
      <slot name="range-separator"></slot>
    </template>
  </el-date-picker>
</template>
