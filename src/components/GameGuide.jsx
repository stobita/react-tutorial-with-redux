import React from 'react'

const GameGuide = props => {
  if (props.isActive){
    return null
  }
  return (
    <div className="board-cover">
      <button onClick={() => props.resetSquare()}>次のゲームへ</button>
    </div>
  )
}

export default GameGuide
