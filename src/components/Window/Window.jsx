import React, { Component } from 'react'

export default class Window extends Component {
  constructor (props) {
    super(props)

    const App = require(`../../apps${this.props.appPath}`)

    this.state = {
      app: new App()
    }
  }
  render () {
    const {x, y, height, width, windowID, isFocused} = this.props
    console.log(this.state.app)
    return (
      <div
        className='window'
        style={{left: x, top: y, height, width, zIndex: isFocused ? 1 : 0}}
        onClick={() => this.props.focusWindow(windowID)}
      >
        <div className='windowDecorations'>
          <p className='windowTitle'>{this.state.app.title ? this.state.app.title : windowID}</p>
          <button onClick={() => this.props.discardWindow(windowID)}>x</button>
        </div>
        {this.state.app ? <this.state.app.component /> : <p>loading content</p>}
      </div>
    )
  }
}
