<script setup lang="ts">
  import {reactive, ref, watch, watchEffect} from "vue";

  export interface SelectProps {
    placeholder?: string
    clearable?: boolean
    dic?: Array<object>
  }

  export interface SelectEmits {
  }

  const {placeholder = '请输入', clearable = true, dic = []} = defineProps<SelectProps>();
  const emit = defineEmits<SelectEmits>();
</script>

<template>
  <el-select placeholder="请选择" :clearable="clearable">
    <el-option
        v-for="item in dic"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
</template>

