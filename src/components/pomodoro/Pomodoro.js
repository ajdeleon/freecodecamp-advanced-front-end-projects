import React, { Component } from 'react'
import './Pomodoro.css'

class Pomodoro extends Component {
  render() {
    return(
      <div className="container main">
        <div className="row controls">
          <div className="col s6 center">
            <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">remove</i></a>
            5
            <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div className="col s6 center">
          <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">remove</i></a>
            25
            <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3 center">
            session 25
          </div>
        </div>
      </div>
    )
  }
}

export default Pomodoro