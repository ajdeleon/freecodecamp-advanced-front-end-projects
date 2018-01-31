import React from 'react'

import Button from './Button'

const Controls = ({ breakTime, sessionTime, handleClick}) => {

  return (
    <div className="flex">
      <div className="justify-around">
        <Button sign="remove" handleClick={() => handleClick('breakTime', -1)} />
        {breakTime}
        <Button sign="add" handleClick={() => handleClick('breakTime', 1)} />
      </div>
      <div className="justify-around">
        <Button sign="remove" handleClick={() => handleClick('sessionTime', -1)} />
        {sessionTime}
        <Button sign="add" handleClick={() => handleClick('sessionTime', 1)} />
      </div>
    </div>
  )
}

export default Controls