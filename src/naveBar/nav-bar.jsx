import React from 'react'
import {Link} from 'react-router-dom'
import './nav-bar.css'
import {useState, useEffect} from 'react'
export default function NavBar() {
  const [linkClicked, setLinkClicked] = useState(false);
  const [linkClickedB, setLinkClickedB] = useState(false);
  const handleClick = () => {
    setLinkClicked(true);
  };
  const handleClickB = () => {
    setLinkClickedB(true);
  };

  return (
   <>
   <header>
     <div className="header">
    <div className="icon-container">
    {!linkClicked && (
         <Link className='links' onClick={handleClick} to={"/"}>Login</Link>
      )}
        {!linkClickedB && (
        <Link className='links' onClick={handleClickB} to={"Register"}>Register</Link>
      )}
        
    </div>
    
    </div>
   </header>
   
   </>
  )
}
