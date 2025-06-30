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
  }
})
