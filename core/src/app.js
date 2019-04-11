const electron = require('electron')

const {
  app, BrowserWindow, shell
} = electron

const os = require('os')
const path = require('path')
const url = require('url')

const systemSpecs = {
  cpu_speed: os.cpus()[0].speed,
  mem_available: os.freemem(),
  high_spec: false
}

// 2 684 354 560 == 2.5 GiB
if (systemSpecs.cpu_speed > 2800 && systemSpecs.mem_available > 2684354560) {
  systemSpecs.high_spec = true
}

exports.systemSpecs = systemSpecs

const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

console.time('startup')

const handleRedirect = (e, link) => {
  if (url !== mainWindow.webContents.getURL()) {
    e.preventDefault()
    shell.openExternal(link)
  }
}

/** This function will create the mainWindow */
function createWindow () {
  // Send usage data to firebase
  if (process.env.NODE_ENV !== 'development') {
    let plat = 'Unknown'

    console.log(process.platform)

    if (/^win/.test(process.platform)) { plat = 'Windows' }
    if (/^dar/.test(process.platform)) { plat = 'macOS' }
    if (/^lin/.test(process.platform)) { plat = 'Linux' }

    console.log(`Platform is ${plat}`)
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    minHeight: 600,
    minWidth: 590,
    show: false,
    webPreferences: {
      experimentalFeatures: true
    }
  })

  mainWindow.setMenu(null)

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(url.format({
      pathname: 'localhost:3000',
      protocol: 'http:',
      slashes: true
    }))

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    /* eslint-disable no-console */
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err))

    installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err))
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  // just show the window if all content has been loaded
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()

    const electronLocalshortcut = require('electron-localshortcut')
    electronLocalshortcut.register(mainWindow, 'F12', () => {
      mainWindow.webContents.openDevTools()
    })
    electronLocalshortcut.register(mainWindow, 'F5', () => {
      mainWindow.webContents.reload()
    })

    // measure startup time
    console.timeEnd('startup'); //eslint-disable-line
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.webContents.on('new-window', handleRedirect)

  mainWindow.webContents.on('will-navigate', (e, link) => {

  })
}

const shouldQuit = app.makeSingleInstance(() => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  }
})

if (shouldQuit) {
  app.quit()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.setAppUserModelId('hampus.lundqvist.sprk')

if (process.platform === 'darwin') {
  app.on('before-quit', () => {

  })
}

app.on('ready', () => {

})
