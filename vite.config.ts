import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/everything-app/', // GitHub Pages repo name
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
})
