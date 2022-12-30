<script lang="ts" setup>
  import TableFooter from '@wele/components/table/src/TableFooter.vue'
  import { ElTable, ElTableColumn, TableInstance } from 'element-plus'
  import { TableFooterProps } from '@wele/components/table/src/TableFooter.vue'
  import TableSearch, { TableSearchProps } from './TableSearch.vue'
  import { reactive, ref } from 'vue'
  import TableMenu, { TableMenuProps } from './TableMenu.vue'
  import TableOperation, { TableOperationProps } from './TableOperation.vue'

  export type ElTableType = typeof ElTable
  export type ElTableColumnType = typeof ElTableColumn

  export interface Column {
    prop: string
    label: string
  }

  export type Columns = Array<Column>

  export interface TableProps {
    operation?: TableOperationProps
    menu?: TableMenuProps
    search?: TableSearchProps
    pagination?: TableFooterProps
    columns: Array<ElTableColumnType>
  }

  export interface TableEmits {
    (e: 'on-load', searchValue: Record<string, any>): Promise<any> | void
    (e: 'menu-add'): void
    (e: 'row-add'): void
    (e: 'row-edit'): void
    (e: 'row-delete'): void
  }

  const { columns = [], pagination, search, menu, operation } = defineProps<TableProps>()
  const emit = defineEmits<TableEmits>()
  const innerRef = ref<TableInstance>()

  let searchFormValue = reactive<Record<string, any>>({})
  let pageValue = reactive<Record<string, any>>({
    currentPage: 1,
    pageSize: 20,
  })
  let params = reactive<object>({})

  const handleSizeChange = () => {}

  const handleCurrentChange = () => {}

  const onLoad = () => {
    params = Object.assign(params, searchFormValue, pageValue)
    emit('on-load', params)
  }

  const handleSearchClick = (val) => {
    searchFormValue = Object.assign(searchFormValue, val)
    onLoad()
  }

  const handleFooterChange = (page) => {
    pageValue = Object.assign(pageValue, {
      currentPage: page.currentPage,
      pageSize: page.pageSize,
    })
    onLoad()
  }

  const handleMenuAdd = () => {
    emit('menu-add')
  }

  defineExpose({
    clearSelection: (...args) => innerRef.value.clearSelection(...args),
    getSelectionRows: (...args) => innerRef.value.getSelectionRows(...args),
    toggleRowSelection: (...args) => innerRef.value.toggleRowSelection(...args),
    toggleAllSelection: (...args) => innerRef.value.toggleAllSelection(...args),
    toggleRowExpansion: (...args) => innerRef.value.toggleRowExpansion(...args),
    setCurrentRow: (...args) => innerRef.value.setCurrentRow(...args),
    clearSort: (...args) => innerRef.value.clearSort(...args),
    clearFilter: (...args) => innerRef.value.clearFilter(...args),
    doLayout: (...args) => innerRef.value.doLayout(...args),
    sort: (...args) => innerRef.value.sort(...args),
    scrollTo: (...args) => innerRef.value.scrollTo(...args),
    setScrollTop: (...args) => innerRef.value.setScrollTop(...args),
    setScrollLeft: (...args) => innerRef.value.setScrollLeft(...args),
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
          :total="100"
          :current-page="pageValue.currentPage"
          :page-size="pageValue.pageSize"
          v-bind="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @change="handleFooterChange"
        ></TableFooter>
      </div>
    </div>
  </div>
</template>
