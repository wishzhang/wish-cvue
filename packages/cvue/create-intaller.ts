import type { App } from 'vue'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export const createInstaller = (components: any, plugins: any) => {
    const install = (app: App) => {
        if (app[INSTALLED_KEY]) return
        app[INSTALLED_KEY] = true

        components.forEach((c) => app.use(c))
        plugins.forEach((c) => app.use(c))
    }

    return {
        install
    }
}