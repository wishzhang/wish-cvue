import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { cvueRoot, pkgRoot, projRoot } from '../build/utils/paths'
import { resolve } from 'path'
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  resolve: {
    extensions: ['.ts', 'tsx'],
    alias: [
      {
        find: /^@wele\/cvue$/,
        replacement: resolve(cvueRoot, 'index.ts'),
      },
      {
        find: /^@wele\/cvue\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
      {
        find: /^@root/,
        replacement: `${projRoot}`,
      },
    ],
  },
  plugins: [
    DefineOptions(),
    vue({
      reactivityTransform: true,
    }),
  ],
})
