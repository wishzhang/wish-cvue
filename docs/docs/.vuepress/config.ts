import { defineUserConfig, defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'CVue',
  description: '这是我的第一个 VuePress 站点',
  plugins: [docsearchPlugin({} as any)],
  base: '/wish-cvue/',
  theme: defaultTheme({
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
            text: '快速启动',
            link: '/guide/boot',
          },
        ],
      },
      {
        text: '组件',
        children: [
          { text: 'Card 卡片', link: '/comp/card' },
          { text: 'Checkbox 多选框', link: '/comp/checkbox' },
          { text: 'Date Picker 日期选择器', link: '/comp/date-picker' },
          { text: 'Dialog 对话框', link: '/comp/dialog' },
          { text: 'Form 表单', link: '/comp/form' },
          { text: 'Input 输入框', link: '/comp/input' },
          {
            text: 'Input Number Range 数字范围',
            link: '/comp/input-number-range',
          },
          { text: 'Radio 单选框', link: '/comp/radio' },
          { text: 'Select 选择器', link: '/comp/select' },
          { text: 'Table 表格', link: '/comp/table' },
          { text: 'Time Picker', link: '/comp/time-picker' },
          { text: 'Upload', link: '/comp/upload' },
        ],
      },
    ],
    // repository
    repo: 'https://github.com/wishzhang/wish-cvue',
  }),
})
