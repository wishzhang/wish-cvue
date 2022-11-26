<script setup lang="ts">
  import {reactive, ref, watch, watchEffect} from "vue";

  export interface SelectProps {
    modelValue?: string
    placeholder?: string
    clearable?: boolean
    dic?: Array<object>
  }

  export interface SelectEmits {
    (e: 'update:modelValue', value: SelectProps['modelValue']): void
  }

  const {modelValue, placeholder = '请输入', clearable = true, dic = []} = defineProps<SelectProps>();
  const emit = defineEmits<SelectEmits>();

  const innerValue = ref(modelValue);
  watch(innerValue, val => {
    emit("update:modelValue", val);
  });
</script>

<template>
  <el-select v-model="innerValue" placeholder="请选择" :clearable="clearable">
    <el-option
        v-for="item in dic"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
</template>

