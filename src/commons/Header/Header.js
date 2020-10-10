import React from 'react';
import logo from './logo.png';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='d-flex align-items-center justify-content-between nav'>
      <Link to="/"><img src={logo} data-testid="logo-image" alt="Auto1 Logo" className='nav-logo' /></Link>
      <ul className='nav-links'>
        <li>Purchase</li>
        <li>My Orders</li>
        <li>Sell</li>
      </ul>
    </nav>
  );
};

export default Header;
