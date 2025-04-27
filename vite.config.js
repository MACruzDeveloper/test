import { defineConfig } from 'vite'
import { resolve } from 'path'
import sass from 'sass'
import handlebars from 'vite-plugin-handlebars'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const pageData = {
  '/index.html': {
    titleHead: 'Avoris - home',
    title: 'Home',
    route: '',
  }
}

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context(pagePath) {
        return pageData[pagePath]
      },
    }),
    viteStaticCopy({
      watch: true,
      targets: []
    })
  ],
  base: './',
  root: 'src',
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
    cssMinify: true
  },
})