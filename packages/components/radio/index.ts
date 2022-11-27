import Radio from './src/Radio.vue';
import type {App} from 'vue'

export * from './src/Radio.vue';

Radio['install'] = (app: App) => {
  app.component('CvueRadio', Radio);
}

export default Radio

