import 'element-plus/dist/index.css'
import { config } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

config.global.plugins = [ElementPlus]
config.global.components = ElementPlusIconsVue
