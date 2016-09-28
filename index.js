const {app, BrowserWindow} = require('electron')
const fs = require('fs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600, titleBarStyle: 'hidden-inset'})

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Save file function.
/**function save () {
  //const {dialog} = require('electron')
  const html = require('./dom.js')
  html.main()
  /**dialog.showSaveDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}, (filename) => {
    fs.writeFile(filename, body)
  })
}

// Register a 'CommandOrControl+X' shortcut listener.
const {globalShortcut} = require('electron')

app.on('ready', () => {
  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+S', () => {
    // On press, do this
    save()
  })
})

// Unregister key command.
app.on('will-quit', () => { globalShortcut.unregisterAll() })**/
