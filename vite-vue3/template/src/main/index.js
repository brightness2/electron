const {app,BrowserWindow, ipcMain,Menu } = require('electron');
const { default: WinState } = require('electron-win-state');
const path = require('path')
//判断是否开发环境
const isDev = process.env.IS_DEV == "true" ? true : false;
//是否优雅地展示窗口，就是等渲染进程准备好后再展示窗口，避免空白期
const  grace_show = false;

const isMac = process.platform === 'darwin';


//屏蔽安全策略告警显示
// if(isDev){
//     process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
// }
/**
 * 创建窗口
 */
const createWindow = ()=>{
    const winState = new WinState({
        defaultWidth:900,
        defaultHeight:800,
    })
    const win = new BrowserWindow({
        ...winState.winOptions,
        webPreferences:{
            preload:path.join(__dirname,'preload.js'),
        },
        show:!grace_show,
    })
    ipcMain.handle('ping',()=>'pong')
    if(isDev){
        ipcMain.handle('app_name',()=>{
            return app.name
        })
    }

    //加载渲染资源
    win.loadURL(
        isDev?
        `http://localhost:5173`
        :`file://${path.join(__dirname, '../../dist/index.html')}`
    )
    //开发环境下，开启开发工具
    if(isDev){
        win.webContents.openDevTools()
    } 
    if (grace_show) {
        win.once('ready-to-show',()=>{
            win.show()
        })
    }
    //记录窗口最后的大小位置状态
    winState.manage(win)
}
/**
 * 创建菜单
 */
const createMenu = ()=>{
    const template = [
        {
            label:'文件',
            submenu: [
                isMac ? { role:'close',label:'退出' } : { role:'quit',label:'退出' }
            ]
        },
    ]
    
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}
//应用准备完成时，创建窗口
app.whenReady().then(()=>{
    createMenu()
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
//所有窗口关闭时，退出整个应用
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})