import React from 'react'
import '../homePage/HomePage.css';

function Mission() {
  return (
    <div className='mission-wrap'>
      <div className='mission-text'>
        <h1>OUR MISSION</h1>
        <p>To Save the Planet</p>
      </div>
      <div className='mission-img'>
        <img src='../mission1.png' alt='mission-one' />
        <img src='../mission2.png' alt='mission-two' />
        <img src='../mission3.png' alt='mission-three' />
      </div>
    </div>
  )
}

export default Mission