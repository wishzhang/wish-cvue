import Radio from '@cvue/components/radio/src/Radio.vue';

export * from '@cvue/components/radio/src/Radio.vue';

Radio['install'] = (app) => {
  app.component('CvueRadio', Radio);
}

export default Radio

