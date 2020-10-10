import React from 'react';
import logo from './logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='d-flex align-items-center justify-content-between nav'>
      <Link to="/"><img src={logo} data-testid="logo-image" alt="Auto1 Logo" className='nav-logo' /></Link>
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
