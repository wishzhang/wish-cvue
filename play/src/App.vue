<template>
  <div>
    <el-button @click="handleClick">click</el-button>
    <cvue-input v-model="value" ref="inputRef" />
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, watch } from 'vue'
  import AppForm from './components/AppForm.vue'
  import Learn from './components/Learn.vue'

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
