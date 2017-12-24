import React from 'react';
import Board from '../components/Board'
import GameResult from '../components/GameResult'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const TutorialGame = props =>{
  return (
    <div className="contents">
      <h1>Marubatsu Game</h1>
      <Board
        squares={props.squares}
        squareClick={props.clickSquare}
        squaresCount={props.squaresCount}
      />
      <GameResult winner={props.winner}/>
    </div>
  )
}

const CLICK_SQUARE = 'CLICK_SQUARE'
const clickSquare = (row, col) => {
  return {
    type: CLICK_SQUARE,
    row,
    col
  }
}

const changeSquareValue = ( array, action, isFirst ) => {
  // const newArray = array.map((value, index) =>{
  //   return array[index].slice()
  // })
  const newArray = array.slice()
  const nowPlayer = isFirst ? "○" : "×"
  newArray[action.row][action.col] = nowPlayer

  return newArray
}

export const tutorialGameReducer = (state = {}, action) =>{
  switch(action.type){
    case CLICK_SQUARE:
      return {
        ...state,
        squares: changeSquareValue(state.squares, action, state.isFirst),
        isFirst: !state.isFirst,
        winner: calculateWinner(state.squares)
      }
    default:
      return state
  }
}

const mapStateToProps = state => {
  return{
    value: state.tutorialGame.value,
    squares: state.tutorialGame.squares,
    squaresCount: state.tutorialGame.squaresCount,
    isFirst: state.tutorialGame.isFirst,
    winner: state.tutorialGame.winner
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ clickSquare }, dispatch)
}

const calculateWinner = squares => {
  let winner;
  let rowMatch = false
  winner = checkDiagonal(squares)
  if (!winner){
    squares.some((row, rowIndex) => {
      let colMatch = true
      row.some((value, index, rowArray) => {
        if (rowIndex === 0){
          // 縦チェック
          if (checkCol(squares, index)){
            rowMatch = true
            winner = row[0][index]
            return true
          }
        }
        // 横チェック
        if (index + 1 < row.length){
          colMatch = (value !== '　' && value === rowArray[index + 1])
          if(!colMatch){
            return true
          }
        }
      })
      if(colMatch){
        winner = row[rowIndex][0]
        return true
      }
    })
  }
  return winner
}

const checkCol = (array, index) => {
  let rowMatch = false
  array.some((inner, innerIndex) => {
    if (innerIndex + 1 < array.length){
      rowMatch = (array[innerIndex][index] !== '　' && array[innerIndex][index] === array[innerIndex+1][index])
      if(!rowMatch){
        return true
      }
    }
  })
  return rowMatch
}

const checkDiagonal = (array) => {
  let diagonalMatchTop = false
  let diagonalMatchBottom = false
  for (let i = 0; i < array.length - 1; i++){
    diagonalMatchTop = (array[i][i] !== '　' && array[i][i] === array[i + 1][i + 1])
    if (!diagonalMatchTop){
      break
    }
  }
  for (let i = array.length -1 ; i > 0; i--){
    diagonalMatchBottom = (array[i][array.length - i -1] !== '　' && array[i][array.length - i -1] === array[i - 1][array.length - i])
    if (!diagonalMatchBottom){
      break
    }
  }
  if (diagonalMatchTop){
    return array[0][0]
  }
  if (diagonalMatchBottom){
    return array[0][array.length-1]
  }
  return null
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialGame)
