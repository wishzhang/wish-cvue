<script lang="ts" setup>
  export interface TableMenuProps {
    showAdd?: boolean
  }

  export interface TableMenuEmits {
    (e: 'add'): void
  }

  const { showAdd = true } = defineProps<TableMenuProps>()
  const emit = defineEmits<TableMenuEmits>()

  const handleAdd = () => {
    emit('add')
  }
</script>

<template>
  <div class="avue-talbe-menu">
    <el-button v-if="showAdd" type="primary" @click="handleAdd">新增</el-button>
    <slot></slot>
  </div>
</template>
