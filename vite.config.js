import { defineConfig } from 'vite'

export default defineConfig({
  base: '/yzmeuble.github.io/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
