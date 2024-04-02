// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar-part'>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className='sidebar-menu'>MENU</h2>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>
            <div className='nav-icon-box'><div><span className='side-bar-left-icon'><i class="bi bi-house-door"></i></span>Home</div>
              <h3 className='pluse-icon'>+</h3></div></Link></li>
          <li><Link to="/About" onClick={() => setIsOpen(false)}>
            <div className='nav-icon-box'><div><span className='side-bar-left-icon'><i class="bi bi-person-circle"></i></span>About</div>
              <h3 className='pluse-icon'>+</h3></div></Link></li>

          <li><Link to="/Portfolio" onClick={() => setIsOpen(false)}>
            <div className='nav-icon-box'><div><span className='side-bar-left-icon'><i class="bi bi-briefcase"></i></span>Portfolio</div>
              <h3 className='pluse-icon'>+</h3></div></Link></li>

          <li><Link to="/Contact" onClick={() => setIsOpen(false)}>
            <div className='nav-icon-box'><div><span className='side-bar-left-icon'><i class="bi bi-globe"></i></span>Contact</div>
              <h3 className='pluse-icon'>+</h3></div></Link></li>

          <li><Link to="/Pages" onClick={() => setIsOpen(false)}>
            <div className='nav-icon-box'><div><span className='side-bar-left-icon'><i class="bi bi-file-earmark"></i></span>Pages</div>
              <h3 className='pluse-icon'>+</h3></div></Link></li>

          <li><Link to="/Journal" onClick={() => setIsOpen(false)}>
            <div className='nav-icon-box'><div><span className='side-bar-left-icon'><i class="bi bi-postcard"></i></span>Journal</div>
              <h3 className='pluse-icon'>+</h3></div></Link></li>

          <div className='sidebar-email-info'>
            <h2 className='sidebar-menu'>CONTACT INFO</h2>

            <div className='nav-icon-box'><div className='nav-icon-side'><span className='side-bar-left-icon'><i class="bi bi-envelope-fill"></i></span><h3>Example@gmail.com</h3></div>
            </div>
            <div className='nav-icon-box'><div className='nav-icon-side'><span className='side-bar-left-icon'><i class="bi bi-geo-alt-fill"></i></span><h3>Lorem ipsum dolor sit amet.</h3></div>
            </div>
            <div className='nav-icon-box'><div className='nav-icon-side'><span className='side-bar-left-icon'><i class="bi bi-telephone-outbound-fill"></i></span><h3>+911234567890</h3></div>
            </div>

          </div>

          <div className='sidebar-email-info'>
            <h2 className='sidebar-menu'>FIND US</h2>

            <div className='nav-icon-box'>

              <div className='sidebar-bottom-i'><span className='side-bar-left-icon'><i class="bi bi-instagram"></i></span>
                <span className='side-bar-left-icon'><i class="bi bi-linkedin"></i></span>
                <span className='side-bar-left-icon'><i class="bi bi-facebook"></i></span>
                <span className='side-bar-left-icon'><i class="bi bi-whatsapp"></i></span>
              </div>
            </div>


          </div>
        </ul>
      </div>

      <div className="toggle-button" onClick={handleToggle}>&#9776;</div>
    </div>
  );
}

export default Sidebar;