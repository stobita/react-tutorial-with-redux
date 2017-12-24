import React from 'react';
import Board from '../components/Board'
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
        isFirst: !state.isFirst
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
    isFirst: state.tutorialGame.isFirst
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ clickSquare }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialGame)
