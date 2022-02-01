import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme-chalk')
export const hookRoot = resolve(pkgRoot, 'hooks')
export const cvueRoot = resolve(pkgRoot, 'cvue')

/** dist */
export const buildOutput = resolve(projRoot, 'dist')
/** dist/element-plus */
export const cvueOutput = resolve(buildOutput, 'cvue')
