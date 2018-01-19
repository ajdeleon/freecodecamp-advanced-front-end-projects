import React, { Fragment } from 'react'

const Timer = ({ timer }) => {
  return (
    <Fragment>
    <div className="row">
          <div className="col s6 offset-s3 center">
            Start
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