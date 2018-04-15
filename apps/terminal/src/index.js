import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import shell from 'shelljs'

import { execSync } from 'child_process'

import './style/window.sass'

export default class App {
  constructor () {
    this.component = AppComponent
    this.title = 'Terminal'
    this.init = this.init.bind(this)
    this.mount = this.mount.bind(this)
  }
  init () {
    console.log('hi from terminal')
  }

  mount (mountElement) {
    ReactDOM.render(<this.component />, mountElement)
  }
}

class AppComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      output: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeys = this.handleKeys.bind(this)
  }

  submit (query) {
    let output = {query, stdout: '', pwd: shell.pwd().toString(), time: Date.now()}

    switch (query.split(' ')[0].toLowerCase()) {
      case 'cd':
        shell.cd(query.split(' ')[1])
        break
      case 'ls':
        const ls = shell.ls('.')
        ls.forEach(file => { output.stdout += `${file} ` })
        break
      default:
        try {
          const out = execSync(query).toString()
          output.stdout = out
        } catch (e) {
          output.stdout = e.message
        }
        break
    }
    let newOut = [...this.state.output, output]
    if (output.stdout === '[3J[H[2J') { newOut = [] }
    this.setState({ output: newOut })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.output.length !== this.state.output.length) {
      this.refs.stdout.scrollTop = this.refs.stdout.scrollHeight
    }
  }

  handleChange (event) {
    this.setState({input: event.target.value})
  }

  handleKeys (event) {
    if (event.keyCode === 13) {
      this.submit(event.target.value)
      this.setState({input: ''})
    }
  }

  render () {
    return (
      <div className='terminalWindow'>
        <div className='terminalOutput' ref='stdout'>
          {this.state.output.map((output) =>
            <div key={output.time}>
              <p><span className='terminalPWD'>{output.pwd}$</span> {output.query}</p>
              <p>{output.stdout}</p>
            </div>
          )}
        </div>
        <div className='terminalInput'>
          <p>{shell.pwd().toString()}$</p>
          <input type='text' value={this.state.input || ''} onKeyDown={this.handleKeys} onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}
