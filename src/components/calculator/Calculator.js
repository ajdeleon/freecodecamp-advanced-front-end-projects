import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
  state = {
    displayValue: "0",
    value: null,
    waitingForOperand: false,
    operator: null
  }
  
  clearDisplay() {
    this.setState({
      displayValue: "0"
    })
  }

  changePlusMinus() {
    if (this.state.displayValue) {
      this.setState({
        displayValue: this.state.displayValue.charAt(0) === '-' ?
        this.state.displayValue.substr(1) :
        '-' + this.state.displayValue
      })
    }
  }

  changePercentage() {
    this.setState({
      displayValue: String(parseFloat(this.state.displayValue) / 100)
    })
  }

  inputDecimalPoint() {

    if (this.state.waitingForOperand) {
      this.setState({
        displayValue: "0.",
        waitingForOperand: false
      })
    } else if (this.state.displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: this.state.displayValue + '.',
        waitingForOperand: false
      })
    }
  }

  inputDigit(digit) {
    if (this.state.waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: this.state.displayValue === "0" ? String(digit) : this.state.displayValue + String(digit)
      })
    }
  }

  performOperation(nextOperator) {
    const { displayValue, operator, value } = this.state
    
    const nextValue = parseFloat(displayValue)
    
    const operations = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "=": (prevValue, nextValue) => nextValue
    }
    
    if (value == null) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)
      
      this.setState({
      value: computedValue,
      displayValue: String(computedValue)
      })
    }
    
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

  render() {
    return (
      <div className="Calculator-wrapper">
        <div className="Calculator-display">
          <span>{this.state.displayValue}</span>
        </div>
        <div className="Calculator-functions">
          <div onClick={() => this.clearDisplay()}>AC</div>
          <div onClick={() => this.changePlusMinus()}>±</div>
          <div onClick={() => this.changePercentage()}>%</div>
        </div>
        <div className="Calculator-operations">
          <div onClick={() => this.performOperation("/")}>÷</div>
          <div onClick={() => this.performOperation("*")}>x</div>
          <div onClick={() => this.performOperation("-")}>-</div>
          <div onClick={() => this.performOperation("+")}>+</div>
          <div onClick={() => this.performOperation("=")}>=</div>
        </div>
        <div className="Calculator-keypad">
          <div onClick={() => this.inputDecimalPoint()}className="period">.</div>
          <div onClick={() => this.inputDigit(0)} className="zero">0</div>
          <div onClick={() => this.inputDigit(1)} className="one">1</div>
          <div onClick={() => this.inputDigit(2)} className="two">2</div>
          <div onClick={() => this.inputDigit(3)} className="three">3</div>
          <div onClick={() => this.inputDigit(4)} className="four">4</div>
          <div onClick={() => this.inputDigit(5)} className="five">5</div>
          <div onClick={() => this.inputDigit(6)} className="six">6</div>
          <div onClick={() => this.inputDigit(7)} className="seven">7</div>
          <div onClick={() => this.inputDigit(8)} className="eight">8</div>
          <div onClick={() => this.inputDigit(9)} className="nine">9</div>
        </div>
      </div>
    )
  }
}

export default Calculator