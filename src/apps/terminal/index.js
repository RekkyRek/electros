import React, { Component } from 'react'

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
      <div>
        <p>Imagine this is a terminal</p>
      </div>
    )
  }
}

module.exports = App
