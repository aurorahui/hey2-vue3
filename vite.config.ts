import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(),
    // CSS 分类插件
    {
      name: 'css-classify',
      generateBundle(_, bundle) {
        Object.keys(bundle).forEach((fileName) => {
          if (fileName.endsWith('.css')) {
            const newName = fileName.replace('assets/', 'assets/css/')
            bundle[fileName].fileName = newName
          }
        })
      }
    },
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    cssCodeSplit: true,
    // sourcemap: true,
    rollupOptions: {
      output: {
         // 入口 JS 文件配置
         entryFileNames: 'assets/js/[name]-[hash].js',
        
         // 非入口 chunk 文件
         chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
         // 资源文件（图片、字体等）
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').at(1)
          const isFont = ['ttf', 'woff', 'woff2'].includes(extType as string)
          const isImage = ['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(extType as string)

          if (isImage) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (isFont) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[ext]/[name]-[hash][extname]'
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 让每个插件都打包成独立的文件
            return id .toString() .split("node_modules/")[1] .split("/")[0] .toString(); 
          }
        }

      },
      
    },
    assetsDir: 'assets' 
  }
})
