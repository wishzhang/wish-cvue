import Dialog from './src/Dialog.vue';
import type {App} from 'vue'

export * from './src/Dialog.vue';

Dialog['install'] = (app: App) => {
  app.component('CvueDialog', Dialog);
}

export default Dialog

