import './App.css'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Pomodoro from './pomodoro/Pomodoro'
import TicTacToe from './tictactoe/TicTacToe'
import Calculator from './calculator/Calculator'
import Simon from './simon/Simon'

class App extends Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div className="container">
        <Header />
        <Route exact path="/pomodoro" component={Pomodoro} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/tictactoe" component={TicTacToe} />
        <Route exact path="/simon" component={Simon} />

        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
