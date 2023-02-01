import { createInstaller } from './create-intaller'
import Components from './components'
import Plugins from './plugins'
export * from '@wele/components'
export * from '@wele/core'

const installer = createInstaller(Components, Plugins)

export default installer
