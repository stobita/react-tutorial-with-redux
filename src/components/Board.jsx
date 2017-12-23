import React from 'react';
import Square from './Square';

const arr = Array.from(new Array(3), () => new Array(3).fill(0));

const Board = props => {
  return (
    <div>
      { arr.map((value) => {
        return <BoardRow rowValue={value} />
      })}
    </div>
  )
}

const BoardRow = props => {
  return (
    <div>
      { props.rowValue.map((value) => {
        return <Square />
      })}
    </div>
  )
}

export default Board;
