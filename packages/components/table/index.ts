import Table from '@cvue/components/table/src/table.vue'

Table['install'] = (app) => {
  app.component('CvueTable', Table);
}

export default Table

