<script setup lang="ts">
  import {reactive, ref, watch, watchEffect} from "vue";

  export interface InputProps {
    modelValue?: string
    placeholder?: string
    clearable?: boolean
  }

  export interface InputEmits {
    (e: 'update:modelValue', value: InputProps['modelValue']): void
  }

  const {modelValue, placeholder = '请输入', clearable = true} = defineProps<InputProps>();
  const emit = defineEmits<InputEmits>();

  const innerValue = ref(modelValue);
  watch(innerValue, val => {
    emit("update:modelValue", val);
  });
</script>

<template>
  <el-input v-bind="$attrs" v-model="innerValue" :placeholder="placeholder" :clearable="clearable"></el-input>
</template>

