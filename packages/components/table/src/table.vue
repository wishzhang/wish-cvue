<script lang="ts" setup>
  import {ElTable, ElTableColumn} from 'element-plus'

  type ElTableType = typeof ElTable
  type ElTableColumnType = typeof ElTableColumn

  interface Column {
    prop: String
    label: String
  }

  type Columns = Array<Column>

  type TableProps = {
    columns: Array<ElTableColumnType>
  }

  const {columns = []} = defineProps<TableProps>()
</script>

<template>
  <el-table>
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
</template>

<style scoped>

</style>