import Select from '@cvue/components/select/src/Select.vue';

export * from '@cvue/components/select/src/Select.vue';

Select['install'] = (app) => {
  app.component('CvueSelect', Select);
}

export default Select

