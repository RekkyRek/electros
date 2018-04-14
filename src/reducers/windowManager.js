const initState = require('../consts/windowManagerState.js')

const windowManager = (state = initState, action) => {
  if (action.reducer !== 'WM') { return state }
  switch (action.type) {
    case 'CREATE':
      return { ...state, windows: createWindow({...state.windows}, action) }
    case 'DISCARD':
      return { ...state, windows: discardWindow({...state.windows}, action) }
    case 'FOCUS':
      return { ...state, currentFocus: action.windowID }
    case 'MOVE':
      return { ...state, windows: moveWindow({...state.windows}, action), currentFocus: action.windowID }
    default:
      return state
  }
}

const createWindow = (windows, action) => {
  const id = Math.random().toString(36).substr(2, 5)
  const newWindow = {
    windowID: id,
    x: 16 + (16 * Object.keys(windows).length),
    y: 16 + (16 * Object.keys(windows).length),
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

const moveWindow = (windows, action) => {
  let newWindow = {...windows[action.windowID]}
  newWindow.x += action.x
  newWindow.y += action.y
  windows[action.windowID] = newWindow
  return windows
}

export default windowManager
