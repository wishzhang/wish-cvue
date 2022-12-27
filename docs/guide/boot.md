# 快速开始

本节将介绍如何在项目中使用 Cvue。

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```tsx
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Cvue from '@wele/cvue'
import '@wele/cvue/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(Cvue)
app.mount('#app')
```

