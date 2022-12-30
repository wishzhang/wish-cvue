<template>
  <cvue-checkbox v-model="value" :dic="dic"></cvue-checkbox>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'

  const value = ref([])
  const dic = reactive([
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 },
    { label: '选项3', value: 3 }
  ])
</script>