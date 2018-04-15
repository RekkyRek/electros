import React, { Component } from 'react'

export default class Window extends Component {
  constructor (props) {
    super(props)

    const App = require(`../../apps${this.props.window.appPath}`)

    this.state = {
      app: new App()
    }

    this.moveMouseUp = this.moveMouseUp.bind(this)
    this.moveMouseDown = this.moveMouseDown.bind(this)
    this.move = this.move.bind(this)

    this.resizeMouseUp = this.resizeMouseUp.bind(this)
    this.resizeMouseDown = this.resizeMouseDown.bind(this)
    this.resize = this.resize.bind(this)
  }

  moveMouseUp () { window.removeEventListener('mousemove', this.move, true) }
  moveMouseDown () { window.addEventListener('mousemove', this.move, true) }
  move (e) { this.props.moveWindow(this.props.window.windowID, e.movementX, e.movementY) }

  resizeMouseUp () { window.removeEventListener('mousemove', this.resize, true) }
  resizeMouseDown () { window.addEventListener('mousemove', this.resize, true) }
  resize (e) { this.props.resizeWindow(this.props.window.windowID, e.movementX, e.movementY) }

  componentDidMount () {
    this.refs.decorations.addEventListener('mousedown', this.moveMouseDown, false)
    this.refs.resize.addEventListener('mousedown', this.resizeMouseDown, false)
    window.addEventListener('mouseup', this.moveMouseUp, false)
    window.addEventListener('mouseup', this.resizeMouseUp, false)
  }

  componentWillUnmount () {
    window.removeEventListener('mouseup', this.moveMouseUp, false)
    window.removeEventListener('mouseup', this.resizeMouseUp, false)
  }

  compareObjects (o1, o2) {
    for (let p in o1) {
      if (o1.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false
        }
      }
    }
    for (let p in o2) {
      if (o2.hasOwnProperty(p)) {
        if (o1[p] !== o2[p]) {
          return false
        }
      }
    }
    return true
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !this.compareObjects(nextProps.window, this.props.window)
  }

  render () {
    const {x, y, height, width, windowID, isFocused} = this.props.window
    return (
      <div
        className='window'
        style={{zIndex: isFocused ? 1 : 0, left: x, top: y, height, width}}
        onClick={() => this.props.focusWindow(windowID)}
      >
        <div className='windowDecorations' ref='decorations'>
          <p className='windowTitle'>{this.state.app.title ? this.state.app.title : windowID}</p>
          <button onClick={() => this.props.discardWindow(windowID)}>x</button>
        </div>
        {this.state.app ? <this.state.app.component /> : <p>loading content</p>}
        <div className='windowResize' ref='resize' />
      </div>
    )
  }
}
