<script lang="ts" setup>
  import Form, {FormProps} from '@cvue/components/form'
  import {reactive} from 'vue'

  export interface QueryFilterProps {
    columns: FormProps['columns']
  }

  const {columns = []} = defineProps<QueryFilterProps>()
  const innerColumns = reactive(columns)
</script>

<template>
  <div class="cvue-query-filter">
    <Form :columns="innerColumns"></Form>
  </div>
</template>