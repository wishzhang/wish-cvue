<script lang="ts" setup>
  export type TableFooterProps = {
    position: 'left' | 'right'
  }
  const {position = 'right'} = defineProps<TableFooterProps>()
</script>

<template>
  <div class="avue-table-footer" :style="{justifyContent: position === 'right'? 'flex-end': 'flex-start'}">
    <el-pagination background layout="prev, pager, next" :total="50" v-bind="$attrs"/>
  </div>
</template>