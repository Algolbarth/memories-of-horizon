import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'build',
    assetsDir: 'public',
  },
  optimizeDeps: {
    include: ['path', 'url', 'fs'],  // si nécessaire pour gérer les chemins
  },
  assetsInclude: ['**/*.cur'],
})
