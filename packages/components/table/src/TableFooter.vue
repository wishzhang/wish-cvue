<script lang="ts" setup>
  import { ref } from 'vue'

  export interface TableFooterProps {
    position?: 'left' | 'right'
    currentPage?: number
    pageSize?: number
    background?: boolean
    layout?: string
    hideOnSinglePage?: boolean
    total?: number
  }

  export interface TableFooterEmits {
    (e: 'change', val: Record<string, any>): void
    (e: 'current-change', currentPage: number): void
    (e: 'size-change', pageSize: number): void
  }

  const {
    currentPage = 1,
    pageSize = 20,
    total = 0,
    background = true,
    hideOnSinglePage = false,
  } = defineProps<TableFooterProps>()

  const emit = defineEmits<TableFooterEmits>()

  const innerCurrentPage = ref(currentPage)
  const innerPageSize = ref(pageSize)

  const onChange = () => {
    emit('change', {
      currentPage: innerCurrentPage.value,
      pageSize: innerPageSize.value,
    })
  }

  const handleCurrentChange = (current) => {
    innerCurrentPage.value = current
    onChange()
    emit('current-change', innerCurrentPage.value)
  }

  const handleSizeChange = (size) => {
    innerPageSize.value = size
    onChange()
    emit('size-change', size)
  }
</script>

<template>
  <el-pagination
    v-bind="$attrs"
    :background="background"
    :current-page="currentPage"
    :hide-on-single-page="hideOnSinglePage"
    :page-size="pageSize"
    :total="total"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>
