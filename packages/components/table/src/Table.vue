<script lang="ts" setup>
  import TableFooter from '@cvue/components/table/src/TableFooter.vue'
  import {ElTable, ElTableColumn} from 'element-plus'
  import type {TableFooterProps} from '@cvue/components/table/src/TableFooter.vue'

  type ElTableType = typeof ElTable
  type ElTableColumnType = typeof ElTableColumn

  export interface Column {
    prop: String
    label: String
  }

  type Columns = Array<Column>

  export interface TableProps {
    pagination?: TableFooterProps
    columns: Array<ElTableColumnType>
  }

  export interface TableEmits {
    (e: 'on-load', searchValue: any): Promise<any> | void
  }

  const {columns = [], pagination} = defineProps<TableProps>()
  const emit = defineEmits<TableEmits>()

  const handleSizeChange = () => {
    emit('on-load', 'handleSizeChange')
  }

  const handleCurrentChange = () => {
    emit('on-load', 'handleCurrentChange')
  }
</script>

<template>
  <div class="cvue-table">
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

      <template #append="scope">
        <slot v-bind="scope" name="append"></slot>
      </template>

      <template #empty="scope">
        <slot v-bind="scope" name="empty"></slot>
      </template>
    </el-table>

    <!-- footer -->
    <TableFooter @size-change="handleSizeChange" @current-change="handleCurrentChange"
                 v-bind="pagination"></TableFooter>
  </div>

</template>