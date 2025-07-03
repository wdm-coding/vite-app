// 自动生成eslint 配置文件
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',// 推荐规则集，包含了基础的ESLint规则。
  ],
  parserOptions: { // 解析器选项，用于指定如何解析代码。例如，可以设置ECMAScript版本、是否允许JSX等。
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['dist'],
  plugins: [],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}