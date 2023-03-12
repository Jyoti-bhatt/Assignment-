import React from 'react';
import '../styles/air_quality.css';
import arrowDown from "../resources/arrow-down.svg"
import arrowUp from "../resources/arrow-up.svg";
import '../styles/card.css';


function AirQuality() {
  return (
    <div className='card'>
    <div className='card-title'>Air Quality</div>
    <div className='air-quality-content'>
    <div className='air-quality-present'>
    72
    </div>
    <div className='air-quality-no'>
        <div className='air-quality-high'><img className='arrow-up' src= {arrowUp} alt ="img"/>93</div>
        <div className='air-quality-low'><img className='arrow-down' src= {arrowDown} alt ="img"/>61</div>
    </div>
    </div>
    
    </div>
  )
}

export default AirQuality