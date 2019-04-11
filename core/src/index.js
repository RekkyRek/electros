import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import express from 'express'
import reducers from './reducers'

import App from './containers/App.jsx'

window.sprkConfig = process.env['SPRK_CONFIG_LOCATION'] ? JSON.parse(require('fs').readFileSync(process.env['SPRK_CONFIG_LOCATION'], 'utf8')) : { startup: [], launcher: undefined }
window.sprkApps = process.env['SPRK_APPS_LOCATION'] || '/sprk/apps'

const appServer = express()

appServer.use(express.static(window.sprkApps))

appServer.listen(1469, () => console.log('SPRK app server listening on port 1469!'))

let store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'))
