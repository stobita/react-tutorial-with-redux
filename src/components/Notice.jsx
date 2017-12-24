import React from 'react'

const Notice = props => {
  let dispValue;
  if (props.winner){
    dispValue = props.winner + 'の勝利です！'
  } else if (props.isFirst !== null){
    dispValue = props.isFirst ? '○' : '×'
    dispValue = dispValue + 'のターンです'
  } else {
    return null
  }
  console.log(props.winner)

  return (
    <p>{dispValue}</p>
  )
}
export default Notice
