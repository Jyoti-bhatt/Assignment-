import React from 'react';
import '../styles/lighting-audio.css';
import '../styles/card.css';


function Audio() {
  return (
    <div className='card'>
        <div className='card-title'>Audio</div>
        <div className='content'>
            <div className='no'>2</div>
            <div className='status'>PLAYING</div>
            <div className='collection'>
            <div className='total'>Total</div>
            <div className='total-no'>5</div>
            </div>
           
        </div>
    </div>
  )
}

export default Audio