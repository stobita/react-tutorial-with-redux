import React from 'react'

const GameResult = props => {
  if (!props.winner){
    return null;
  }
  return (
    <h3>{props.winner}の勝利です！</h3>
  )
}

export default GameResult
