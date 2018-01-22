import React from 'react'

const Box = ({ currentBox, index, handleClick }) => {
  return <div onClick={() => handleClick(index)}className="TTT-box">{currentBox}</div>
}

export default Box