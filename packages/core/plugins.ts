import {Component} from 'vue'

export function getOptionType(name: string = '', component: string) {
  if (component) {
    return component
  }
  // is not the cvue component that had been registered
  if (!name.toLowerCase().startsWith('cvue-')) {
    name = 'el-' + name;
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