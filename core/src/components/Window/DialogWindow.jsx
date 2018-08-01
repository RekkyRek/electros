import React, { Component } from 'react'

export default class DialogWindow extends Component {
  componentWillMount () {
    this.props.focusWindow(this.props.windowID)
  }

  render () {
    return (
      <div
        className='window dialog'
        style={{
          zIndex: this.props.isFocused ? 3 : 2,
          transform: this.props.isVisable ? 'translateY(0px)' : 'translateY(-24px)',
          opacity: this.props.isVisable ? 1 : 0
        }}
        onClick={() => this.props.focusWindow(this.props.windowID)}
        ref='window'
      >
        <div className='windowDecorations' ref='decorations'>
          <p className='windowTitle'>{this.props.app.title ? this.props.app.title : ''}</p>
        </div>
        <div className='windowContent'>
          <div className='windowDialogMessage'>
            {this.props.app.message.message}
          </div>
          <div className='windowDialogActions'>
            {this.props.app.buttons ? this.props.app.buttons.map(action =>
              <button className='blurButton' onClick={() => action.action(this.props.windowID)}>{action.name ? action.name : 'Undefined'}</button>
            ) : ''}
          </div>
        </div>
      </div>
    )
  }
}
