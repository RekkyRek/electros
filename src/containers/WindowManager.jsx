import { connect } from 'react-redux'
import WindowManager from '../components/Window/WindowManager.jsx'

import { createWindow, discardWindow } from '../actions/windowManager.js'

const mapStateToProps = state => {
  console.log('mstp', state)
  return {
    windows: state.windowManager.windows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createWindow: appPath => dispatch(createWindow(appPath)),
    discardWindow: windowID => dispatch(discardWindow(windowID))
  }
}

const WMConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(WindowManager)

export default WMConnect
