<script lang="ts" setup>
  import {defineComponent, reactive, ref, watch} from "vue";
  import {cloneDeep} from 'lodash-es'

  type Columns = Array<{
    prop: string,
    label: string,
    type: string,
    component?: string
  }>;

  interface FormProps {
    modelValue: any
    columns: Columns
  }

  const {modelValue, columns = []} = defineProps<FormProps>()
  const emit = defineEmits<{
    (e: 'update:modelValue', value: FormProps['modelValue'])
  }>()

  const formValue = reactive(modelValue)

  watch(formValue, (val) => {
    emit('update:modelValue', val)
  })
</script>

<template>
  <div class="avue-form">
    <el-form v-bind="$attrs" v-model="formValue" label-width="120px">
      <template v-for="(item, index) in columns" :key="index">
        <el-form-item :label="item.label" :prop="item.prop">
          <component v-model="formValue[item.prop]"
                     v-bind="item"
                     :is="$cvue._getComponentName(item.type, item.component)"></component>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
  .avue-form {

  }
</style>
