import Select from './src/Select.vue';
import type {App} from 'vue'

export * from './src/Select.vue';

Select['install'] = (app: App) => {
  app.component('CvueSelect', Select);
}

export default Select

