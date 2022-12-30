<template>
  <cvue-radio v-model="radio" :dic="radioDic" size="small"></cvue-radio>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  let radio = ref(null)
  let radioDic = [
    {
      label: '男',
      value: 1,
    },
    {
      label: '女',
      value: 2,
    },
  ]
</script>
