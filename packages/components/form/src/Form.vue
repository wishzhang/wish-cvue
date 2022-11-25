<script setup lang="ts" >
  import {cloneDeep} from 'lodash-es'
  import {defineComponent, reactive, ref, watch} from "vue";

  type FormColumns = Array<{
    prop: string,
    label: string,
    type: string,
    hide?: boolean,
    component?: string
    span?: number
  }>;

  export interface FormProps {
    modelValue: any
    columns: FormColumns
  }

  const {modelValue, columns = []} = defineProps<FormProps>();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: FormProps['modelValue'])
  }>()

  let innerColumns = reactive(cloneDeep(columns));
  innerColumns = innerColumns.map((el) => {
    return Object.assign({}, {
      span: 6
    }, el);
  })

  let formValue = reactive(modelValue)
  watch(formValue, (val) => {
    emit('update:modelValue', val)
  })
</script>

<template>
  <div class="avue-form">
    <el-form v-bind="$attrs" v-model="formValue" label-width="120px">
      <el-row>
        <template v-for="(item, index) in innerColumns" :key="index">
          <el-col :span="item.span">
            <el-form-item :label="item.label" :prop="item.prop" :class="{'avue-form-item-hide': item.hide}">
              <component v-model="formValue[item.prop]"
                         v-bind="item"
                         :is="$cvue._getComponentName(item.type, item.component)"></component>
            </el-form-item>
          </el-col>
        </template>
        <!--slot-->
        <slot name="append"></slot>
      </el-row>
    </el-form>
  </div>
</template>
