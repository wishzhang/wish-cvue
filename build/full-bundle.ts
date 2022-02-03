import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import { parallel } from 'gulp'
import { version } from '../packages/cvue/version'
import { cvueRoot, cvueOutput } from './utils/paths'
import {
  formatBundleFilename,
  generateExternal,
  writeBundles,
} from './utils/rollup'
import { withTaskName } from './utils/gulp'
import { EP_BRAND_NAME } from './utils/constants'
import { target } from './build-info'

const banner = `/*! ${EP_BRAND_NAME} v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const bundle = await rollup({
    input: path.resolve(cvueRoot, 'index.ts'),
    plugins: [
      vue({
        isProduction: true
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        minify,
        sourceMap: minify,
        target,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),

        // options
        preventAssignment: true,
      }),
      filesize(),
    ],
    external: await generateExternal({ full: true }),
  })
  
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(
        cvueOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'js')
      ),
      exports: 'named',
      name: 'CVue',
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
      banner,
    },
    {
      format: 'esm',
      file: path.resolve(
        cvueOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'mjs')
      ),
      sourcemap: minify,
      banner,
    },
  ])
}

export const buildFull = (minify: boolean) => async () =>{
    return Promise.all([buildFullEntry(minify)])
}

export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false))
)
