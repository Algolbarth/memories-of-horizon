import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

export default defineConfig({
  plugins: [svelte()],
  define: {
    PKG: pkg
  },
  build: {
    outDir: 'build',
    assetsDir: 'public',
  },
  optimizeDeps: {
    include: ['path', 'url', 'fs'],  // si nécessaire pour gérer les chemins
  },
  assetsInclude: ['**/*.cur'],
});