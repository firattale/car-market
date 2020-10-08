import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image
import './index.css';

const Header = () => {
  return (
    <nav className='d-flex align-items-center justify-content-between nav'>
      <img src={logo} alt="Auto1 Logo" className='nav-logo'/>
      <div className="nav-links">
        <ul className='d-flex m-0 justify-content-between nav-link'>
          <li>Purchase</li>
          <li>My Orders</li>
          <li>Sell</li>
        </ul>
      </div>
    </nav>

  );
};

export default Header;
