import React, { Component } from 'react'

import Window from '../Window/Window.jsx'

export default class WindowManager extends Component {
  render () {
    console.log('windows', Object.keys(this.props.windows))
    return (
      <div className='windowManager'>
        {Object.keys(this.props.windows).map(windowID => {
          return <Window
            key={windowID}
            isFocused={this.props.currentFocus === windowID}
            focusWindow={this.props.focusWindow}
            discardWindow={this.props.discardWindow}
            {...this.props.windows[windowID]}
          />
        })}
      </div>
    )
  }
}
