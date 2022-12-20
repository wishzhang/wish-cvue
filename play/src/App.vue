<template>
  <div>
    <el-button @click="handleClick">click</el-button>
    <cvue-input ref="inputRef" v-model="value" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value = ref('d')
  const inputRef = ref<any>(null)

  function handleClick() {
    inputRef.value.clear()
  }

  defineExpose()
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #eee;
  }
</style>
