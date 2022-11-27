import Checkbox from './src/Checkbox.vue';
import type {App} from 'vue'

export * from './src/Checkbox.vue';

Checkbox['install'] = (app: App) => {
  app.component('CvueCheckbox', Checkbox);
}

export default Checkbox;