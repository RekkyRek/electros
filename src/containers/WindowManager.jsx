import { connect } from 'react-redux'
import WindowManager from '../components/Window/WindowManager.jsx'

import { createWindow, discardWindow, focusWindow } from '../actions/windowManager.js'

const mapStateToProps = state => {
  console.log('mstp', state)
  return {
    windows: state.windowManager.windows,
    currentFocus: state.windowManager.currentFocus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createWindow: appPath => dispatch(createWindow(appPath)),
    discardWindow: windowID => dispatch(discardWindow(windowID)),
    focusWindow: windowID => dispatch(focusWindow(windowID))
  }
}

const WMConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(WindowManager)

export default WMConnect
