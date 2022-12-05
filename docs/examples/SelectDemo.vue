<script lang="ts" setup>
  import { ref } from 'vue'

  const selectValue = ref('')
  const selectDic = ref([
    {
      value: 1,
      label: '选项1',
    },
    {
      value: 2,
      label: '选项2',
    },
    {
      value: 3,
      label: '选项3',
    },
  ])
</script>

<template>
  <cvue-select v-model="selectValue" :dic="selectDic"></cvue-select>
</template>
