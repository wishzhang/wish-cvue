import {Component} from 'vue'

export function getOptionType(name: string = 'input', component: string) {
  if (component) {
    return component
  }
  name = name.toLowerCase().trim()
  if (name.startsWith('cvue-')) {
    return name
  }
  if (!name.startsWith('el-')) {
    name = 'el-' + name
  }
  if (name === 'el-input') {
    return 'cvue-input'
  }
  return name;
}

const cvue = {
  install(app) {
    app.config.globalProperties.$cvue = {
      _getComponentName: getOptionType
    }
  }
}

export default cvue;