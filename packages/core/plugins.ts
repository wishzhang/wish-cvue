import {Component} from 'vue'

export function getOptionType(name: string = 'input', component: string) {
  if (component) {
    return component
  }
  name = name.toLowerCase().trim()
  // is not the cvue component that had been registered
  if (!name.startsWith('cvue-')) {
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