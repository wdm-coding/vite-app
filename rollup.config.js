console.log('环境',process.env)
const {mode,NODE_ENV} = process.env
import path from 'path'
import { fileURLToPath } from 'url'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint'
import image from '@rollup/plugin-image'
import strip from '@rollup/plugin-strip'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export default[
  {
    input:'./src/index.js', // 入口文件路径
    output:{ // 输出配置
      file:NODE_ENV ==='development' ? 'dist/dev.es.js' : 'dist/prod.umd.js', // 输出文件路径
      format: mode==='local' ? 'es' : 'umd', // 输出格式，可选值有amd,cjs,esm,iife,umd等
      plugins:[ // 输出插件配置
        terser() // 压缩代码，去除多余的空格和注释等
      ]
    },
    watch:{
      include:'src/**'
    },
    external:['react'], // 将react排除出去，不打包react库文件
    plugins:[ // 执行顺序是从左到右的
      resolve(), // 解析第三方模块路径，并将其转换为ES6模块
      commonjs(), // 将CommonJS模块转换为ES6模块，以便Rollup处理它们。
      babel({ // 使用Babel插件将ES6代码转换为兼容性更好的旧版JS代码。这对于老旧的浏览器或环境很有用。
        babelHelpers:'runtime', // 指定Babel的辅助函数生成方式，可选值有bundled,external,inline等
        exclude: 'node_modules/**' // 排除不需要转换的文件或目录路径
      }),
      json(), // 允许导入JSON文件作为模块。这对于配置文件和静态数据很有用。
      alias({ // 别名配置，用于简化模块路径的引用。例如，可以将src目录下的所有文件都简化为@开头。
        entries:[
          {find:'@',replacement:path.resolve(__dirname, 'src')}
        ]
      }),
      eslint({
        throwOnError:true, // 如果发现错误则抛出异常，否则只打印警告信息。默认为false。
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        exclude: ['src/assets/**']
      }), // 代码质量检查，帮助发现潜在的错误和不符合规范的写法。
      image(), // 处理图片文件，将其转换为Base64编码的字符串或单独的文件。这对于减少HTTP请求数量很有用。
      strip() // 移除代码中的console.log等调试语句，以便生产环境使用。这对于减少打包体积很有用。
    ]
  }
]