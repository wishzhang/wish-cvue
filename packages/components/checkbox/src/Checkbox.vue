<script lang="ts" setup>
  export interface CheckboxItem {
    label: string
    value: string
    disabled?: boolean
  }

  export interface CheckboxProps {
    dic?: Array<CheckboxItem>
  }

  const { dic = [] } = defineProps<CheckboxProps>()
</script>

<template>
  <div class="avue-checkbox">
    <el-checkbox-group v-bind="$attrs">
      <template v-for="item in dic" :key="item.value">
        <el-checkbox v-bind="item" :label="item.value">{{ item.label }} </el-checkbox>
      </template>
    </el-checkbox-group>
  </div>
</template>
