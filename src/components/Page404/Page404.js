import React from 'react';
import './Page404.scss';
import logo from '../../commons/Header/logo.png';
import { Link } from 'react-router-dom';

const Page404 = () => (
  <>
    <div className="page-content">
      <img src={logo} alt="Auto1 Logo" className='nav-logo' data-testid="logo-image" />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>You can always go back to the <Link to="/" data-testid="homepage-nav">homepage</Link>.</p>
    </div>
  </>
);

export default Page404;
