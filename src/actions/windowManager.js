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

export const focusWindow = (windowID) => {
  return {
    reducer: 'WM',
    type: 'FOCUS',
    windowID
  }
}

export const moveWindow = (windowID, x, y) => {
  return {
    reducer: 'WM',
    type: 'MOVE',
    windowID,
    x,
    y
  }
}

export const resizeWindow = (windowID, x, y) => {
  return {
    reducer: 'WM',
    type: 'RESIZE',
    windowID,
    x,
    y
  }
}

export const showWindow = (windowID) => {
  return {
    reducer: 'WM',
    type: 'SHOW',
    windowID
  }
}

export const hideWindow = (windowID) => {
  return {
    reducer: 'WM',
    type: 'HIDE',
    windowID
  }
}
