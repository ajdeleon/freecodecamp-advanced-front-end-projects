import React from 'react'

const Button = ({ sign }) => {
  return <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">{sign}</i></a>
}

export default Button