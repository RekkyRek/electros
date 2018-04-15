import React, { Component } from 'react'

import './style/window.sass'

class App {
  constructor () {
    this.component = AppComponent
    this.title = 'Terminal'
  }
  init () {
    console.log('hi from terminal')
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

module.exports = App
