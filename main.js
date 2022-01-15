const {app, BrowserWindow, globalShortcut} = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    //frame:false
  })

  mainWindow.loadFile('index.html')
  mainWindow.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
    globalShortcut.register('Alt+Q', () => {
        console.log("close app");
        if (process.platform !== 'darwin') app.quit()
    })
})