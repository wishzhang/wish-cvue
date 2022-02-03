import { mkdir } from 'fs/promises'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { runTask, withTaskName } from './utils/gulp'
import { cvueOutput } from './utils/paths'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(cvueOutput, { recursive: true })),

  parallel(
    runTask('buildFullBundle')
  )
)

export * from './full-bundle'