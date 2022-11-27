import Form from './src/Form.vue';
import type {App} from 'vue'

export * from './src/Form.vue';

Form['install'] = (app: App) => {
  app.component('CvueForm', Form);
}

export default Form;