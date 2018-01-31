import React, { Component } from 'react'
import './Pomodoro.css'

import Controls from './Controls'
import Timer from './Timer'

//todo
//add in break functionality

class Pomodoro extends Component {
  state = {
    breakTime: 5,
    sessionTime: 25,
    timer: 25,
    intervalId: null,
    timerRunning: false
  }

  handleControlChange = (stateKey, step) => {
    if ( this.state[stateKey] === 0 && step === -1) return
    this.setState({
      [stateKey]: this.state[stateKey] + step
    })
  }

  startTimer = () => {
    if (!this.state.timerRunning) {
      
      let intervalId = setInterval(this.decrementTimer ,1000)
      this.setState({
        intervalId,
        timerRunning: true
      })
    }
  }

  stopTimer = () => {
    if (this.state.timerRunning) {
      clearInterval(this.state.intervalId)
      this.setState({ timerRunning: false})
    }
  }

  resetTimer = () => {
    clearInterval(this.state.intervalId)
    this.setState({
      timer: this.state.sessionTime,
      timerRunning: false
    })
  }

  decrementTimer = () => {
    this.setState(state => {
      return {
        timer: state.timer - 1
      }
    })
  }

  render() {
    return(
      <div className="mw5 mw7-ns center pa3 ph5-ns">
        <Controls
        handleClick={this.handleControlChange}
        breakTime={this.state.breakTime}
        sessionTime={this.state.sessionTime}/>

        <Timer
        timer={this.state.timer}
        startTimer={this.startTimer}
        stopTimer={this.stopTimer}
        resetTimer={this.resetTimer}/>
      </div>
    )
  }
}

export default Pomodoro