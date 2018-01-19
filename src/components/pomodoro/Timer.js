import React, { Fragment } from 'react'

const Timer = ({ timer, startTimer, stopTimer }) => {
  return (
    <Fragment>
    <div className="row">
          <div className="col s3 offset-s3 center">
            <button onClick={() => startTimer()}>Start</button>
          </div>
          <div className="col s3 center">
            <button onClick={() => stopTimer()}>Stop</button>
          </div>
        </div>
    <div className="row">
      <div className="col s6 offset-s3 center">
        {timer}
      </div>
    </div>
    </Fragment>
  )
}

export default Timer