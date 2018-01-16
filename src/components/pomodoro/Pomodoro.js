import React, { Component } from 'react'
import './Pomodoro.css'

class Pomodoro extends Component {
  render() {
    return(
      <div className="container main-pomodoro">
        <div className="row controls">
          <div className="col s6 center">
            <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
            5
            <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
          <div className="col s6 center">
          <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
            25
            <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
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