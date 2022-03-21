import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { cvueRoot, pkgRoot } from '../build/utils/paths'
import { resolve } from 'path'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^cvue$/,
        replacement: path.resolve(cvueRoot, 'index.ts'),
      },
      {
        find: /^cvue\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  },
  plugins: [
    vue()
  ]
})