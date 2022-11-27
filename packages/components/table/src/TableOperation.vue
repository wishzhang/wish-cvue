<script lang="ts" setup>
  export interface TableOperationProps {
    show?: boolean
    label?: string
    fixed?: 'left' | 'right'
    width?: number
  }

  export interface TableOperationEmits {
    (e: 'row-view'): void
    (e: 'row-add'): void
    (e: 'row-edit'): void
    (e: 'row-delete'): void
  }

  const {
    show = true,
    width = 180,
    fixed = 'right',
    label = '操作',
  } = defineProps<TableOperationProps>()
  const emit = defineEmits<TableOperationEmits>()

  const handleRowView = () => {
    emit('row-view')
  }

  const handleRowAdd = () => {
    emit('row-add')
  }

  const handleRowEdit = () => {
    emit('row-edit')
  }

  const handleRowDelete = () => {
    emit('row-delete')
  }
</script>

<template>
  <el-table-column
    v-bind="$attrs"
    v-if="show"
    :fixed="fixed"
    :label="label"
    :width="width"
  >
    <template #default>
      <el-button link type="primary" size="small" @click="handleRowView"
        >查看</el-button
      >
      <el-button link type="primary" size="small" @click="handleRowAdd"
        >新增</el-button
      >
      <el-button link type="primary" size="small" @click="handleRowEdit"
        >编辑</el-button
      >
      <el-button link type="primary" size="small" @click="handleRowDelete"
        >删除</el-button
      >
    </template>
  </el-table-column>
</template>

<style scoped></style>
