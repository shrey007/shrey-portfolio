import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default defineConfig({
  plugins: [mdx(), react()],
  base: '/shrey-portfolio/', // GitHub Pages repository name
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
