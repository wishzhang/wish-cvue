import Table from '@cvue/components/table/src/Table.vue'

export * from '@cvue/components/table/src/TableFooter.vue'
export * from '@cvue/components/table/src/TableMenu.vue'
export * from '@cvue/components/table/src/TableOperation.vue'
export * from '@cvue/components/table/src/TableSearch.vue'

Table['install'] = (app) => {
  app.component('CvueTable', Table);
}

export default Table

