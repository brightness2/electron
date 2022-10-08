/*
 * @Author: Brightness
 * @Date: 2021-02-19 10:14:46
 * @LastEditors: Brightness
 * @LastEditTime: 2021-02-19 10:31:17
 * @Description: file content
 */


 const {app,BrowserWindow,ipcMain} = require('electron');

 //封装appWindow
class appWindow extends BrowserWindow{
    constructor(fileLocation,config)
    {
        const baseConfig = {
            width:800,
            height:800,
            webPreferences:{ 
                nodeIntegration:true,//需要设置，不然使用不了node.js 的模块功能
                enableRemoteModule:true,//开启remote 模块，否则渲染进程无法使用remote模块
            },
        };

        let newConfig = {...baseConfig,...config};

        super(newConfig);
        this.loadFile(fileLocation);
        //解决窗口显示时闪烁问题，就是监听当窗口准备好了再显示
        this.once('ready-to-show',()=>{
            this.show();
        });
    }
}

let mainWindow = null ;  //声明要打开的主窗口
app.on('ready',()=>{

    //打开页面
    mainWindow = new appWindow('./index.html');   

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null;
    });

});

ipcMain.on('test',()=>{
    console.log('ok');
    
})