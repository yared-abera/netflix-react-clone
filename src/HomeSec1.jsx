import React from 'react'
import './HomeSec1.css'
function HomeSec1() {
  return (
    <div className='homeSec1'>
      <h1>Unlimited movies, TV shows, and more.</h1>
           <p>Starts at USD 2.99. Cancel anytime.</p>
           <p>Ready to watch? Enter your email to create or restart your membership.</p>
           <input type="email" placeholder='Email address'></input>
           <button>Get Started</button>
    </div>
  )
}

export default HomeSec1
