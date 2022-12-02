import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Cvue from '@wishzhang/cvue'
import '@wishzhang/cvue/dist/index.css'
// @ts-ignore
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(Cvue)
  },
  setup() {},
  rootComponents: [],
})
