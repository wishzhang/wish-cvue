# 安装

## 环境支持

CVue 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [ResizeObserver](https://caniuse.com/resizeobserver) 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，CVue 也不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

### 版本

[![CVue version badge](https://img.shields.io/npm/v/@wishzhang/cvue.svg?style=flat-square)](https://www.npmjs.org/package/@wishzhang/cvue) 

CVue 目前还处于快速开发迭代中。

## 使用包管理器

**我们建议您使用包管理器安装 CVue（如 NPM、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)）**，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 或 [webpack](https://webpack.js.org/)。

```shell
# NPM
$ npm install @wishzhang/cvue --save

# Yarn
$ yarn add @wishzhang/cvue

# pnpm
$ pnpm install @wishzhang/cvue
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 CVue，然后就可以使用全局变量 `CVue` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://jsdelivr.com/) 举例。

### unpkg

```html
<head>
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <link rel="stylesheet" href="//unpkg.com/@wishzhang/cvue/dist/index.css" />
  <script src="//unpkg.com/vue@3"></script>
  <script src="//unpkg.com/element-plus"></script>
  <script src="//unpkg.com/@wishzhang/cvue"></script>
</head>
```

### jsDelivr

```html
<head>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"/>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@wishzhang/cvue/dist/index.css" />
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
  <script src="//cdn.jsdelivr.net/npm/@wishzhang/cvue"></script>
</head>
```
