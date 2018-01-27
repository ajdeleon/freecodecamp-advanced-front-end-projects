import React, { Component } from 'react'
import './TicTacToe.css'
import winningCombos from './winningCombos'

import Box from './Box'

class TicTacToe extends Component {
  // true = x; false = 0;
  state = {
    playerTurn: true,
    boxArray: ["", "", "", "", "", "", "", "", ""],
    turnCount: 0,
    gameOver: false,
    winner: ""
  }

  componentDidUpdate() {
    if (!this.state.gameOver) {
      this.calculateWinner()
    }
  }

  playerMove = (boxNum) => {
    if (!this.state.gameOver && !this.state.boxArray[boxNum])

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
      let currentBoard = this.state.boxArray

      for (var arr of winningCombos) {
        let a = arr[0]
        let b = arr[1]
        let c = arr[2]

        if (currentBoard[a] === "X" && currentBoard[b] === "X" && currentBoard[c] === "X") {
          this.setState({
            gameOver: true,
            winner: "X is the winner!"
          })
        }
        if (currentBoard[a] === "O" && currentBoard[b] === "O" && currentBoard[c] === "O") {
          this.setState({
            gameOver: true,
            winner: "O is the winner!"
          })
        }
      }

      if (this.state.turnCount === 9 && this.state.gameOver === false) {
        this.setState({
          gameOver: true,
          winner: "Nobody wins!"
        })
      }
  }

  reset(){
    this.setState({
      playerTurn: true,
      boxArray: ["", "", "", "", "", "", "", "", ""],
      turnCount: 0,
      gameOver: false
    })
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
      {this.state.gameOver &&
        <div className="winMessage">
          <h5>{this.state.winner}</h5>
          <button onClick={() => this.reset()}>Reset</button>
        </div>
      }
      <div className="TTT-wrapper">
        {this.renderBoxes()}
      </div>
      </React.Fragment>
    )
  } 
}

export default TicTacToe