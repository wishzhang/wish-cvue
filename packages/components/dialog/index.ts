import Dialog from '@cvue/components/dialog/src/Dialog.vue';

export * from '@cvue/components/dialog/src/Dialog.vue';

Dialog['install'] = (app) => {
  app.component('CvueDialog', Dialog);
}

export default Dialog

