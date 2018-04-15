import React, { Component } from 'react'

import Window from '../Window/Window.jsx'

export default class WindowManager extends Component {
  render () {
    return (
      <div className='windowManager'>
        {Object.keys(this.props.windows).map(windowID => {
          return <Window
            key={windowID}
            focusWindow={this.props.focusWindow}
            moveWindow={this.props.moveWindow}
            resizeWindow={this.props.resizeWindow}
            discardWindow={this.props.discardWindow}
            window={{...this.props.windows[windowID], isFocused: this.props.currentFocus === windowID}}
          />
        })}
      </div>
    )
  }
}
