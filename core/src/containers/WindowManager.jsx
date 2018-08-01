import { connect } from 'react-redux'
import WindowManager from '../components/Window/WindowManager.jsx'

import { createWindow, discardWindow, focusWindow, moveWindow, resizeWindow, showWindow, hideWindow } from '../actions/windowManager'

const mapStateToProps = state => {
  return {
    windows: state.windowManager.windows,
    currentFocus: state.windowManager.currentFocus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createWindow: appPath => dispatch(createWindow(appPath)),
    discardWindow: windowID => dispatch(discardWindow(windowID)),
    focusWindow: windowID => dispatch(focusWindow(windowID)),
    moveWindow: (windowID, x, y) => dispatch(moveWindow(windowID, x, y)),
    resizeWindow: (windowID, x, y) => dispatch(resizeWindow(windowID, x, y)),
    showWindow: windowID => dispatch(showWindow(windowID)),
    hideWindow: windowID => dispatch(hideWindow(windowID))
  }
}

const WMConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(WindowManager)

export default WMConnect
