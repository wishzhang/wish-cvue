import path from 'path'
import { replaceFileContent } from './utils/replace'
import { buildOutput } from './utils/paths'

export async function typesPostProcess() {
  let option = {
    dir: path.resolve(buildOutput, 'types'),
    contentRegexp: '@wele/',
    contentTarget: '@wele/cvue/es/packages/',
  }
  await replaceFileContent(option)
}
