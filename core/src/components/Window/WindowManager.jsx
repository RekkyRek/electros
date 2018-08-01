import React, { Component } from 'react'

import Window from './Window.jsx'

export default class WindowManager extends Component {
  render () {
    return (
      <div className='windowManager'>
        {Object.keys(this.props.windows).map(windowID => {
          return <Window
            key={windowID}
            createWindow={this.props.createWindow}
            focusWindow={this.props.focusWindow}
            moveWindow={this.props.moveWindow}
            showWindow={this.props.showWindow}
            hideWindow={this.props.hideWindow}
            resizeWindow={this.props.resizeWindow}
            discardWindow={this.props.discardWindow}
            window={{...this.props.windows[windowID], isFocused: this.props.currentFocus === windowID}}
          />
        })}
      </div>
    )
  }
}
