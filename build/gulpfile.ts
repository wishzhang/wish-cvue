import path from 'path'
import { mkdir, copyFile } from 'fs/promises'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { runTask, withTaskName } from './utils/gulp'
import { cvueOutput } from './utils/paths'

export const copyFullStyle = async () => {
  await mkdir(path.resolve(cvueOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(cvueOutput, 'theme-chalk/index.css'),
    path.resolve(cvueOutput, 'dist/index.css')
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(cvueOutput, { recursive: true })),

  parallel(
    runTask('buildFullBundle'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  )
)

export * from './full-bundle'