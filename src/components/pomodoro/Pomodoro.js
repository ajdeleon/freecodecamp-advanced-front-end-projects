import React, { Component } from 'react'
import './Pomodoro.css'

import Button from './Button'

class Pomodoro extends Component {
  state = {
    breakTime: 5,
    sessionTime: 25,
    session: 25
  }

  sessionChange = (sign) => {
    if (this.state.sessionTime) {
      this.setState((state) => {
        return sign === 'plus' ? {sessionTime: state.sessionTime + 1} : {sessionTime: state.sessionTime -1}
      })
    }
  }

  breakChange = (sign) => {
    if (this.state.breakTime) {
      this.setState((state) => {
        return sign === 'plus' ? {breakTime: state.breakTime + 1} : {breakTime: state.breakTime -1}
      })
    }
  }

  render() {
    return(
      <div className="container main-pomodoro">
        <div className="row controls">
          <div className="col s6 center">
            <Button sign="remove" handleClick={() => this.breakChange('minus')}/>
            {this.state.breakTime}
            <Button sign="add" handleClick={() => this.breakChange('plus')}/>
          </div>
          <div className="col s6 center">
            <Button sign="remove" handleClick={() => this.sessionChange('minus')}/>
            {this.state.sessionTime}
            <Button sign="add" handleClick={() => this.sessionChange('plus')}/>
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