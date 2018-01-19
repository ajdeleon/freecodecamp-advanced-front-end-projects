import React, { Fragment } from 'react'

const Timer = ({ timer, startTimer, stopTimer, resetTimer }) => {
  return (
    <Fragment>
    <div className="row">
          <div className="col s4 center">
            <button onClick={() => startTimer()}>Start</button>
          </div>
          <div className="col s4 center">
            <button onClick={() => stopTimer()}>Pause</button>
          </div>
          <div className="col s4 center">
            <button onClick={() => resetTimer()}>Reset</button>
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