import React, { Component } from 'react'
import './Pomodoro.css'

import Button from './Button'
import Controls from './Controls'
import Timer from './Timer'

class Pomodoro extends Component {
  state = {
    breakTime: 5,
    sessionTime: 25,
    timer: 25
  }

  handleControlChange = (stateKey, step) => {
    if ( this.state[stateKey] === 0 && step === -1) return
    this.setState({
      [stateKey]: this.state[stateKey] + step
    })
  }

  render() {
    return(
      <div className="container Pomodoro">
        <Controls
        handleClick={this.handleControlChange}
        breakTime={this.state.breakTime}
        sessionTime={this.state.sessionTime}/>

        <Timer timer={this.state.timer}/>
      </div>
    )
  }
}

export default Pomodoro