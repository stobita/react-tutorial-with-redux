import React from 'react'

const Square = props =>{
  const squareClick = () => {
    alert(props.rowPosition)
    props.squareClick(
      props.squareValue,
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
