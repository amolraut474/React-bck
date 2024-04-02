import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import Sidebar from '../Sidebar/Sidebar';
const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='header-section'>
    <div className='logo-main-part'>
    <div className='site-logo'>
        <img src='https://trion.kwst.net/dark/images/logo.png' alt='Logo'/>
    </div>
    <div className='Lets-Talk'>
      <button>Lets Talk</button>
    </div>

    <div className='mobile-sidebar'><Sidebar/></div>
    </div>
    <div className='toggle-container'>
      <button 
        className={`toggle-button-header ${isToggled ? 'on' : 'off'}`} 
        onClick={handleToggle}
      >
        {isToggled ? 'X' : 'Share'}
      </button>
      {isToggled && (
        <ul>
          <li><i class="bi bi-instagram"></i></li>
          <li><i class="bi bi-linkedin"></i></li>
          <li><i class="bi bi-facebook"></i></li>
          <li><i class="bi bi-whatsapp"></i></li>
        </ul>
      )}
    </div>
    </div>
  );
};

export default ToggleButton;