import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({

  // server: {
  //   host: 'localhost',
  //   // 代理
  //   proxy: {
  //     // 改为你的图片存储 url 前缀
  //     '/yun_picture': {
  //       // 改为你的对象存储域名
  //       target: 'https://hang-1355878884.cos.ap-shanghai.myqcloud.com',
  //       changeOrigin: true,
  //     }
  //   },
  // },


  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
