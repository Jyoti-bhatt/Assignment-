import React from 'react';
import '../styles/temperature.css';
import fire from "../resources/fire.svg";
import snowflake from "../resources/snowflake.svg";
import '../styles/card.css';


function Temperature() {
  return (
    <div className='card'>
    <div className='card-title'>Temperature</div>
    <div className='temperature-content'>
    <div className='temperature-present'>21<span className='celsius'>&#8451;</span></div>
    <div className='temperature-no'>
        <div className='temperature-high'><img className='temperature-img' src = {fire} alt = "img"/>
        26<span className='celsius'>&#8451;</span></div>
        <div className='temperature-low'>
        <img className='temperature-img' src = {snowflake} alt = ""/>
        18<span className='celsius'>&#8451;</span></div>
    </div>
    </div>
    </div>
  )
}

export default Temperature;