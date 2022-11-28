import path from 'path'
import { mkdir, copyFile } from 'fs/promises'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { runTask, withTaskName } from './utils/gulp'
import { cvueOutput, projRoot, cvuePackage } from './utils/paths'

export const copyFullStyle = async () => {
  await mkdir(path.resolve(cvueOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(cvueOutput, 'theme-chalk/index.css'),
    path.resolve(cvueOutput, 'dist/index.css')
  )
}

export const copyFiles = () =>
  Promise.all([
    copyFile(cvuePackage, path.join(cvueOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(cvueOutput, 'README.md')
    ),
  ])

// export const copyTypesDefinitions: TaskFunction = (done) => {
//   const src = path.resolve(buildOutput, 'types', 'packages')
//   const copyTypes = (module: Module) =>
//     withTaskName(`copyTypes:${module}`, () =>
//       copy(src, buildConfig[module].output.path, { recursive: true })
//     )
//
//   return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
// }

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(cvueOutput, { recursive: true })),

  parallel(
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  ),
  parallel(copyFiles)
  // parallel(copyTypesDefinitions)
)

export * from './full-bundle'
export * from './types-definitions'
