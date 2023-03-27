import React, { useState } from 'react';
import { auth, database } from '../firebase';
import NavBar from '../naveBar/nav-bar';
import SignIn from '../SignIn';
import "./card.css"


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);

    try {
     
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await database.ref(`users/${user.uid}`).set({
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <NavBar/>
      <div className="card-control">
             <div className="card-container">
                  <div className="card-body">
                         <h2 className='card-title'>Register</h2>
        <input type="email" placeholder='Enter your email' className='inputs inputA' value={email} onChange={handleEmailChange} />
        <br />
        <input type="password" placeholder='Enter your password' className='inputs inputB' value={password} onChange={handlePasswordChange} />
   
        <br/>
        <br/>
              <button type="submit" className='buttont'>Register</button>
              <SignIn/>
              <br></br>
              {errorMessage && <div className="error">{errorMessage}</div>}
              
      </div>
      </div>
      </div>
      </form>
  );
}
export default Register;
