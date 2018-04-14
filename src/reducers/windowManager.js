const initState = require('../consts/windowManagerState.js')

const windowManager = (state = initState, action) => {
  console.log(action)
  if (action.reducer !== 'WM') { return state }
  switch (action.type) {
    case 'CREATE':
      return { windows: createWindow(state.windows, action) }
    case 'DISCARD':
      return { windows: discardWindow(state.windows, action) }
    default:
      return state
  }
}

const createWindow = (windows, action) => {
  const id = Math.random().toString(36).substr(2, 5)
  const newWindow = {
    windowID: id,
    x: 32 + (28 * Object.keys(windows).length),
    y: 32 + (28 * Object.keys(windows).length),
    height: 200,
    width: 300,
    appPath: action.appPath
  }

  windows[id] = newWindow
  return windows
}

const discardWindow = (windows, action) => {
  delete windows[action.windowID]
  console.log('deleteWindow', windows)
  return windows
}

export default windowManager
