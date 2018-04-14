import React, { Component } from 'react'
import WindowManager from '../../containers/WindowManager.jsx'

export default class Desktop extends Component {
  render () {
    console.log('render', this.props)
    return (
      <div className='desktop'>
        <button onClick={() => this.props.createWindow('/terminal/')}>Open Terminal</button>
        <WindowManager windows={this.props.windows} discardWindow={this.props.discardWindow} />
      </div>
    )
  }
}
