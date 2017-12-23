import { createStore, combineReducers } from 'redux'
import { tutorialGameReducer } from './containers/TutorialGame'

const rootReducer = combineReducers({
  tutorialGame: tutorialGameReducer
})

const initialState = {
  tutorialGame: {
    squaresCount: 3,
    squares: Array.from(new Array(3), () => new Array(3).fill(0))
  }
}

export default createStore(rootReducer, initialState)
