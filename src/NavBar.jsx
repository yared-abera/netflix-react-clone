import React from 'react'
import "./NavBar.css"
import netflixLogo from "./images/netflix.png"
function NavBar() {
  return (
    <div className='nav'>
      <div className="nav_contents">
       <img className='nav-logo'
       src={netflixLogo} alt="netflix" 
       />
        
       <button className='button'>Sign In</button> 
       
  </div>
    </div>
  )
}

export default NavBar
