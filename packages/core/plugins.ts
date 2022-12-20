import type { App } from 'vue'

export function getOptionType(component = 'input') {
  component = component.toLowerCase().trim()

  const cvueMap = ['input', 'select', 'radio', 'checkbox', 'date-picker', 'time-picker']
  const elMap = ['switch']
  if (cvueMap.includes(component)) {
    return `cvue-${component}`
  }
  if (elMap.includes(component)) {
    return `el-${component}`
  }

  return component
}

const cvue = {
  install(app: App) {
    app.config.globalProperties.$cvue = {
      _getComponentName: getOptionType,
    }
  },
}

export default cvue
