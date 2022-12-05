import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Cvue from '@wishzhang/cvue'
import '@wishzhang/cvue/dist/index.css'
import Examples from '../examples/index'
import './styles/palette.scss'
import './styles/index.scss'
import Components from './components'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// @ts-ignore
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus, {
      locale: zhCn,
    })
    app.use(Cvue)
    app.use(Components)
    app.use(Examples)
  },
  setup() {},
  rootComponents: [],
})
