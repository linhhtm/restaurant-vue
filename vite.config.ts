import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    svgLoader({
      defaultImport: 'component',
    }),
    checker({ vueTsc: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      images: path.resolve(__dirname, './src/assets/images'),
      pages: path.resolve(__dirname, './src/pages'),
      hooks: path.resolve(__dirname, './src/hooks'),
      stores: path.resolve(__dirname, './src/stores'),
      mockData: path.resolve(__dirname, './src/mockData'),
      appConstants: path.resolve(__dirname, './src/appConstants'),
      services: path.resolve(__dirname, './src/services'),
    },
  },
})
