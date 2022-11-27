import TimePicker from './src/TimePicker.vue'
import type { App } from 'vue'

export * from './src/TimePicker.vue'

TimePicker['install'] = (app: App) => {
  app.component('CvueTimePicker', TimePicker)
}

export default TimePicker
