import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style/window.sass'

export default class App {
  constructor () {
    this.component = AppComponent
    this.title = 'Dock'
    this.init = this.init.bind(this)
    this.mount = this.mount.bind(this)
  }
  init () {

  }

  mount (mountElement, props = {}) {
    ReactDOM.render(<this.component {...props} />, mountElement)
  }
}

class AppComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='dockWindow'>
        <div className='dockContainer'>
          <DockItem createWindow={this.props.createWindow} item={{ name: 'terminal' }} />
          <DockItem createWindow={this.props.createWindow} item={{ name: 'browser' }} />
          <DockItem createWindow={this.props.createWindow} item={{ name: 'template' }} />
        </div>
      </div>
    )
  }
}

class DockItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageFailed: false
    }
  }
  render () {
    return (
      <button className='dockItem' onClick={() => this.props.createWindow(`/${this.props.item.name}/`)}>
        {!this.state.imageFailed && <img src={`http://127.0.0.1:1469/${this.props.item.name}/bundle/icon.png`} onError={() => this.setState({ imageFailed: true })} /> }
      </button>
    )
  }
}
