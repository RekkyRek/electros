import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style/window.sass'

import Tabs from './tabs.jsx'

export default class App {
  constructor () {
    this.component = AppComponent
    this.title = 'Browser'
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
      tabs: []
    }
  }

  newTab () {
    this.setState({ tabs: [...this.state.tabs, {url: 'https://start.duckduckgo.com/', title: 'DuckDuckGo'}] })
    this.refs.tabs.chromeTabs.addTab({title: 'https://start.duckduckgo.com/'})
  }

  render () {
    return (
      <div className='browserWindow'>
        <Tabs ref='tabs' newTab={this.newTab.bind(this)} />
      </div>
    )
  }
}
