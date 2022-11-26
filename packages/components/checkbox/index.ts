import Checkbox from '@cvue/components/checkbox/src/Checkbox.vue';

export * from '@cvue/components/checkbox/src/Checkbox.vue';

Checkbox['install'] = (app) => {
  app.component('CvueCheckbox', Checkbox);
}

export default Checkbox;