import Table from '@cvue/components/table/src/table.vue'

export * from './src/TableFooter.vue'
export * from './src/Table.vue'

Table['install'] = (app) => {
  app.component('CvueTable', Table);
}

export default Table

