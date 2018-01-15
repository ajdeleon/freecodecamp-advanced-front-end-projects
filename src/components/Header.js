import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <Link to={'/'} className="left brand-logo">
        Home
        </Link>
        <ul className="right hide-on-medium-and-down">
          <li key="item1"><Link to="/pomodoro">Pomodoro</Link></li>
          <li key="item2"><Link to="/calculator">Calculator</Link></li>
          <li key="item3"><Link to="/tictactoe">Tic Tac Toe</Link></li>
          <li key="item4"><Link to="/simon">Simon Game</Link></li>
        </ul>  
      </div>
    </nav>
  )
}

export default Header