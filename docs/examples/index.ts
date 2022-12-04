import Checkbox from './Checkbox.vue'
import DatePicker from './DatePicker.vue'
import Form from './Form.vue'
import ContainerDemo from './ContainerDemo.vue'

export default {
  install(app) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Checkbox', Checkbox)
    app.component('DatePicker', DatePicker)
    app.component('FormDemo', Form)
    app.component('ContainerDemo', ContainerDemo)
  },
}
