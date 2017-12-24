import { createStore, combineReducers } from 'redux'
import { tutorialGameReducer } from './containers/TutorialGame'

const rootReducer = combineReducers({
  tutorialGame: tutorialGameReducer
})

const initialState = {
  tutorialGame: {
    squaresCount: 9,
    squares: Array.from(new Array(3), () => new Array(3).fill('　')),
    isFirst: true,
    isActive: false,
    gameCount: 0
  }
}

export default createStore(rootReducer, initialState)
