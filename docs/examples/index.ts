// @ts-ignore
const files = import.meta.globEager('./**/*.vue')

export default {
  install(app) {
    for (const key in files) {
      let name = key.replace('./', '').replace('.vue', '').replace('/', '-')
      app.component(name, files[key].default)
    }
  },
}
