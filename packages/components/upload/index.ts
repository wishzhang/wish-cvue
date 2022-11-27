import Upload from './src/Upload.vue'
import type { App } from 'vue'

export * from './src/Upload.vue'

Upload['install'] = (app: App) => {
  app.component('CvueUpload', Upload)
}

export default Upload
