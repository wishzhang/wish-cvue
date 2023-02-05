import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin & { name: string }

export function withInstall<T>(component: T) {
  let c = component as SFCWithInstall<T>
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    app.component(c.name, component)
  }

  return component as SFCWithInstall<T>
}
