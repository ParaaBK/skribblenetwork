import React from 'react';
// import SignIn from './SignIn'
// import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import './Navbar.css';
// import SignIn from '../../../src/SignIn';

// const style = {
//     nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
//     heading: `text-white text-3xl`
// }

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className='nav'>
      {/* {user ? <LogOut /> : <SignIn />} */}
      <h1 className='heading'>Global Chat</h1>
    </div>
  );
};

export default Navbar;
