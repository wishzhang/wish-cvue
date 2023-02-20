import { run } from './process'
import type { TaskFunction } from 'gulp'

interface WithTask {
  (name: string, fn: TaskFunction): TaskFunction & { displayName: string }
}

interface WithTask2 {
  (name: string): TaskFunction & { displayName: string }
}

export const withTaskName: WithTask = <T extends TaskFunction>(
  name: string,
  fn: T
) => Object.assign(fn, { displayName: name })

export const runTask: WithTask2 = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))
