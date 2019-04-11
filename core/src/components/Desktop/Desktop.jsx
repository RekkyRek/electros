import React, { Component } from 'react'
import WindowManager from '../../containers/WindowManager.jsx'

export default class Desktop extends Component {
  constructor (props) {
    super(props)
    let state = {}

    if (window.sprkConfig.launcher) {
      let App

      try {
        App = __non_webpack_require__(`${window.sprkApps}${window.sprkConfig.launcher}bundle/index.js`).default // eslint-disable-line
      } catch (e) {
        App = { type: 'error', title: 'Critical Error', message: e, buttons: [{ name: 'Close', action: this.closeWindow.bind(this) }] }
      }

      if (App.mount) { this.state.app.mount(this.refs.appMount, this.props) }
      state.app = App.type === 'error' ? App : new App()
    }

    this.state = state
  }
  componentDidMount () {
    console.log(window.sprkConfig)
    if (this.state.app.mount) { this.state.app.mount(this.refs.launcherMount, { windows: this.props.windows, createWindow: this.props.createWindow }) }
  }
  render () {
    console.log('render', this.props)
    return (
      <div className='desktop'>
        <WindowManager windows={this.props.windows} />
        { this.state.app.type !== 'error' ? <div ref='launcherMount' /> : '' }
      </div>
    )
  }
}
