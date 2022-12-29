<template>
  <cvue-table
    stripe
    :operation="{ width: 200 }"
    :columns="columns"
    :data="data"
    @on-load="onLoad"
  ></cvue-table>
</template>

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
</script>