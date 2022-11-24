import Radio from '@cvue/components/radio/src/radio.vue';

Radio['install'] = (app) => {
  app.component('CvueRadio', Radio);
}

export default Radio

