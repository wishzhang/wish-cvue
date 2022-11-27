import Table from './src/Table.vue'
import type { App } from 'vue'

export * from './src/TableFooter.vue'
export * from './src/TableMenu.vue'
export * from './src/TableOperation.vue'
export * from './src/TableSearch.vue'

Table['install'] = (app: App) => {
  app.component('CvueTable', Table)
}

export default Table
