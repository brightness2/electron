const { contextBridge, ipcRenderer } = require('electron')
let options = {
    node:()=>process.versions.node,
    chrome:()=>process.versions.chrome,
    electron:()=>process.versions.electron,
    ping:()=>ipcRenderer.invoke('ping'),
}
if (process.env.IS_DEV) {
    options.app_name=()=>ipcRenderer.invoke('app_name')
}
contextBridge.exposeInMainWorld('versions',options)