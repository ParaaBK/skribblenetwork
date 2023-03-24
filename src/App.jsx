import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppChat from '../Chat-live/src/App'
import AppGame from '../c-game/src/App'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Game-container">
          <AppGame/>
      </div>
      <div className='chat-container' >
        <AppChat/>
      </div>
    </div>
  )
}

export default App
