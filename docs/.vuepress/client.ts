import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Cvue from '@wishzhang/cvue'
import '@wishzhang/cvue/dist/index.css'
import Examples from '../examples/index'
import './styles/palette.scss'
import './styles/index.scss'

// @ts-ignore
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(Cvue)
    app.use(Examples)
  },
  setup() {},
  rootComponents: [],
})
