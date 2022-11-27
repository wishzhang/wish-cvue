import DatePicker from '@cvue/components/date-picker/src/DatePicker.vue';

export * from '@cvue/components/date-picker/src/DatePicker.vue';

DatePicker['install'] = (app) => {
  app.component('CvueDatePicker', DatePicker);
}

export default DatePicker

