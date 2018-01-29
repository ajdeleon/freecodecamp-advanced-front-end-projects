import React, { Component } from 'react'
import './Simon.css'

class Simon extends Component {
  state = {
    playerMoves: [],
    gameMoves: []
  }

  playerMove(button) {
    //flash color of button
    //--add value to player move
    //compare it to game move
    //if good, perform next game move
    //if not, end game
    this.setState((state) => {
      return {
        playerMoves: [...state.playerMoves, button]
      }
    })
  }

  renderList() {
    let temp = this.state.playerMoves
    console.log(temp)
    return temp.map(x => {
      return <div>{x}</div>
    })
  }

  render() {
    return (
      <div className="Simon-container">
        <div className="first-row">
          <div onClick={() => this.playerMove("top")}className="game-button" id="top"></div>
        </div>
        <div className="second-row">  
          <div onClick={() => this.playerMove("left")}className="game-button" id="left"></div>
          <div onClick={() => this.playerMove("right")}className="game-button" id="right"></div>
        </div>
        <div className="third-row">
          <div onClick={() => this.playerMove("bottom")}className="game-button" id="bottom"></div>
        </div>
        {this.renderList()}
      </div>
    )
  }
}

export default Simon