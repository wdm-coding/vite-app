import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer';
export default defineConfig({
  plugins: [
    vue(), // vue插件
    vueJsx() // vue-jsx插件
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  },
  optimizeDeps: { // 优化依赖预构建配置
    // include: ['vue', 'vue-router'] // 指定预构建依赖，提升打包速度
    // exclude: ['vue-demi'] // 排除预构建依赖，提升打包速度
    // exclude: ['lodash-es'] // 排除预构建依赖，提升打包速度
  },
  server:{
    hmr: true, // 热更新模块替换功能，默认为true
  }
})
