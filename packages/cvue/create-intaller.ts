const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export const createInstaller = (components: any, plugins: any) => {
  const install = (app: any) => {
    if (app[INSTALLED_KEY]) return
    app[INSTALLED_KEY] = true

    components.forEach((c: any) => app.use(c))
    plugins.forEach((c: any) => app.use(c))
  }

  return {
    install,
  }
}
