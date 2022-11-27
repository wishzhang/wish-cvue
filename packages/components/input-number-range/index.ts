import InputNumberRange from './src/InputNumberRange.vue';
import type {App} from 'vue'

export * from './src/InputNumberRange.vue';

InputNumberRange['install'] = (app: App) => {
  app.component('CvueInputNumberRange', InputNumberRange);
}

export default InputNumberRange

