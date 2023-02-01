// 通过ts-morph的推导，类似于tsc来生成ts类型，并且ts-morph更具有可扩展性。
// 前置条件是：vue文件需要通过@vue/compiler-sfc编译得到js文件内容，然后再推导
// 上面可以完成对一个vue单文件的ts类型生成

// 然后还有一个问题要解决的是：打包后的文件结构不同导致需要处理两个问题：
// 1、目标文件结构和类型文件夹结构的差异
// 2、由于采用的是pnpm包管理，里面用的是workspace包名,需要替换
/**
 * 详细：
 * 目标文件结构是
 * dist/
 *  cvue/
 *    es/
 *      components/
 *        d.ts
 *      ...d.ts
 *      index.d.ts
 *      index.js
 *
 *  有一点这里需要注意的是：IDE对类型的支持。编译器主要通过两种途径识别：
 *  1、根据packages.json找到类型声明文件
 *  2、自动全局查找.d.ts文件来匹配对应的模块、方法、变量。
 *  TypeScript 也可以不用IDE支持，因为它有另外的 tsc 工具。
 *
 *  目前的方案，做第二种。这会有些棘手。
 *  ----------------------------------------------------------
 *  这个方案还没实现打包过程呢。
 *  1、打包的思路是将cvue包下的文件作为顶层入口，其他包放在相对路径上（其实模块名已设计好）
 *  总的打包出分为两种模块commonjs和esmodule,对应两个文件夹lib和es。编译后的每个js文件
 *  对应有一个类型文件。
 *  2、css的导入也有类型（可能是为了导入单个组件，暂且也不实现）
 *  3、生成类型文件的实现
 *  4、拷贝类型文件的实现
 *  ------------------------------------------------------------
 *  第一步验证了应该行，现在还没有类型提示连@wele/cvue都报红线
 *  类型已生成，但是类型检查没有做（会导致某些类型文件没有生成）
 *  -----------------------------------------------------------
 */
import path from 'path'
import fs from 'fs'
import { Project, SourceFile } from 'ts-morph'
import glob from 'fast-glob'
import { buildOutput, pkgRoot, projRoot } from './utils/paths'
import * as vueCompiler from '@vue/compiler-sfc'
import { excludeFiles } from './utils/pkg'
import { typesPostProcess } from './types-post-process'

export const generateTypesDefinitions = async () => {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      skipLibCheck: true,
      baseUrl: projRoot,
      // 为true,生成的类型不完整，目前不知为何
      preserveSymlinks: false,
      outDir: path.resolve(buildOutput, 'types'),
    },
    tsConfigFilePath: path.resolve(projRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
  })

  const sourceFiles: SourceFile[] = await addSourceFiles(project)

  project.emitToMemory()

  await saveFiles(sourceFiles)

  await typesPostProcess()
}

async function saveFiles(sourceFiles: SourceFile[]) {
  for (const sourceFile of sourceFiles) {
    const emitOutput = sourceFile.getEmitOutput()
    const outputFiles = emitOutput.getOutputFiles()
    for (const outputFile of outputFiles) {
      const filepath = outputFile.getFilePath()
      console.log('filepath:' + filepath)
      await fs.promises.mkdir(path.dirname(filepath), { recursive: true })
      await fs.promises.writeFile(filepath, outputFile.getText(), 'utf8')
      console.log(`Emitted ${filepath}`)
    }
  }
}

async function addSourceFiles(project: Project) {
  const input = ['**/*.{js?(x),ts,vue}']
  const files = excludeFiles(
    await glob(input, {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )

  // const files2 = excludeFiles(await glob("**/*.{js?(x),ts,vue}", {
  //   cwd: cvueRoot,
  //   onlyFiles: true
  // }));

  const sourceFiles: SourceFile[] = []

  await Promise.all([
    ...files.map(async (file) => {
      const content = await fs.promises.readFile(file, 'utf8')
      if (file.endsWith('.ts')) {
        const sourceFile = project.createSourceFile(path.relative(process.cwd(), file), content, {
          overwrite: true,
        })
        sourceFiles.push(sourceFile)
        return
      }
      const sfc = vueCompiler.parse(content)
      const { script, scriptSetup } = sfc.descriptor
      if (script || scriptSetup) {
        let content = ''
        let isTS = false
        if (script && script.content) {
          content += script.content
          if (script.lang === 'ts') isTS = true
        }
        if (scriptSetup) {
          const compiled = vueCompiler.compileScript(sfc.descriptor, {
            id: 'xxx',
          })
          content += compiled.content
          if (scriptSetup.lang === 'ts') isTS = true
        }
        const p = path.relative(process.cwd(), file)
        console.log('createSourceFile:')
        console.log(p)
        const sourceFile = project.createSourceFile(p + (isTS ? '.ts' : '.js'), content)
        if (file.indexOf('Table.vue') !== -1) {
          console.log(file)
          console.log(content)
        }
        sourceFiles.push(sourceFile)
      }
    }),
    // ...files2.map(async (file) => {
    //   const content = await fs.promises.readFile(path.resolve(cvueRoot, file), "utf-8");
    //   sourceFiles.push(
    //     project.createSourceFile(path.resolve(pkgRoot, file), content)
    //   );
    // })
  ])

  return sourceFiles
}

// todo: type check
