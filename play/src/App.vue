<template>
  <cvue-table
    ref="tableRef"
    :operation="{ width: 200 }"
    :search="search"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    @row-add="handleRowAdd"
    :on-load="onLoad"
  ></cvue-table>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

  const columns = reactive([
    {
      label: '序号',
      type: 'selection',
    },
    {
      label: '姓名',
      prop: 'date',
    },
    {
      label: '性别',
      prop: 'name',
    },
    {
      label: '年龄',
      prop: 'age',
    },
  ])
  let data = $ref<any>([])

  let pagination = $ref<any>({})

  const onLoad = (val: Record<string, any>) => {
    console.log(val)
    return new Promise((resolve) => {
      setTimeout(() => {
        data = [
          {
            date: '2022-12-12',
            name: 'wishzhang',
            age: 18,
          },
        ]
        pagination.total = 20
        resolve(true)
      }, 2000)
    })
  }

  const handleRowAdd = () => {
    console.log('handleRowAdd')
  }

  const search = reactive({
    columns: [
      {
        label: '姓名',
        prop: 'prop1',
      },
      {
        label: '性别',
        prop: 'prop2',
      },
      {
        label: '年龄',
        prop: 'prop3',
      },
    ],
  })
</script>
