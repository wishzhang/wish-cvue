<script lang="ts">
  export interface TableFooterProps {
    position: 'left' | 'right'
  }
</script>

<script lang="ts" setup>
  const {position = 'right'} = defineProps<TableFooterProps>()
</script>

<template>
  <div class="avue-table-footer" :style="{justifyContent: position === 'right'? 'flex-end': 'flex-start'}">
    <el-pagination background layout="prev, pager, next" :total="50" v-bind="$attrs"/>
  </div>
</template>

<style scoped lang="scss">
  .avue-table-footer {
    display: flex;
    align-items: center;
    margin: 16px 0;
    >>> .active{
      background: red !important;
    }
  }
</style>