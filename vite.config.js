import { defineConfig } from 'vite'

// Project page on GitHub Pages: served from https://foundersoak.github.io/Home-Services/
// so the base path must match the repo name or built asset URLs 404.
export default defineConfig({
  base: '/Home-Services/',
  build: {
    outDir: 'dist',
    target: 'es2020',
    sourcemap: false
  }
})
