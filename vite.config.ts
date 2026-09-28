import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {

      scss: {
        quietDeps: true,
        loadPaths: [path.resolve(import.meta.dirname, 'src/styles')],
        additionalData: `@use "index" as *;`
      }
    }
  }
})
