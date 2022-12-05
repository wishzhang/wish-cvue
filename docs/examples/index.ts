import Checkbox from './Checkbox.vue'
import DatePicker from './DatePicker.vue'
import FormDemo from './FormDemo.vue'
import CardDemo from './CardDemo.vue'
import DialogDemo from './DialogDemo.vue'
import InputDemo from './InputDemo.vue'
import RadioDemo from './RadioDemo.vue'
import SelectDemo from './SelectDemo.vue'
import TimePickerDemo from './TimePickerDemo.vue'
import UploadDemo from './UploadDemo.vue'
import TableDemo from './TableDemo.vue'

export default {
  install(app) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Checkbox', Checkbox)
    app.component('DatePicker', DatePicker)
    app.component('FormDemo', FormDemo)
    app.component('CardDemo', CardDemo)
    app.component('DialogDemo', DialogDemo)
    app.component('InputDemo', InputDemo)
    app.component('RadioDemo', RadioDemo)
    app.component('SelectDemo', SelectDemo)
    app.component('TimePickerDemo', TimePickerDemo)
    app.component('UploadDemo', UploadDemo)
    app.component('TableDemo', TableDemo)
  },
}
