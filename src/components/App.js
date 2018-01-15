import './App.css'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div className="container">
        <Header />
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
