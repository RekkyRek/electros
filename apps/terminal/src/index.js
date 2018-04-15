import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style/window.sass'

export default class App {
  constructor () {
    this.component = AppComponent
    this.title = 'Terminal'
    this.init = this.init.bind(this)
    this.mount = this.mount.bind(this)
  }
  init () {
    console.log('hi from terminal')
  }

  mount (mountElement) {
    ReactDOM.render(<this.component />, mountElement)
  }
}

class AppComponent extends Component {
  render () {
    return (
      <div className='terminalWindow'>
        <input type='text' placeholder='$' />
      </div>
    )
  }
}
