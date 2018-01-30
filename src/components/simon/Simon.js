import React, { Component } from 'react'
import './Simon.css'
import '../../utils/arrayEquals'

   //flash color of button
    //--add value to player move
    //--compare it to game move
    //--if good, perform next game move
    //--if not, end game

class Simon extends Component {
  state = {
    playerMoves: [],
    gameMoves: ["left"],
    shownMove: null
  }

  // playGameMoves() {
  //   let moves = this.state.gameMoves

  //   moves.forEach((x, i) => {
      
  //   })
  // }

  playerMove(button) {
    this.setState({
        playerMoves: [...this.state.playerMoves, button]
      }, () => {
          if (this.state.playerMoves.equals(this.state.gameMoves)) {
            if (this.state.playerMoves.length === this.state.gameMoves.length) {
              alert("Good")
              this.setState({
                playerMoves: []
              }, this.gameMove())
            }
          } else {
            alert("Bad. Restarting game!")
            this.setState({
              playerMoves: [],
              gameMoves: ["left"]
            })
          }
      })
  }

  gameMove() {
    const choices = ["top", "right", "bottom", "left"]
    let randomNumber = Math.floor((Math.random() * 4) + 0)
    this.setState({
      gameMoves: [...this.state.gameMoves, choices[randomNumber]]
    })
  }

  renderList() {
    let temp = this.state.gameMoves
    return temp.map((x, i) => {
      return <div key={i}>{x}</div>
    })
  }

  render() {
    return (
      <div className="Simon-container">
        <div className="first-row">
          <div onClick={() => this.playerMove("top")} ref={top => this.topElement = top} className="game-button top"></div>
        </div>
        <div className="second-row">  
          <div onClick={() => this.playerMove("left")} className="game-button left"></div>
          <div className="round-display">Round {this.state.gameMoves.length}</div>
          <div onClick={() => this.playerMove("right")} className="game-button right"></div>
        </div>
        <div className="third-row">
          <div onClick={() => this.playerMove("bottom")} className="game-button bottom"></div>
        </div>
        {this.renderList()}

      </div>
    )
  }
}

export default Simon