import React, { Component } from 'react'
import shallowCompare from 'react-addons-shallow-compare' // ES6

export default class Window extends Component {
  constructor (props) {
    super(props)

    const App = require(`../../apps${this.props.window.appPath}`)

    this.state = {
      app: new App()
    }

    this.mouseUp = this.mouseUp.bind(this)
    this.mouseDown = this.mouseDown.bind(this)
    this.divMove = this.divMove.bind(this)
  }

  mouseUp () {
    window.removeEventListener('mousemove', this.divMove, true)
  }

  mouseDown () {
    window.addEventListener('mousemove', this.divMove, true)
  }

  divMove (e) {
    this.props.moveWindow(this.props.window.windowID, e.movementX, e.movementY)
  }

  componentDidMount () {
    this.refs.decorations.addEventListener('mousedown', this.mouseDown, false)
    window.addEventListener('mouseup', this.mouseUp, false)
  }

  componentWillUnmount () {
    window.removeEventListener('mouseup', this.mouseUp)
  }

  compareObjects (o1, o2) {
    console.log('=============' + this.props.window.windowID + '=============')
    for (var p in o1) {
      if (o1.hasOwnProperty(p)) {
        console.log(o1[p], o2[p], o1[p] !== o2[p])
        if (o1[p] !== o2[p]) {
          return false
        }
      }
    }
    for (var p in o2) {
      if (o2.hasOwnProperty(p)) {
        console.log(o1[p], o2[p], o1[p] !== o2[p])
        if (o1[p] !== o2[p]) {
          return false
        }
      }
    }
    return true
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.compareObjects(nextProps.window, this.props.window)
  }

  render () {
    const {x, y, height, width, windowID, isFocused} = this.props.window
    console.log(`${windowID} moved`)
    return (
      <div
        className='window'
        style={{left: x, top: y, height, width, zIndex: isFocused ? 1 : 0}}
        onClick={() => this.props.focusWindow(windowID)}
      >
        <div className='windowDecorations' ref='decorations'>
          <p className='windowTitle'>{this.state.app.title ? this.state.app.title : windowID}</p>
          <button onClick={() => this.props.discardWindow(windowID)}>x</button>
        </div>
        {this.state.app ? <this.state.app.component /> : <p>loading content</p>}
      </div>
    )
  }
}
