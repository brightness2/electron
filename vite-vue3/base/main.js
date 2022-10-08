const {app,BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const {exec,execFile} = require('child_process')
const shell = require('shelljs')
const createWindow = ()=>{
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            preload:path.resolve(__dirname,'preload.js'),
        }
    })
    ipcMain.handle('ping',()=>'pong')
    win.loadFile('index.html')
    win.webContents.openDevTools()

    // exec('bash '+path.resolve(__dirname,'test.sh'),(error,stdout,stderr)=>{
    //     console.log(error);
    //     console.log('data',stdout);
    //     console.log(stderr);
    // })
    let command = `
    echo "come in"
    echo "running"
    echo "end"
    `;
    shell.exec(command,(error,stdout,stderr)=>{
        console.log('error',error);
        console.log('data',stdout);
        console.log('stderr',stderr);
    })
    
}

app.whenReady().then(()=>{
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})