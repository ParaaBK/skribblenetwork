import { useState } from 'react'
import './App.css'
// import AppChat from '../Chat-live/src/App'
// import AppGame from '../c-game/src/App'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Register from './register/register';
import Login from './login/login';
import GameAndChat from './GameAndChat/GameAndChat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../Chat-live/src/firebase';

function Joined() {
  const [user] = useAuthState(auth)
  const current_page = window.location.pathname;
  const [alreadyBusy, setAlreadyBusy] = useState(false);

  function toMainPage() {
    if (current_page !== "/" && alreadyBusy === false) {
      console.log("redirecting to main page")
      window.location.href = "/";
      setAlreadyBusy(true);
    }
    return false;
  }

  return (
    // <div className="App">
    //   <div className="Game-container">
    //       <AppGame/>
    //   </div>
    //   <div className='chat-container' >
    //     <AppChat/>
    //   </div>
    // </div>
    <Router>
    <div className="App-style">
      <Routes>
        
        <Route path= "/" element={<Login/>} exact/>
        <Route path="Register" element={<Register/>} exact/>
        { user ? <Route path="App" element={<GameAndChat/>} exact/>: toMainPage()}
      </Routes>
    </div>
  </Router>
  )
}

export default Joined
