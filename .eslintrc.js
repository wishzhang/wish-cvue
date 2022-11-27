module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  /* 指定如何解析语法 */
  parser: '@typescript-eslint/parser',
  /* 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  /* 继承某些已有的规则 */
  extends: ['eslint:recommended'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-use-before-define': 'off',
    'prefer-const': 'off',
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
