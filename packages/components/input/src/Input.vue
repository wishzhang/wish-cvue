<script setup lang="ts">
  import {reactive, ref, watch, watchEffect} from "vue";
  import {InputInstance} from 'element-plus'

  export interface InputProps {
    placeholder?: string
    clearable?: boolean
    rows?: number
  }

  export interface InputEmits {
  }

  const {placeholder = '请输入', clearable = true, rows = 4} = defineProps<InputProps>();
  const emit = defineEmits<InputEmits>();

</script>

<template>
  <el-input v-bind="$attrs"
            :placeholder="placeholder"
            :rows="rows"
            :clearable="clearable">
    <template v-for="(item, key) in $slots" :key="key" v-slot:[key]="scope">
      <slot :name="key" v-bind="scope"></slot>
    </template>
  </el-input>
</template>

