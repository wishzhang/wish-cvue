<template>
  <CvueForm :model="form" :columns="formColumns" @finish="handleFinish"></CvueForm>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  import { cloneDeep } from 'lodash-es'

  let form = reactive({
    sex: 1,
  })

  let formColumns = reactive([
    {
      label: '姓名',
      prop: 'name',
      component: 'input',
      rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    },
    {
      label: '住址',
      prop: 'address',
      rules: [{ required: true, message: '请输入住址', trigger: 'blur' }],
    },
    {
      label: '性别',
      prop: 'sex',
      component: 'radio',
      dic: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
    },
    {
      label: '水果',
      component: 'select',
      prop: 'fruit',
      dic: [
        { label: '苹果', value: 1 },
        { label: '香蕉', value: 2 },
        { label: '荔枝', value: 3 },
      ],
      rules: [{ required: true, message: '请选择水果', trigger: 'change' }],
    },
    {
      label: '生日',
      prop: 'birthday',
      component: 'date-picker',
      rules: [{ required: true, message: '请选择日期', trigger: 'change' }],
    },
    {
      label: '时间',
      prop: 'time',
      component: 'time-picker',
      rules: [{ required: true, message: '请选择时间', trigger: 'change' }],
    },
    {
      label: '随时到岗',
      prop: 'switch',
      component: 'switch',
    },
    {
      label: '蔬菜',
      component: 'checkbox',
      prop: 'vegetable',
      dic: [
        { label: '毛豆', value: 1 },
        { label: '番茄', value: 2 },
        { label: '南瓜', value: 3 },
      ],
      rules: [{ required: true, message: '请选择蔬菜', trigger: 'change' }],
    },
    {
      label: '备注',
      prop: 'remark',
      type: 'textarea',
    },
  ])

  const handleFinish = (value: any, done: any) => {
    setTimeout(() => {
      console.log(value)
      ElMessage.success(JSON.stringify(value))
      done()
    }, 2000)
  }
</script>