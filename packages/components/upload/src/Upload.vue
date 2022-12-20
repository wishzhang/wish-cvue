<script setup lang="ts">
  import { ref } from 'vue'

  const input = ref()
  const abort = (file: any) => {
    input?.value?.abort(file)
  }
  const submit = () => {
    input?.value?.submit()
  }
  const clearFiles = (status?: any) => {
    input?.value?.clearFiles(status)
  }
  const handleStart = (rawFile: any) => {
    input?.value?.handleStart(rawFile)
  }
  const handleRemove = (file: any, rawFile: any) => {
    input?.value?.handleRemove(file, rawFile)
  }

  defineExpose({
    abort: abort,
    submit: submit,
    clearFiles: clearFiles,
    handleStart: handleStart,
    handleRemove: handleRemove,
  })
</script>

<template>
  <el-upload>
    <template #default>
      <slot></slot>
    </template>
    <template #tip="scope">
      <slot name="tip" v-bind="scope"></slot>
    </template>
    <template #file="scope">
      <slot name="file" v-bind="scope"></slot>
    </template>
    <!-- the trigger slot has issue -->
    <template v-if="$slots.trigger" #trigger="scope">
      <slot name="trigger" v-bind="scope"></slot>
    </template>
  </el-upload>
</template>
