import React from 'react'
import './homeSec2.css'
import  images from './importImage.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function HomeSec2() {

  return (

    <div className='homeSec2'>
      <div className='trending'><h1>Trending Now</h1>
      <select name="" id="trend-select">
        <option value="">Movies-English</option>
        <option value="">Movies-Other Languages</option>
        <option value="">TV Shows-English</option>
        <option value="">TV Shows-Other Languages</option>
      </select>
      </div>
       
       <div className='trend-container'>
        <div className="chevron"><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="trend">
        <div className="trend-img">
         <img src={images['Lonely.png']}  alt="" />
         <img src={images['sweet-Bobby.png']}  alt="" />
         <img src={images['Mendez.png']}  alt="" />
         <img src={images['sing.png']}  alt="" />
         <img src={images['predator.png']}  alt="" /> 
        </div>
          </div>
          <div className="chevron"><FontAwesomeIcon icon={faChevronRight} /></div>
       </div>
        

    </div>
  )
}

export default HomeSec2
