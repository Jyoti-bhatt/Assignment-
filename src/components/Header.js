import React from 'react';
import "../styles/header.css";
import logo from "../resources/logo.svg";


function Header() {
  return (
    <div>
    <img className='header-logo' src = {logo} alt = ""/>
    </div>
  )
}

export default Header