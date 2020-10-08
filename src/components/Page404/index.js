import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';
import logo from '../Header/logo.png';
import { Link } from 'react-router-dom';
const Page404 = () => (
  <>
    <Header/>
    <div className="page-content">
      <img src={logo} alt="Auto1 Logo" className='nav-logo'/>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>You can always go back to the <Link to="/">homepage</Link>.</p>
    </div>
    <Footer/>
  </>
);

export default Page404;
