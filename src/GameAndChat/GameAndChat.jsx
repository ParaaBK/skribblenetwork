import React, { useEffect } from 'react';
import AppGame from '../../c-game/src/App';
import AppChat from '../../Chat-live/src/App';
import LogOut from '../LogOut';

export default function GameAndChat() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // This is required for Chrome
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
        <LogOut/>
        {/* <a href="/" onClick={(event) => {
            if (!window.confirm('Are you sure you want to leave? Your progress will be lost.')) {
              event.preventDefault();
            }
          }}>

          </a> */}
       <div className="App">
        <div className="Game-container">
          <AppGame />
        </div>
        <div className="chat-container">
            <AppChat />
        </div>
      </div>
    </div>
  );
}

