import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={'/'} className="left brand-logo">
        Home
        </Link>
        <ul className="right hide-on-medium-and-down">
          <li key="item1"><a>Pomodoro</a></li>
          <li key="item2"><a>Calculator</a></li>
          <li key="item3"><a>Tic Tac Toe</a></li>
          <li key="item4"><a>Simon Game</a></li>
        </ul>  
      </div>
    </nav>
  )
}

export default Header