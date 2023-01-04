import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const pageOutlinePlugin = (options = {}) => {
  return (app) => {
    return {
      name: 'vuepress-plugin-page-outline',
      clientConfigFile: path.resolve(__dirname, './config.ts'),
    }
  }
}