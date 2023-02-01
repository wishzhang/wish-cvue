import glob from 'fast-glob'
import fs from 'fs/promises'

/**
 * 1、读取夹对应下的文件路径
 * 2、遍历文件 {
 *   读取文件内容
 *   根据规则替换文件内容
 *   将处理过的文件写回
 * }
 * @param option
 */

interface ReplaceOption {
  dir: string
  contentRegexp: string
  contentTarget: string
}

export async function replaceFileContent(option: ReplaceOption) {
  let filePaths = await glob(`**/*`, {
    cwd: option.dir,
    absolute: true,
    onlyFiles: true,
  })

  for (let filePath of filePaths) {
    try {
      let content = await fs.readFile(filePath, { encoding: 'utf8' })
      content = content.replaceAll(option.contentRegexp, option.contentTarget)
      await fs.writeFile(filePath, content)
    } catch (err) {
      console.log(err)
    }
  }
}
