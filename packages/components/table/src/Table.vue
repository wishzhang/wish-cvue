<script lang="ts">
  import {ElTable, ElTableColumn} from 'element-plus'
  import {TableFooterProps} from "./TableFooter.vue";

  export type ElTableType = typeof ElTable
  export type ElTableColumnType = typeof ElTableColumn

  export interface Column {
    prop: String
    label: String
  }

  export type Columns = Array<Column>

  export interface TableProps {
    pagination?: TableFooterProps
    columns: Array<ElTableColumnType>
  }
</script>
<script lang="ts" setup>
  import TableFooter from './TableFooter.vue'

  const {columns = [], pagination} = defineProps<TableProps>()
  const emit = defineEmits<{
    (e: 'on-load', searchValue: any): Promise<any> | void
  }>()

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

      <template v-if="$slots.append" #append="scope">
        <slot v-bind="scope" name="append"></slot>
      </template>

      <template v-if="$slots.empty" #empty="scope">
        <slot v-bind="scope" name="empty"></slot>
      </template>
    </el-table>

    <!-- footer -->
    <TableFooter @size-change="handleSizeChange" @current-change="handleCurrentChange"
                 v-bind="pagination"></TableFooter>
  </div>

</template>

<style scoped lang="scss">
  .cvue-table {

  }
</style>