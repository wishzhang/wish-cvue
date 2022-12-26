import ContainerDemo from './ContainerDemo.vue'
import ContainerDetails from './ContainerDetails.vue'

export default {
  install(app: any) {
    app.component('ContainerDemo', ContainerDemo)
    app.component('ContainerDetails', ContainerDetails)
  },
}
