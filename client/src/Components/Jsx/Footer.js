import React from 'react'
import '../Styles/Footer.css'
import Logo from '../svgs/logo.svg'
import Location from '../svgs/location.svg'
import Mail from '../svgs/email.svg'
import Phone from '../svgs/phone.svg'
import Copyright from '../svgs/copyright.svg'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='first-section'>
                <li className='first-section-first'><img src={Logo} alt="Vertex Classes Logo"/></li>
                <li className='first-section-second'><img src={Location} alt="Landmark" style={{marginRight:"1rem"}}/><span className='reach-out'>Gautam Nagar Behind D.C. Singh Petrol Pump Begusarai</span></li>
                <li className='first-section-third'><img src={Mail} alt="Email ID" style={{marginRight:"1rem"}}/><span className='reach-out'>vertexclassesbegusarai@gmail.com</span></li>
                <li className='first-section-fourth'><img src={Phone} alt="Phone No" style={{marginRight:"1rem"}}/><span className='reach-out'>+91 9102066606</span></li>
            </div>
            <div className='second-section'>
                <li className='heading'>Courses and Fee</li>
                <li className='first-section-first'><NavLink>Jee (Main + Advanced)</NavLink></li>
                <li className='first-section-first'><NavLink>Jee (Main)</NavLink></li>
                <li className='first-section-first'><NavLink>NEET</NavLink></li>
                <li className='first-section-first'><NavLink to="junior-division">Junior Division</NavLink></li>
            </div>
            <div className='third-section'>
                <li className='heading'>Quick Links</li>
                <li className='first-section-first'><NavLink>Apply Online</NavLink></li>
                <li className='first-section-first'><NavLink>Crash Course</NavLink></li>
                <li className='first-section-first'><NavLink>Academic Team</NavLink></li>
                <li className='first-section-first'><NavLink>Study Material</NavLink></li>
            </div>
            <div className='fourth-section'>
                <li className='heading'><span className='heading-follow-us'>Follow Us</span></li>
                <li className='first-section-first'>
                    <div className='socials'>
                    <a href="https://www.facebook.com/Prazz51/" rel="noreferrer" target="_blank"><FaFacebook size={20} style={{color:"white",marginRight:"1rem"}} /></a>
                    <a href="https://www.instagram.com/ipranavprashant/" rel="noreferrer" target="_blank"><FaInstagram size={20} style={{color:"white",marginRight:"1rem"}} /></a>
                    <a href="https://www.instagram.com/ipranavprashant/" rel="noreferrer" target="_blank"><FaYoutube size={20} style={{color:"white",marginRight:"1rem"}} /></a>                   
                    <a href="https://twitter.com/ipranavprashant" rel="noreferrer" target="_blank"><FaTwitter size={20} style={{color:"white",marginRight:"1rem"}} /></a>
                    <a href="https://www.linkedin.com/in/pranavprashant/" rel="noreferrer" target="_blank"><FaLinkedinIn size={20} style={{color:"white",marginRight:"1rem"}} /></a>
                    </div>
                </li>
                <li className='first-section-first'><small className='DnD'>Designed and Developed By</small></li>
                <li className='first-section-first'><small className='names'>Pranav Prashant<br />Shubham Kumar</small></li>
            </div>
        </div>
        <div className='lower-footer-section'>
            <p className='lower-footer-text'>Copyright <img src={Copyright} alt="copyright symbol" className='copyright' style={{marginRight:"0.5rem",marginLeft:"0.5rem"}}/> Vertex Classes Begusarai<span style={{marginLeft:"2rem"}}>All Rights Reserved</span></p>
        </div>
    </>
  )
}

export default Footer