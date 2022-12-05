<script lang="ts" setup>
  import { reactive } from 'vue'

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

  const search = reactive({
    columns: [
      {
        label: '什么鬼的a',
        prop: 'prop1',
      },
      {
        label: 'label2',
        prop: 'prop2',
      },
      {
        label: 'label3',
        prop: 'prop3',
      },
      {
        label: 'label4',
        prop: 'prop4',
      },
      {
        label: 'label5',
        prop: 'prop5',
      },
    ],
  })
</script>

<template>
  <cvue-table
    size="large"
    :operation="{ width: 200 }"
    :search="search"
    :columns="columns"
    :data="data"
    @row-add="handleRowAdd"
    @on-load="onLoad"
  ></cvue-table>
</template>
