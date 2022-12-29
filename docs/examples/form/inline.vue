<template>
  <cvue-form :model="form" :columns="columns" :inline="true"></cvue-form>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

  let form = reactive({})
  let columns = [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '婚姻状态',
      prop: 'maritalStatus',
      component: 'select',
      dic: [
        { label: '未婚', value: 1 },
        { label: '已婚', value: 2 },
        { label: '丧偶', value: 3 },
        { label: '离婚', value: 4 },
      ],
    },
  ]
</script>