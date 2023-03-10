import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import TypeImports from '@rah-emil/vite-plugin-vue-type-imports'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [vue(), TypeImports()],
  envPrefix: 'APP',
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
})
