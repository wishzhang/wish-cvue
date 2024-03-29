import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { containerPlugin } from '@vuepress/plugin-container'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { searchPlugin } from '@vuepress/plugin-search'

// @ts-ignore
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Cvue',
  description: '这是我的第一个 VuePress 站点',
  base: '/wish-cvue/',
  plugins: [
    searchPlugin({
    }),
    activeHeaderLinksPlugin({
      // 配置项
      headerLinkSelector: '.header-anchor',
      delay: 0,
      offset: 0,
    }),
    containerPlugin({
      // 配置项
      type: 'details',
      locales: {
        '/': {
          defaultInfo: 'DETAILS',
        },
        '/zh/': {
          defaultInfo: '详情',
        },
      },
      before: (info: string) => {
        return `<ContainerDetails>`
      },
      after: (info: string) => {
        return `</ContainerDetails>`
      },
    }),
  ],
  markdown: {
    importCode: {
      handleImportPath: (str) => {
        str = str.replace(/^@examples/, path.resolve(__dirname, '../examples'))
        return str
      },
    },
  },
  alias: {
    '@theme/Page.vue': path.resolve(__dirname, './plugins/MyPage.vue'),
  },
  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    tip: '提示',
    editLink: false,
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: '指南',
        children: [
          {
            text: '安装',
            link: '/guide/setup',
          },
          {
            text: '快速开始',
            link: '/guide/boot',
          },
        ],
      },
      {
        text: '高级组件',
        children: [
          { text: 'Form 表单', link: '/comp/form' },
          { text: 'Table 表格', link: '/comp/table' },
        ],
      },
      {
        text: '基础组件',
        children: [
          { text: 'Card 卡片', link: '/comp/card' },
          { text: 'Checkbox 多选框', link: '/comp/checkbox' },
          { text: 'Date Picker 日期选择器', link: '/comp/date-picker' },
          { text: 'Dialog 对话框', link: '/comp/dialog' },
          { text: 'Input 输入框', link: '/comp/input' },
          // {
          //   text: 'Input Number Range 数字范围',
          //   link: '/comp/input-number-range',
          // },
          { text: 'Radio 单选框', link: '/comp/radio' },
          { text: 'Select 选择器', link: '/comp/select' },
          { text: 'Time Picker', link: '/comp/time-picker' },
        ],
      },
    ],
    // repository
    repo: 'https://github.com/wishzhang/wish-cvue',
  }),
})