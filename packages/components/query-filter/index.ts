import QueryFilter from './src/QueryFilter.vue';
import type {App} from 'vue'

export * from './src/QueryFilter.vue';

QueryFilter['install'] = (app: App) => {
  app.component('CvueQueryFilter', QueryFilter);
}

export default QueryFilter