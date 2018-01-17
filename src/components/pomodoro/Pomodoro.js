import React, { Component } from 'react'
import './Pomodoro.css'

import Button from './Button'

class Pomodoro extends Component {
  state = {
    breakTime: 5,
    sessionTime: 25,
    session: 25
  }

  render() {
    return(
      <div className="container main-pomodoro">
        <div className="row controls">
          <div className="col s6 center">
            <Button sign="remove" />
            {this.state.breakTime}
            <Button sign="add" />
          </div>
          <div className="col s6 center">
            <Button sign="remove" />
            {this.state.sessionTime}
            <Button sign="add" />
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