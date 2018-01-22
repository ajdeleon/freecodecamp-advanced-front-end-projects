import React, { Component } from 'react'
import './TicTacToe.css'

class TicTacToe extends Component {
  // true = x; false = 0;
  state = {
    playerTurn: true,
    boxArray: ["X", "X", "", "", "", "", "", "", ""],
    turnCount: 0
  }

  playerMove(boxNum) {
    if (this.state.turnCount < 9) {
      let playerToken = this.state.playerTurn ? "X" : "O"
      let tempArray = this.state.boxArray

      let updatedArray = tempArray.map((box, i) => {
        return boxNum === i ? playerToken : box
      })

      this.setState({
        playerTurn: !this.state.playerTurn,
        boxArray: updatedArray,
        turnCount: this.state.turnCount + 1
      })
    }
  }

  calculateWinner() {
    return this.state.turnCount >= 9 && <h1>Winner!</h1>
  }

  render() {
    return (
      <React.Fragment>
      <div className="TTT-wrapper">
        <div onClick={() => this.playerMove(0)}className="TTT-box">{this.state.boxArray[0]}</div>
        <div onClick={() => this.playerMove(1)}className="TTT-box">{this.state.boxArray[1]}</div>
        <div onClick={() => this.playerMove(2)}className="TTT-box">{this.state.boxArray[2]}</div>
        <div onClick={() => this.playerMove(3)}className="TTT-box">{this.state.boxArray[3]}</div>
        <div onClick={() => this.playerMove(4)}className="TTT-box">{this.state.boxArray[4]}</div>
        <div onClick={() => this.playerMove(5)}className="TTT-box">{this.state.boxArray[5]}</div>
        <div onClick={() => this.playerMove(6)}className="TTT-box">{this.state.boxArray[6]}</div>
        <div onClick={() => this.playerMove(7)}className="TTT-box">{this.state.boxArray[7]}</div>
        <div onClick={() => this.playerMove(8)}className="TTT-box">{this.state.boxArray[8]}</div>
      </div>
      <div>
        {this.calculateWinner()}
      </div>
      </React.Fragment>
    )
  } 
}

export default TicTacToe