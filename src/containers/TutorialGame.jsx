import React from 'react';
import Board from '../components/Board'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const TutorialGame = props =>{
  return (
    <div className="contents">
      <h1>Marubatsu Game</h1>
      <Board />
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

export const tutorialGameReducer = (state = {}, action) =>{
  switch(action.type){
    case CLICK_SQUARE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}


const mapStateToProps = state => {
  value: state.value
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ clickSquare }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialGame)
