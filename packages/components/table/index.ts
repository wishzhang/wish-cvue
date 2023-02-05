import Table from './src/Table.vue'
import { withInstall } from '@wele/utils'

export * from './src/TableFooter.vue'
export * from './src/TableMenu.vue'
export * from './src/TableOperation.vue'
export * from './src/TableSearch.vue'

export const CvueTable = withInstall(Table)

export default CvueTable
