import React, { Component } from 'react'

import ChromeTabs from 'chrome-tabs'

export default class Tabs extends Component {
  constructor (props) {
    super(props)
    this.chromeTabs = new ChromeTabs()
  }
  componentDidMount () {
    console.log(this.chromeTabs, this.refs.tabs)
    this.chromeTabs.init(this.refs.tabs, {
      tabOverlapDistance: 0,
      minWidth: 45,
      maxWidth: 243
    })
  }
  render () {
    return (
      <div ref='tabs' className='tabs'>
        <div className='chrome-tabs-content'>
          <div className='newtab' onClick={this.props.newTab}>
            <div className='chrome-tab-title'>+</div>
          </div>
        </div>
        <div className='chrome-tabs-bottom-bar' />
      </div>
    )
  }
}
