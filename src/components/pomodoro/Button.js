import React from 'react'

const Button = ({ sign, handleClick }) => {
  return <a className="btn-floating btn-small waves-effect waves-light red" onClick={handleClick}><i className="material-icons">{sign}</i></a>
}

export default Button