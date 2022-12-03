import Checkbox from './Checkbox.vue'
import DatePicker from "./DatePicker.vue";

export default {
  install(app) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Checkbox', Checkbox)
    app.component('DatePicker', DatePicker)
  },
}
