import React, { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
import ModNav from './ModifiedNavbar'
import Footer from './Footer';
import Hero from './Hero'
import Methodology from './Methodology'
import Results from './Results'
import CoursesOffered from './CoursesOffered'
import ContactUs from './ContactUs'
import Signup from './Signup';


const Logout = () => {
  const navigate = useNavigate();
  const [showSignUp,setShowSignUp]=useState(true);
  const performLogout = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      console.log(data);
      setShowSignUp(false);

      if (res.ok) {
        console.log('Student has logged out');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performLogout();
  }, []);

  return (
    <>
        <ModNav />
        <Hero />
        <Methodology />
        <CoursesOffered />
        <Results />
        <ContactUs />
        {showSignUp?
        <Signup />:<div></div>
        }
        <Footer />
    </>
  );
};

export default Logout;
