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
  "main": "src/main/index.js",
  "author": "Brightness",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "nodemon --exec npm run electron --watch ./ --ext .js,.html,.css,.vue",
    "electron": "wait-on tcp:5173 && cross-env IS_DEV=true electron .",
    "electron:dev": "concurrently -k \"cross-env BROWSER=none npm run dev\" \"npm run electron\"",
    "electron:build.win": "npm run build && electron-builder --win --dir",
    "electron:build.linux": "npm run build && electron-builder --linux appImage",
    "electron:build.test": "npm run build && electron-builder --dir",
    "electron:build.exe": "npm run build && electron-builder --win"
  },
  "dependencies": {
    "electron-win-state": "^1.1.22",
    "pinia": "^2.0.22",
    "vue": "^3.2.37",
    "vue-router": "^4.1.5"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^3.1.0",
    "concurrently": "^7.4.0",
    "cross-env": "^7.0.3",
    "electron": "^21.0.0",
    "electron-builder": "^23.3.3",
    "nodemon": "^2.0.20",
    "vite": "^3.1.0",
    "wait-on": "^6.0.1"
  },
  "build": {
    "appId": "com.brightness.my-app",
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
      "dist/**/*",
      "src/main/**/*"
    ],
    "directories": {
      "buildResources": "assets",
      "output": "dist_electron"
    }
  }
}

```

## 


