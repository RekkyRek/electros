import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style/window.sass'

export default class App {
  constructor () {
    this.component = AppComponent
    this.title = 'Template'
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
      <div className='templateWindow'>
        <p>hi</p>
      </div>
    )
  }
}
