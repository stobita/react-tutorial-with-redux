import React from 'react'
import { render } from 'react-dom'
import TutorialGame from './containers/TutorialGame'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  render(){
    return (
      <TutorialGame />
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
