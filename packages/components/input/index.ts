import Input from './src/Input.vue'
import type { App } from 'vue'

export * from './src/Input.vue'

Input['install'] = (app: App) => {
  app.component('CvueInput', Input)
}

export default Input
