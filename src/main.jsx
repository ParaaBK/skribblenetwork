import React from 'react'
import ReactDOM from 'react-dom/client'
import Joined from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div id="background">
          <div id="doScroll">
              <Joined />
          </div>
      </div>
  </React.StrictMode>,
)
