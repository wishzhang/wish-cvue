<script lang="ts" setup>
  import {defineComponent, reactive, ref, watch} from "vue";

  export interface CheckboxItem {
    label: string
    value: string
    disabled?: boolean
  }

  export interface CheckboxProps {
    modelValue?: any
    dic?: Array<CheckboxItem>
  }

  const {modelValue, dic = []} = defineProps<CheckboxProps>();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: CheckboxProps['modelValue'])
  }>()

  const innerValue = ref(modelValue)
  watch(innerValue, (val) => {
    emit('update:modelValue', val)
  })
</script>

<template>
  <div class="avue-checkbox">
    <el-checkbox-group v-bind="$attrs" v-model="innerValue" >
      <template v-for="item in dic" :key="item.value">
        <el-checkbox v-bind="item" :label="item.value">{{ item.label }}</el-checkbox>
      </template>
    </el-checkbox-group>
  </div>
</template>
