<script setup lang="ts">
  import {ref} from 'vue'

  export interface DatePickerProps {
    placeholder?: string
  }

  export interface DatePickerEmits {
  }

  const {placeholder = '请选择'} = defineProps<DatePickerProps>();
  const emit = defineEmits<DatePickerEmits>();

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
    handleClose
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

