export const createWindow = (appPath) => {
  return {
    reducer: 'WM',
    type: 'CREATE',
    appPath
  }
}

export const discardWindow = (windowID) => {
  return {
    reducer: 'WM',
    type: 'DISCARD',
    windowID
  }
}
