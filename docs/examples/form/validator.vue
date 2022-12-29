<template>
  <CvueForm
    ref="ruleFormRef"
    v-model="form"
    :columns="formColumns"
    @finish="handleFinish"
  ></CvueForm>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { cloneDeep } from 'lodash-es'

  import type { FormInstance } from 'element-plus'

  const ruleFormRef = ref<FormInstance>()

  let form = reactive({
    pass: '',
    confirm: '',
    age: 18,
  })

  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (form.confirm !== '') {
        if (ruleFormRef.value) {
          ruleFormRef.value.validateField('confirm', () => null)
        }
      }
      callback()
    }
  }

  const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== form.pass) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  }

  let formColumns = reactive([
    {
      label: '密码',
      prop: 'pass',
      component: 'input',
      type: 'password',
      rules: [{ validator: validatePass, trigger: 'blur' }],
    },
    {
      label: '确认密码',
      prop: 'confirm',
      type: 'password',
      rules: [{ validator: validatePass2, trigger: 'blur' }],
    },
    {
      label: '年龄',
      prop: 'age',
    },
  ])

  const handleFinish = (value: any, done: any) => {
    console.log(value)
    setTimeout(() => {
      ElMessage.success(JSON.stringify(value))
      done()
    }, 2000)
  }
</script>