<script setup lang="ts">
  import { ref } from 'vue'

  export interface CVueInputProps {
    placeholder?: string
    clearable?: boolean
    rows?: number
  }

  defineOptions({
    name: 'CvueInput',
  })

  const {
    placeholder = '请输入',
    clearable = true,
    rows = 4,
  } = defineProps<CVueInputProps>()

  const innerRef = ref<any>(null)

  // const clear: InputInstance['clear'] = () => {}

  defineExpose({})
</script>

<template>
  <el-input
    v-bind="$attrs"
    ref="innerRef"
    :placeholder="placeholder"
    :rows="rows"
    :clearable="clearable"
  >
    <template v-for="(item, key) in $slots" :key="key" #[key]="scope">
      <slot :name="key" v-bind="scope"></slot>
    </template>
  </el-input>
</template>
