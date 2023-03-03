import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import TypeImports from '@rah-emil/vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), TypeImports()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/variables.scss";'
      }
    }
  }
})
