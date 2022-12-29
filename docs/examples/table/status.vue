<template>
  <cvue-table
    :operation="{ width: 200 }"
    :columns="columns"
    :data="data"
    :row-class-name="tableRowClassName"
    @row-add="handleRowAdd"
    @on-load="onLoad"
  ></cvue-table>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

  const tableRowClassName = ({ row, rowIndex }: { row: any; rowIndex: number }) => {
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }

  const columns = reactive([
    {
      label: '标题1',
      prop: 'date',
    },
    {
      label: '标题2',
      prop: 'name',
    },
    {
      label: '标题3',
      prop: 'address',
    },
  ])
  const data = reactive([
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州',
    },
  ])

  const onLoad = (val: Record<string, any>) => {
    console.log(val)
  }

  const handleRowAdd = () => {
    console.log('handleRowAdd')
  }
</script>

<style>
  .el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }

  .el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
</style>