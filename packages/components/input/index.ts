import Input from '@cvue/components/input/src/Input.vue';

export * from '@cvue/components/input/src/Input.vue';

Input['install'] = (app) => {
  app.component('CvueInput', Input);
}

export default Input

