import React from 'react'
import { Route } from 'react-router-dom'

import Desktop from './Desktop.jsx'

import '../res/sass/main.sass'

export default class App extends React.Component {
  render () {
    return (
      <div className='router'>
        <Route exact path='/' component={Desktop} />
      </div>
    )
  }
}
