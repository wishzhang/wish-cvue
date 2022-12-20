<script setup lang="ts">
  export interface SelectProps {
    placeholder?: string
    clearable?: boolean
    dic?: Array<object>
  }

  export interface SelectEmits {}

  const { placeholder = '请选择', clearable = true, dic = [] } = defineProps<SelectProps>()
</script>

<template>
  <el-select :placeholder="placeholder" :clearable="clearable">
    <el-option v-for="item in dic" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>
