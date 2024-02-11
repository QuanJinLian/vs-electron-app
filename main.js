const { app, BrowserWindow, ipcMain, Tray , nativeImage} = require('electron');
const path = require('node:path');



const createWindow = () => {
  const _path = path.join(__dirname, '32.png');
  const appIcon = new Tray(_path)
  const img =  nativeImage.createFromPath(_path, {width: 16, height: 16})

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: img,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');



  // 개발툴 열어 놓기
  win.webContents.openDevTools();
}


app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})