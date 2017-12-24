import React from 'react'

const SelectSquare = props => {
  return (
    <ul className="select-square">
      { props.squaresCountList.map((count) =>{
        return <SelectSquareButton countValue={count} changeSquareCount={props.changeSquareCount}/>
      })}
    </ul>
  )
}

const SelectSquareButton = props =>{
  return (
    <li>
      <button onClick={() => props.changeSquareCount(props.countValue)}>{props.countValue}</button>
    </li>
  )
}

export default SelectSquare
