<script lang="ts" setup>
  import TableFooter from '@wele/components/table/src/TableFooter.vue'
  import { ElTable, ElTableColumn, TableInstance, TableProps } from 'element-plus'
  import { TableFooterProps } from '@wele/components/table/src/TableFooter.vue'
  import TableSearch, { TableSearchProps } from './TableSearch.vue'
  import { onMounted, reactive, watchEffect } from 'vue'
  import TableMenu, { TableMenuProps } from './TableMenu.vue'
  import TableOperation, { TableOperationProps } from './TableOperation.vue'
  import { merge } from 'lodash-es'

  export type ElTableType = typeof ElTable
  export type ElTableColumnType = typeof ElTableColumn

  export interface Column {
    prop: string
    label: string
  }

  export type Columns = Array<Column>

  export interface CvueTableProps<T = any> extends TableProps<T> {
    operation?: TableOperationProps
    menu?: TableMenuProps
    search?: TableSearchProps
    pagination?: TableFooterProps
    columns: Array<ElTableColumnType>
    onLoad?: (params: Record<string, any>) => Promise<void>
  }

  export interface TableEmits {
    (e: 'on-load', searchValue: Record<string, any>): Promise<any> | void
    (e: 'menu-add'): void
    (e: 'row-add'): void
    (e: 'row-edit'): void
    (e: 'row-delete'): void
  }

  const {
    columns = [],
    pagination,
    search,
    menu,
    operation,
    onLoad,
  } = defineProps<CvueTableProps>()
  const emit = defineEmits<TableEmits>()

  let innerRef = $ref<TableInstance>()
  let tableLoading = $ref(false)
  let innerPagination = $ref({})

  watchEffect(() => {
    innerPagination = merge(
      {},
      {
        currentPage: 1,
        pageSize: 10,
      },
      pagination
    )
  })

  let searchFormValue = $ref({})
  let params = reactive<object>({})

  const handleSizeChange = () => {}

  const handleCurrentChange = () => {}

  const innerOnLoad = async () => {
    tableLoading = true
    params = Object.assign(params, searchFormValue, innerPagination)
    await onLoad(params)
    tableLoading = false
  }

  const handleSearchClick = (val) => {
    innerPagination.currentPage = 1
    searchFormValue = Object.assign(searchFormValue, val)
    innerOnLoad()
  }

  const handleFooterChange = (page) => {
    innerPagination = merge({}, innerPagination, {
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

  defineExpose({
    clearSelection: (...args) => innerRef.clearSelection(...args),
    getSelectionRows: (...args) => innerRef.getSelectionRows(...args),
    toggleRowSelection: (...args) => innerRef.toggleRowSelection(...args),
    toggleAllSelection: (...args) => innerRef.toggleAllSelection(...args),
    toggleRowExpansion: (...args) => innerRef.toggleRowExpansion(...args),
    setCurrentRow: (...args) => innerRef.setCurrentRow(...args),
    clearSort: (...args) => innerRef.clearSort(...args),
    clearFilter: (...args) => innerRef.clearFilter(...args),
    doLayout: (...args) => innerRef.doLayout(...args),
    sort: (...args) => innerRef.sort(...args),
    scrollTo: (...args) => innerRef.scrollTo(...args),
    setScrollTop: (...args) => innerRef.setScrollTop(...args),
    setScrollLeft: (...args) => innerRef.setScrollLeft(...args),
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
