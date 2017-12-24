import React from 'react';
import Board from '../components/Board'
import GameGuide from '../components/GameGuide'
import SelectSquare from '../components/SelectSquare'
import Notice from '../components/Notice'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const TutorialGame = props =>{
  return (
    <div className="contents">
      <h1>Marubatsu Game</h1>
      <div className="board-wrapper">
        <Board
          squares={props.squares}
          squareClick={props.clickSquare}
          squaresCount={props.squaresCount}
        />
        <GameGuide isActive={props.isActive} resetSquare={props.resetSquare}/>
      </div>
      <Notice isFirst={props.isFirst} winner={props.winner}/>
      <SelectSquare
        squaresCount={props.squaresCount}
        squaresCountList={props.squaresCountList}
        changeSquareCount={props.changeSquareCount}
      />
    </div>
  )
}

const CLICK_SQUARE = 'CLICK_SQUARE'
const RESET_SQUARE = 'RESET_SQUARE'
const CHANGE_SQUARE_COUNT = 'CHANGE_SQUARE_COUNT'
const clickSquare = (row, col) => {
  return {
    type: CLICK_SQUARE,
    row,
    col
  }
}
const resetSquare = () => {
  return {
    type: RESET_SQUARE
  }
}
const changeSquareCount = (value) => {
  return {
    type: CHANGE_SQUARE_COUNT,
    value
  }
}

const changeSquareValue = ( array, action, isFirst ) => {
  // const newArray = array.map((value, index) =>{
  //   return array[index].slice()
  // })
  const newArray = array.slice()
  const nowPlayer = isFirst ? "○" : "×"
  if (newArray[action.row][action.col] === '　'){
    newArray[action.row][action.col] = nowPlayer
  }

  return newArray
}

export const tutorialGameReducer = (state = {}, action) =>{
  switch(action.type){
    case CLICK_SQUARE:
      return {
        ...state,
        squares: changeSquareValue(state.squares, action, state.isFirst),
        isFirst: !state.isFirst,
        winner: calculateWinner(state.squares),
        isActive: !(calculateWinner(state.squares) || state.gameCount + 1 === state.squaresCount),
        gameCount: state.gameCount + 1
      }
    case RESET_SQUARE:
      return {
        ...state,
        squares: Array.from(new Array(3), () => new Array(3).fill('　')),
        isActive: true,
        gameCount: 0,
        isFirst: true,
        winner: null
      }
    case CHANGE_SQUARE_COUNT:
      return {
        ...state,
        squaresCount: action.value,
        squares: Array.from(new Array(Math.sqrt(action.value)), () => new Array(Math.sqrt(action.value)).fill('　')),
      }
    default:
      return state
  }
}

// 勝敗判定
const calculateWinner = squares => {
  let winner;
  let rowMatch = false
  console.log(checkDiagonal(squares))
  winner = checkDiagonal(squares) || checkCol(squares)
  if (!winner){
    squares.some((row, rowIndex) => {
      let colMatch = true
      row.some((value, index, rowArray) => {
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

// 縦揃い判定
const checkCol = array => {
  let winner;
  for (let i = 0; i < array.length; i++){
    let match = false;
    array.some((row, rowIndex) => {
      if (rowIndex + 1 < array.length){
        match = (row[i] !== '　' && row[i] === array[rowIndex + 1][i])
        if (!match) {
          return true
        }
      }
    })
    if(match){
      winner = array[0][i]
      console.log(winner)
      break
    }
  }
  return winner
}

// 斜め揃い判定
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

const mapStateToProps = state => {
  return{
    value: state.tutorialGame.value,
    squares: state.tutorialGame.squares,
    squaresCount: state.tutorialGame.squaresCount,
    isFirst: state.tutorialGame.isFirst,
    winner: state.tutorialGame.winner,
    isActive: state.tutorialGame.isActive,
    gameCount: state.tutorialGame.gameCount,
    squaresCountList: state.tutorialGame.squaresCountList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ clickSquare, resetSquare, changeSquareCount }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialGame)
