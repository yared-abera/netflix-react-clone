import React from 'react'
import NavBar from './NavBar'
import './homeScreen.css'
import HomeSec1 from './HomeSec1'
function HomeScreen() {
  return (
    <div className='homeScreen' >
      <div className='sec1'>
      <NavBar/>
      <HomeSec1/>
      </div>
    </div>
  )
}

export default HomeScreen
