<script lang="ts">
  export const formItemHide = 'avue-form-item-hide'
</script>

<script lang="ts" setup>
  import { cloneDeep, isEqual } from 'lodash-es'
  import { reactive, ref, watchEffect } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'

  export type FormColumns = Array<{
    prop: string
    label: string
    hide?: boolean
    component?: string
    span?: number
    rules?: FormRules
  }>

  export interface FormFinishFC {
    (value: FormProps['model'], done: () => void): void
  }

  export interface FormProps {
    labelWidth?: number
    columns: FormColumns
    inline?: boolean
    showOperation?: boolean
    modelValue?: any
    // 除开
    model?: any
  }

  const {
    columns = [],
    labelWidth = 84,
    showOperation = true,
    inline = false,
    modelValue = {},
  } = defineProps<FormProps>()
  const emit = defineEmits<{
    (e: 'finish', value: FormFinishFC): void
    (e: 'update:modelValue', value: any): void
  }>()

  const formRef = ref<FormInstance>()

  let innerColumns = reactive(cloneDeep(columns))
  watchEffect(() => {
    innerColumns = Object.assign(innerColumns, cloneDeep(columns))

    // layout
    if (inline) {
      innerColumns = Object.assign(
        innerColumns,
        innerColumns.map((el) => {
          return Object.assign(
            {},
            {
              span: 6,
            },
            el
          )
        })
      )
    } else {
      innerColumns = Object.assign(
        innerColumns,
        innerColumns.map((el) => {
          return Object.assign(
            {},
            {
              span: 24,
            },
            el
          )
        })
      )
    }
  })

  const getInitFormValue = () => {
    let obj = {} as any
    for (let column of innerColumns) {
      obj[column.prop] = undefined
    }
    obj = Object.assign({}, obj, modelValue)
    return obj
  }
  let formValue = reactive(getInitFormValue())

  const submitLoading = ref(false)

  const handleSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return

    await formEl.validate((valid, fields) => {
      if (valid) {
        submitLoading.value = true
        emit('finish', formValue, () => {
          submitLoading.value = false
        })
      } else {
        console.log('error submit!', fields)
        return false
      }
    })
  }

  const handleReset = async (formEl: FormInstance | undefined) => {
    console.log(formEl)
    if (!formEl) return

    await formEl.resetFields()
  }

  defineExpose({
    validate: (...args) => formRef.value.validate(...args),
    validateField: (...args) => formRef.value.validateField(...args),
    resetFields: (...args) => formRef.value.resetFields(...args),
    scrollToField: (...args) => formRef.value.scrollToField(...args),
    clearValidate: (...args) => formRef.value.clearValidate(...args),
  })

  watchEffect(() => {
    if (!isEqual(modelValue, formValue)) {
      emit('update:modelValue', formValue)
    }
  })
</script>

<template>
  <div class="avue-form">
    <el-form v-bind="$attrs" ref="formRef" :model="formValue" :label-width="labelWidth">
      <el-row>
        <template v-for="item in innerColumns" :key="item.prop">
          <el-col :span="item.span" :class="{ 'avue-form-item-hide': item.hide }">
            <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules ?? []">
              <component
                v-bind="item"
                :is="$cvue._getComponentName(item?.component)"
                v-model="formValue[item.prop]"
              ></component>
            </el-form-item>
          </el-col>
        </template>
        <!--slot-->
        <slot name="append"></slot>
        <!-- operation -->
        <el-col v-if="showOperation">
          <el-form-item>
            <el-button type="primary" :loading="submitLoading" @click="handleSubmit(formRef)"
              >提交
            </el-button>
            <el-button @click="handleReset(formRef)">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
