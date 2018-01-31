import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <nav className="pa3 pa4-ns bg-blue">
      <Link to={'/'} className="link dim white b f7 f4-ns dib mr3">Home</Link>
      <Link to="/pomodoro" className="link dim white f6 f5-ns dib mr3">Pomodoro</Link>
      <Link to="/calculator" className="link dim white f6 f5-ns dib mr3">Calculator</Link>
      <Link to="/tictactoe" className="link dim white f6 f5-ns dib mr3">Tic Tac Toe</Link>
      <Link to="/simon" className="link dim white f6 f5-ns dib">Simon Game</Link>
   </nav>
  )
}

export default Header