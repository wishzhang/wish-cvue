import DatePicker from './src/DatePicker.vue'
import type { App } from 'vue'

export * from './src/DatePicker.vue'

DatePicker['install'] = (app: App) => {
  app.component('CvueDatePicker', DatePicker)
}

export default DatePicker
