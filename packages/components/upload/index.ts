import Upload from '@cvue/components/upload/src/Upload.vue';

export * from '@cvue/components/upload/src/Upload.vue';

Upload['install'] = (app) => {
  app.component('CvueUpload', Upload);
}

export default Upload

