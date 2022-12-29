<template>
  <el-radio-group v-model="labelPosition" label="label position">
    <el-radio-button label="left">Left</el-radio-button>
    <el-radio-button label="right">Right</el-radio-button>
    <el-radio-button label="top">Top</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <cvue-form  style="max-width: 460px" :model="form" :columns="columns" :label-position="labelPosition"></cvue-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
  name: '',
  sex: 1
})

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