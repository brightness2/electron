import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:process.env.ELECTRON=="true" ? './' : "./",//打包按相对路径加载资源
  build:{
    outDir:'dist',//指定打包输出的文件夹名称,注意要与package.json 的build.files一致
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src/renderer/'),//资源路径别名
      '@src':path.resolve(__dirname,'./src/'),
    }
  }
})
