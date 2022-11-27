// module.exports = {
//   title: 'Hello VuePress',
//   description: 'Just playing around',
//   themeConfig: {
//     sidebarDepth: 2,
//     sidebar: [
//       {
//         title: 'Basic 基础组件',   // 必要的
//         collapsable: false, // 可选的, 默认值是 true,
//         children: [
//           ['/basic/button', 'Button 按钮']
//         ]
//       }
//     ]
//   }
// }

import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'Basic 基础组件',
        children: [
          // SidebarItem
          {
            text: 'Button 按钮',
            link: '/basic/button',
            children: [],
          },
        ],
      },
    ],
  }),
})
