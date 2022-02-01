import {createInstaller} from './create-intaller';
import Components from './components';
import Plugins from './plugins'

const installer = createInstaller(Components, Plugins);

export default installer;