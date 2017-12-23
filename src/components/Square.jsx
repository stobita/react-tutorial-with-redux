import React from 'react'

const Square = props =>{
  const squareClick = () => {
    props.squareClick(
      1,
      props.rowPosition,
      props.colPosition
    )
  }
  return(
    <div className="square" onClick={() => squareClick()}>
      <span>{props.squareValue}</span>
    </div>
  )
}

export default Square
