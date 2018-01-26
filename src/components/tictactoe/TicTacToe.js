import React, { Component } from 'react'
import './TicTacToe.css'
import winningCombos from './winningCombos'

import Box from './Box'

class TicTacToe extends Component {
  // true = x; false = 0;
  state = {
    playerTurn: true,
    boxArray: ["", "", "", "", "", "", "", "", ""],
    turnCount: 0
  }

  playerMove = (boxNum) => {
    if (!this.state.boxArray[boxNum])

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
    if (this.state.turnCount >= 9){
      const finalBoard = this.state.boxArray

      for (var arr of winningCombos) {
        let count = 0

        for (var val of arr) {
          if (finalBoard[val] === "X") {
            count++
          }
          return count === 3 && <div>Player X has won!</div>
        }
      }
    }
  }

  renderBoxes() {
    return this.state.boxArray.map((box, i) => {
      return <Box
      handleClick={this.playerMove}
      currentBox={box}
      index={i}
      key={i}
      />
    })
  }

  render() {
    return (
      <React.Fragment>
      <div className="TTT-wrapper">
        {this.renderBoxes()}
      </div>
      <div>
        {this.calculateWinner()}
      </div>
      </React.Fragment>
    )
  } 
}

export default TicTacToe