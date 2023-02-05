<script setup lang="ts">
  interface RadioProps {
    size?: string
    dic?: Array<Record<string, any>>
  }

  defineOptions({
    name: 'CvueRadio',
  })

  const { dic = [] } = defineProps<RadioProps>()
</script>

<template>
  <el-radio-group v-bind="$attrs">
    <template v-for="(item, index) in dic" :key="index">
      <el-radio :label="item?.value">
        {{ item?.label }}
      </el-radio>
    </template>
  </el-radio-group>
</template>
