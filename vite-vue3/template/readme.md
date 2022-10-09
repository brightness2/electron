# 开发
## 使用的命令
```
npm create vite

npm install

npm add -D concurrently cross-env electron electron-builder wait-on

npm install nodemon -D

npm install  electron-win-state -S

npm install pinia -S

npm install vue-router -S

npm run dev
npm run start
```

## package.json 配置
```
{
  "name": "vue3-electron",
  "private": true,
  "version": "0.0.0",
 // "type": "module",//注意：不能加此配置，否则会报错，无法导入electron包
  "main": "main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "electron": "wait-on tcp:3000 && cross-env IS_DEV=true electron .",
    "electron:dev": "concurrently -k \"cross-env BROWSER=none npm run dev\" \"npm run electron\"",
    "electron:build.win": "npm run build && electron-builder --win --dir",
    "electron:build.linux": "npm run build && electron-builder --linux appImage",
    "electron:build.test": "npm run build && electron-builder --dir",
    "electron:build.exe": "npm run build && electron-builder --win"
  },
  "dependencies": {
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^3.1.0",
    "concurrently": "^7.4.0",
    "cross-env": "^7.0.3",
    "electron": "^21.0.0",
    "electron-builder": "^23.3.3",
    "vite": "^3.1.0",
    "wait-on": "^6.0.1"
  },
  "build": {
    "appId": "com.my-website.my-app",
    "productName": "MyApp",
    "copyright": "Copyright © 2019 ${author}",
    "mac": {
      "category": "public.app-category.utilities"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    },
    "files": [
      "dist/**/*",//注意，dist文件夹与vue打包后的文件夹名称一致，必须是dist，否则报资源路径错误
      "electron/**/*"
    ],
    "directories": {
      "buildResources": "assets",
      "output": "dist_electron"
    }
  }
}

```

## 


