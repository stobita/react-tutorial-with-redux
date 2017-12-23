import React from 'react';
import Board from '../components/Board'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const TutorialGame = props =>{
  console.log(props)
  return (
    <div className="contents">
      <h1>Marubatsu Game</h1>
      <Board
        squares={props.squares}
        squareClick={props.squareClick}
        squaresCount={props.squaresCount}
      />
    </div>
  )
}

const CLICK_SQUARE = 'CLICK_SQUARE'
const clickSquare = () => {
  return {
    type: CLICK_SQUARE,
    value
  }
}

const changeSquareValue = ( array, action ) => {

}

export const tutorialGameReducer = (state = {}, action) =>{
  switch(action.type){
    case CLICK_SQUARE:
      return {
        ...state,
        value: changeSquareValue(state.squares, action.value)
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
