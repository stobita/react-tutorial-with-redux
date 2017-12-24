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
const clickSquare = (value, row, col) => {
  return {
    type: CLICK_SQUARE,
    value,
    row,
    col
  }
}

const changeSquareValue = ( array, action ) => {
  // const newArray = array.map((value, index) =>{
  //   return array[index].slice()
  // })
  const newArray = array.slice()
  newArray[action.row][action.col] = action.value

  return newArray
}

export const tutorialGameReducer = (state = {}, action) =>{
  switch(action.type){
    case CLICK_SQUARE:
      return {
        ...state,
        squares: changeSquareValue(state.squares, action)
      }
    default:
      return state
  }
}

const mapStateToProps = state => {
  return{
    value: state.tutorialGame.value,
    squares: state.tutorialGame.squares,
    squaresCount: state.tutorialGame.squaresCount
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ clickSquare }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialGame)
