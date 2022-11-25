import Form from '@cvue/components/form/src/Form.vue';

export * from '@cvue/components/form/src/Form.vue';

Form['install'] = (app) => {
  app.component('CvueForm', Form);
}

export default Form;