import React from 'react'

const Button = ({ sign, handleClick }) => {
  return <a className="f5 link dim br-100 ba ph2 pv2 dib red" onClick={handleClick}><i className="material-icons">{sign}</i></a>
}

export default Button