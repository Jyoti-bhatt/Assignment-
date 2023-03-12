import React from "react";
import "../styles/displays.css";
import '../styles/card.css';


function Displays() {
  return (
    <div className="card">
      <div className="card-title">Displays</div>
      <div className="displays-content">
        <div className="displays-no">
          10
          <span className="displays-no2">/16</span>
        </div>
        <div className="displays-timer">
          <div className="displays-text">On Time</div>
          <div className="displays-time">00:00</div>
        </div>
      </div>
    </div>
  );
}

export default Displays;
