<script setup lang="ts">
  import {ref} from 'vue'

  export interface TimePickerProps {
    placeholder?: string
  }

  export interface TimePickerEmits {
  }

  const {placeholder = '请选择'} = defineProps<TimePickerProps>();
  const emit = defineEmits<TimePickerEmits>();

  // expose
  const timePicker = ref()

  const focus = () => {
    timePicker.value.focus
  }

  const blur = () => {
    timePicker.value.blur
  }

  const handleOpen = () => {
    timePicker.value.handleOpen
  }

  const handleClose = () => {
    timePicker.value.handleClose
  }

  defineExpose({
    focus,
    blur,
    handleOpen,
    handleClose
  })
</script>

<template>
  <el-time-picker ref="timePicker" v-bind="$attrs" :placeholder="placeholder"></el-time-picker>
</template>

