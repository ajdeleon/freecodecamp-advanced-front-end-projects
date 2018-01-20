import React from 'react'
import './Calculator.css'

const Calculator = () => {
  return (
    <div className="Calculator-wrapper">
      <div className="Calculator-display">
        <span>DISPLAY</span>
      </div>
      <div className="Calculator-functions">
        <div>AC</div>
        <div>±</div>
        <div>%</div>
      </div>
      <div className="Calculator-operations">
        <div>÷</div>
        <div>x</div>
        <div>-</div>
        <div>+</div>
        <div>=</div>
      </div>
      <div className="Calculator-keypad">
        <div className="zero">0</div>
        <div className="period">.</div>
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
        <div className="seven">7</div>
        <div className="eight">8</div>
        <div className="nine">9</div>
      </div>
    </div>
  )
}

export default Calculator