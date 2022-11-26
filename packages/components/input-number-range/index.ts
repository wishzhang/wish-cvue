import InputNumberRange from '@cvue/components/input-number-range/src/InputNumberRange.vue';

export * from '@cvue/components/input-number-range/src/InputNumberRange.vue';

InputNumberRange['install'] = (app) => {
  app.component('CvueInputNumberRange', InputNumberRange);
}

export default InputNumberRange

