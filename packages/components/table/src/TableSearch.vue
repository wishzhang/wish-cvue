<script lang="ts" setup>
  import QueryFilter from '@wele/components/query-filter'

  export interface TableSearchProps {
    columns: Array<Record<string, any>>
  }

  export interface TableSearchEmits {
    (e: 'search', val: Record<string, any>): void
  }

  const { columns = [] } = defineProps<TableSearchProps>()
  const emit = defineEmits<TableSearchEmits>()

  const handleSearch = (val) => {
    emit('search', val)
  }
</script>

<template>
  <QueryFilter :columns="columns" @search="handleSearch" />
</template>

<style scoped></style>
