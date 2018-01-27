import React from 'react'
import './Simon.css'

const Simon = () => {
  return (
    <div className="Simon-container">
      <div className="first-row">
        <div className="game-button" id="one"></div>
      </div>
      <div className="second-row">  
        <div className="game-button" id="two"></div>
        <div className="game-button" id="three"></div>
      </div>
      <div className="third-row">
        <div className="game-button" id="four"></div>
      </div>
    </div>
  )
}

export default Simon