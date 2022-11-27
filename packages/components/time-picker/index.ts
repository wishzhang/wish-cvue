import TimePicker from '@cvue/components/time-picker/src/TimePicker.vue';

export * from '@cvue/components/time-picker/src/TimePicker.vue';

TimePicker['install'] = (app) => {
  app.component('CvueTimePicker', TimePicker);
}

export default TimePicker

