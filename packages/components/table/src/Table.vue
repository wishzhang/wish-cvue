<script lang="ts" setup>
  import TableFooter from '@cvue/components/table/src/TableFooter.vue'
  import {ElTable, ElTableColumn} from 'element-plus'
  import {TableFooterProps} from '@cvue/components/table/src/TableFooter.vue'
  import TableSearch, {TableSearchProps} from './TableSearch.vue'
  import {reactive} from 'vue'
  import TableMenu, {TableMenuProps} from './TableMenu.vue'
  import TableOperation, {TableOperationProps} from './TableOperation.vue'

  export type ElTableType = typeof ElTable
  export type ElTableColumnType = typeof ElTableColumn

  export interface Column {
    prop: String
    label: String
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

  const {columns = [], pagination, search, menu, operation} = defineProps<TableProps>()
  const emit = defineEmits<TableEmits>()

  let searchFormValue = reactive<Record<string, any>>({})
  let pageValue = reactive<Record<string, any>>({
    currentPage: 1,
    pageSize: 20
  })
  let params = reactive<object>({})

  const handleSizeChange = () => {
  }

  const handleCurrentChange = () => {
  }

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
      pageSize: page.pageSize
    })
    onLoad()
  }

  const handleMenuAdd = () => {
    emit('menu-add')
  }
</script>

<template>
  <div class="cvue-table">
    <div class="cvue-table-search-box">
      <TableSearch v-bind="search" @search="handleSearchClick"/>
    </div>

    <div class="cvue-table-main-box">
      <div class="cvue-table-menu-box">
        <TableMenu v-bind="menu" @add="handleMenuAdd"></TableMenu>
      </div>
      <el-table v-bind="$attrs">
        <template v-for="(column, index) in columns">
          <el-table-column v-bind="column">
            <template v-if="$slots[column.prop]" #default="scope">
              <slot v-bind="scope" :name="$slots[column.prop]"></slot>
            </template>
            <template v-if="$slots[`${column.prop}Header`]" #header="scope">
              <slot v-bind="scope" :name="`${column.prop}Header`"></slot>
            </template>
          </el-table-column>
        </template>
        <TableOperation v-bind="operation"
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
        <TableFooter :total="100" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="pageValue.currentPage" :page-size="pageValue.pageSize"
                     @change="handleFooterChange"
                     v-bind="pagination"></TableFooter>
      </div>
    </div>
  </div>

</template>