import React from 'react'
import './HomeSec1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function HomeSec1() {
  return (
    <div className='homeSec1'>
      <h1>Unlimited movies, TV shows, and more.</h1>
           <p>Starts at USD 2.99. Cancel anytime.</p>
           <p className='p2'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='input'> <input type="email" placeholder='Email address'></input>
           <button>Get Started &nbsp; <FontAwesomeIcon icon={faChevronRight} /> </button>
          </div>
    </div>
  )
}

export default HomeSec1
