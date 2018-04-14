import { connect } from 'react-redux'
import Desktop from '../components/Desktop/Desktop.jsx'

import { createWindow } from '../actions/windowManager.js'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    createWindow: appPath => dispatch(createWindow(appPath))
  }
}

const DesktopConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Desktop)

export default DesktopConnect
