import React from 'react'

const SelectSquare = props => {
  return (
    <ul className="select-square">
      { props.squaresCountList.map((count, index) =>{
        return <SelectSquareButton countValue={count} changeSquareCount={props.changeSquareCount} key={index}/>
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
