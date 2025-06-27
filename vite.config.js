import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {// 别名配置，简化模块导入路径
      '@': path.resolve(__dirname, './src')
    }
  },
  css:{
    preprocessorOptions: {// 配置预处理器选项，例如启用JavaScript在Less文件中
      scss:{ // 配置Sass预处理器选项
        additionalData: `@use "@/styles/variables" as *;`, // 导入全局变量文件
      }
    },
    postcss: { // 配置PostCSS插件
      plugins: [
        autoprefixer(),// 自动添加浏览器前缀
      ]
    }
  }
})
