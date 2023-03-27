import React from 'react';
import Chat from './components/Chat';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './app.css'
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
 
};

function AppChat() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className='container'>
      <div className={style.appContainer}>
        <section className='sectionContainer'>
          {user ? <Chat /> : null}
        </section>
      </div>
    </div>
  );
}

export default AppChat;
