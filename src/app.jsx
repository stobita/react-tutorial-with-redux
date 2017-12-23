import React from 'react'
import { render } from 'react-dom'
import TutorialGame, { tutorialGameReducer } from './containers/TutorialGame'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

class App extends React.Component {
  render(){
    return (
      <TutorialGame />
    )
  }
}

const rootReducer = combineReducers({
  tutorialGame: tutorialGameReducer
})

const initialState = {
  tutorialGame: {
    value: '',
    squares: Array.from(new Array(3), () => new Array(3).fill(0))
  }
}
const store = createStore(rootReducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
