import React, { Component } from 'react'
import './Pomodoro.css'

import Button from './Button'

class Pomodoro extends Component {
  state = {
    breakTime: 5,
    sessionTime: 25,
    session: 25
  }

  // change = (stateKey, step) => (state) => ({
  //   [stateKey]: state[stateKey] + step
  // })

  handleChange = (stateKey, step) => {
    this.setState({
      [stateKey]: this.state[stateKey] + step
    })
  }

  render() {
    return(
      <div className="container main-pomodoro">
        <div className="row controls">
          <div className="col s6 center">
            <Button sign="remove" handleClick={() => this.handleChange('breakTime', -1)}/>
            {this.state.breakTime}
            <Button sign="add" handleClick={() => this.handleChange('breakTime', 1)}/>
          </div>
          <div className="col s6 center">
            <Button sign="remove" handleClick={() => this.handleChange('sessionTime', -1)}/>
            {this.state.sessionTime}
            <Button sign="add" handleClick={() => this.handleChange('sessionTime', 1)}/>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3 center">
            Start
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3 center">
            {this.state.session}
          </div>
        </div>
      </div>
    )
  }
}

export default Pomodoro