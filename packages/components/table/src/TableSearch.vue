<script lang="ts" setup>
  import QueryFilter from '@cvue/components/query-filter'
  import { reactive } from 'vue'

  export interface TableSearchProps {
    columns: Array<Record<string, any>>
  }

  export interface TableSearchEmits {
    (e: 'search', val: Record<string, any>): void
  }

  const { columns = [] } = defineProps<TableSearchProps>()
  const emit = defineEmits<TableSearchEmits>()
  // const form = reactive({})

  const handleSearch = (val) => {
    emit('search', val)
  }
</script>

<template>
  <QueryFilter :columns="columns" @search="handleSearch" />
</template>

<style scoped></style>
