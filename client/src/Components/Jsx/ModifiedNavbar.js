import React from 'react'
import '../Styles/Navbar.css'
// import  Button from './Button'
import Announcements from '../svgs/Announcements.svg'
import AnnouncementsMobile from '../svgs/AnnouncementMobile.svg'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import MarqueeModified from './MarqueeModified'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {


  const navigate = useNavigate();
  const handleNavigateToSignin=()=>{
    navigate("/sign-in");
  }
  
  const [click,setClick]=useState(false);
  function handleClick()
  {
      if(click===false)
      setClick(true);
      else
      setClick(false);
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    // const messageAnnouncement="New Batch for Class XII is starting from 12th May";
    const [navbarColour, setNavbarColour]=useState(false);
    function handleNavbarWhileScrolling()
    {
        if(window.scrollY>=100)
        setNavbarColour(true);
        else
        setNavbarColour(false);
    };

    window.addEventListener("scroll",handleNavbarWhileScrolling);
  return (
    <>
        <div className={navbarColour?"navbar heading-bg":"navbar"}>
            <div className='nav-logo'><span className='vertex'>Vertex</span><span> </span><span className='classes'>Classes</span></div>
            <div className={click?'nav-items-mobile':'nav-items'}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutus">AboutUs</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink>
            <ul className='sub-menu-courses'>
                <li>
                  <NavLink to='/courses/11th'>Class XI</NavLink>
                </li>
                <li>
                  <NavLink to='/courses/12th'>Class XII</NavLink>
                </li>
                <li>
                  <NavLink to='/courses/13th'>Class XIII</NavLink>
                </li>
                <li>
                  <NavLink to='/courses/junior-division'>Junior Division</NavLink>
                </li>
                <li>
                  <NavLink to='/courses/TET-STET'>TET/STET</NavLink>
                </li>
              </ul>
            </li>
            <li><NavLink to="/admission">Admission</NavLink>
            <ul className='sub-menu-admission'>
                <li>
                  <NavLink to='/admission/admissionprocess'>Admission Process</NavLink>
                </li>
                <li>
                  <NavLink to='/admission/applyonline'>Apply Online</NavLink>
                </li>
                <li>
                  <NavLink to='/admission/applyforcrashcourse'>Apply for Crash Courses</NavLink>
                </li>
              </ul>
            </li>
            <li><NavLink to="/studentzone">Student Zone</NavLink>
            <ul className='sub-menu-student-zone'>
                <li>
                  <NavLink to='/studentzone/downloads'>Downloads</NavLink>
                </li>
                <li>
                  <NavLink to='/studentzone/payonline'>Pay Online</NavLink>
                </li>
                <li>
                  <NavLink to='/studentzone/samplepapers'>Sample Papers</NavLink>
                </li>
                <li>
                  <NavLink to='/studentzone/results'>Results</NavLink>
                </li>
              </ul>
            </li>
            <button className='btn' onClick={handleNavigateToSignin}>Sign In</button>
            
            </div>
            <div className="mobile-menu-icon" onClick={handleClick}>
            {click?
                (<FaTimes size={20} style={{color:"white"}}/>):
                (<FaBars size={20} style={{color:"white"}}/>)
            }
    </div>
        </div>
        <div className='announcement'>
        <div className='announcement-img'>
        {/* <img src={Announcements} alt="announcements.svg"/> */}
        {/* {AnnouncementsImage} */}
        {width > 1000 ? (
        <img src={Announcements} alt="AnnouncementsImage" />
      ) : (
        <img src={AnnouncementsMobile} alt="AnnouncementsImage" />
      )}
        </div>
        <MarqueeModified message="New Batch for Class XII is starting from 12th May"/>
        </div>
    </>
  )
}

export default Navbar
