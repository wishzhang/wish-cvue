<script lang="ts">
  export const formItemHide = 'avue-form-item-hide'
</script>

<script lang="ts" setup>
  import {cloneDeep} from 'lodash-es'
  import {defineComponent, reactive, ref, watch, watchEffect} from "vue";

  export type FormColumns = Array<{
    prop: string,
    label: string,
    hide?: boolean,
    component?: string
    span?: number
  }>;

  export interface FormProps {
    labelWidth?: number
    modelValue: any
    columns: FormColumns
  }

  const {modelValue, columns = [], labelWidth = 90} = defineProps<FormProps>();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: FormProps['modelValue'])
  }>()

  let innerColumns = reactive(cloneDeep(columns));
  watchEffect(() => {
    innerColumns = Object.assign(innerColumns, cloneDeep(columns))
    console.log(cloneDeep(innerColumns))
    innerColumns = Object.assign(innerColumns, innerColumns.map((el) => {
      return Object.assign({}, {
        span: 6
      }, el);
    }))
  })


  let formValue = reactive(modelValue)
  watch(formValue, (val) => {
    emit('update:modelValue', val)
  })

  // initial
  // const getDefaultFormValue = (columns) => {
  //   let form = {}
  //   columns.forEach((el) => {
  //     if(el?.prop) {
  //       form[el.prop] = undefined
  //     }
  //   })
  //   return form
  // }
  // watchEffect(() => {
  //   form = getDefaultFormValue(innerColumns)
  // })
</script>

<template>
  <div class="avue-form">
    <el-form v-bind="$attrs" v-model="formValue" :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in innerColumns">
          <el-col :span="item.span" :class="{'avue-form-item-hide': item.hide}">
            <el-form-item :label="item.label" :prop="item.prop">
              <component v-model="formValue[item?.prop]"
                         v-bind="item"
                         :is="$cvue._getComponentName(item?.component)"></component>
            </el-form-item>
          </el-col>
        </template>
        <!--slot-->
        <slot name="append"></slot>
      </el-row>
    </el-form>
  </div>
</template>
