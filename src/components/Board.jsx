import React from 'react';
import Square from './Square';

const Board = props => {
  return (
    <div>
      { props.squares.map((row,index) => {
        return (
          <BoardRow
            rowLine={row}
            squareClick={props.squareClick}
            rowPosition={index}
          />
        )
      })}
    </div>
  )
}

const BoardRow = props => {
  return (
    <div className="board-row">
      { props.rowLine.map((value,index) => {
        return(
          <Square
            squareValue={value}
            squareClick={props.squareClick}
            colPosition={index}
            rowPosition={props.rowPosition}
          />
        )
      })}
      <br/>
    </div>
  )
}

export default Board;
