<script lang="ts" setup>
  import TableFooter from './TableFooter.vue'
  import { ElTable } from 'element-plus'
  import type { TableColumnInstance, TableInstance } from 'element-plus'
  import TableSearch from './TableSearch.vue'
  import { onMounted, reactive, watchEffect, ref } from 'vue'
  import TableMenu from './TableMenu.vue'
  import TableOperation from './TableOperation.vue'
  import { merge } from 'lodash-es'
  import type {} from 'vue/macros'

  interface CvueTableProps {
    operation?: any
    menu?: any
    search?: any
    pagination?: any
    columns: Array<TableColumnInstance>
    onLoad?: (params: Record<string, any>) => Promise<void>
  }

  interface TableEmits {
    (e: 'on-load', searchValue: Record<string, any>): Promise<any> | void
    (e: 'menu-add'): void
    (e: 'row-add'): void
    (e: 'row-edit'): void
    (e: 'row-delete'): void
  }

  defineOptions({
    name: 'CvueTable',
  })

  const {
    columns = [],
    pagination,
    search,
    menu,
    operation,
    onLoad,
  } = defineProps<CvueTableProps>()
  const emit = defineEmits<TableEmits>()

  let innerRef = ref<TableInstance>()
  let tableLoading = ref(false)
  let innerPagination: any = ref({})

  watchEffect(() => {
    innerPagination.value = merge(
      {},
      {
        currentPage: 1,
        pageSize: 10,
      },
      pagination
    )
  })

  let searchFormValue = ref({})
  let params = reactive<object>({})

  const handleSizeChange = () => {}

  const handleCurrentChange = () => {}

  const innerOnLoad = async () => {
    tableLoading.value = true
    params = Object.assign(params, searchFormValue.value, innerPagination.value)
    await onLoad(params)
    tableLoading.value = false
  }

  const handleSearchClick = (val) => {
    innerPagination.value.currentPage = 1
    searchFormValue.value = Object.assign(searchFormValue.value, val)
    innerOnLoad()
  }

  const handleFooterChange = (page) => {
    innerPagination.value = merge({}, innerPagination, {
      currentPage: page.currentPage,
      pageSize: page.pageSize,
    })
    innerOnLoad()
  }

  const handleMenuAdd = () => {
    emit('menu-add')
  }

  onMounted(() => {
    innerOnLoad()
  })

  // ts-ignore
  defineExpose({
    clearSelection: (...args) => innerRef.value.clearSelection(...(args as [])),
    getSelectionRows: (...args) =>
      innerRef.value.getSelectionRows(...(args as [])),
    toggleRowSelection: (...args) =>
      innerRef.value.toggleRowSelection(args[0], args[1]),
    toggleAllSelection: (...args) =>
      innerRef.value.toggleAllSelection(...(args as [])),
    toggleRowExpansion: (...args) =>
      innerRef.value.toggleRowExpansion(args as []),
    setCurrentRow: (...args) => innerRef.value.setCurrentRow(args as []),
    clearSort: (...args) => innerRef.value.clearSort(...(args as [])),
    clearFilter: (...args) => innerRef.value.clearFilter(args as []),
    doLayout: (...args) => innerRef.value.doLayout(...(args as [])),
    sort: (...args) => innerRef.value.sort(args[0], args[1]),
    scrollTo: (...args) => innerRef.value.scrollTo(args[0], args[1]),
    setScrollTop: (...args) => innerRef.value.setScrollTop(...(args as [])),
    setScrollLeft: (...args) => innerRef.value.setScrollLeft(...(args as [])),
  })
</script>

<template>
  <div class="cvue-table">
    <div v-if="search" class="cvue-table-search-box">
      <TableSearch v-bind="search" @search="handleSearchClick" />
    </div>

    <div class="cvue-table-main-box">
      <div class="cvue-table-menu-box">
        <TableMenu v-bind="menu" @add="handleMenuAdd"></TableMenu>
      </div>
      <!-- body -->
      <div v-loading="tableLoading" class="cvue-table-body-box">
        <el-table ref="innerRef" v-bind="$attrs">
          <template v-for="column in columns" :key="column.prop">
            <el-table-column v-bind="column">
              <template v-if="$slots[column.prop]" #default="scope">
                <slot v-bind="scope" :name="$slots[column.prop]"></slot>
              </template>
              <template v-if="$slots[`${column.prop}Header`]" #header="scope">
                <slot v-bind="scope" :name="`${column.prop}Header`"></slot>
              </template>
            </el-table-column>
          </template>
          <TableOperation
            v-bind="operation"
            @row-view="$emit('row-view')"
            @row-add="$emit('row-add')"
            @row-edit="$emit('row-edit')"
            @row-delete="$emit('row-delete')"
          ></TableOperation>

          <template #append="scope">
            <slot v-bind="scope" name="append"></slot>
          </template>

          <template #empty="scope">
            <slot v-bind="scope" name="empty"></slot>
          </template>
        </el-table>

        <!-- footer -->
        <div class="cvue-table-footer">
          <TableFooter
            :total="innerPagination.total"
            :current-page="innerPagination.currentPage"
            :page-size="innerPagination.pageSize"
            v-bind="innerPagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            @change="handleFooterChange"
          ></TableFooter>
        </div>
      </div>
    </div>
  </div>
</template>
