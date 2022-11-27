import {Component} from 'vue'

export function getOptionType(component: string = 'input') {
  component = component.toLowerCase().trim()

  const map = ['input', 'select', 'radio', 'checkbox', 'date-picker']
  if (map.includes(component)) {
    return `cvue-${component}`
  }

  return component;
}

const cvue = {
  install(app) {
    app.config.globalProperties.$cvue = {
      _getComponentName: getOptionType
    }
  }
}

export default cvue;