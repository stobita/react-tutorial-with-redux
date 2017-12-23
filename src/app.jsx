import React from 'react'
import { render } from 'react-dom'
import TutorialGame from './containers/TutorialGame'

class App extends React.Component {
  render(){
    return (
      <TutorialGame />
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
