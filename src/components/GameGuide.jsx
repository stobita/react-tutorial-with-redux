import React from 'react'

const GameGuide = props => {
  if (!props.isActive){
    return null
  }
  return (
    <div className="board-cover">
      <button>次のゲームへ</button>
    </div>
  )
}

export default GameGuide
