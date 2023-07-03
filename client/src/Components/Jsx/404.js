import React from 'react';
import '../Styles/404.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div className="not-found">
      <h1 className="Error-404">Error-404 :(</h1>
      <p className="error-404-content">Oops! The page you're looking for could not be found.</p>
      <NavLink to="/">
      <button className='back-to-home'>Back to Home</button>
      </NavLink>    
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
