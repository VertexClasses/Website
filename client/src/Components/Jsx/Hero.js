import React from 'react'
import '../Styles/Hero.css'
// import HeroImage from '../svgs/HeroImage.svg'
import Carousel from './Carousel'
import HeroArrow from '../svgs/heroArrow.svg'
import HeroArrow2 from '../svgs/heroArrow2.svg'
import HeroStar from '../svgs/heroStar.svg'
import HeroStar1 from '../svgs/heroStar1.svg'
// import LetsPrepareToday from '../svgs/letspreparetoday.svg'
// import ForBetter from '../svgs/forbetter.svg'
// import Tomorrow from '../svgs/tomorrow.svg'
import HeroMarquee from './HeroMarquee'
// import Topper from '../svgs/topper.svg'
// import { useState,useEffect } from 'react'

const Hero = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);

  //   // Clean up event listener on unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <>
    <div className='sign-up-bg'>
     <div className='hero-section'> 
    
        <div className='left-section'>
            {/* <span className='lets-prepare-today'><img src={LetsPrepareToday} alt="Lets Prepare Today"/><span><img src={HeroStar} alt="star"/></span></span> */}
            <span className='lets-prepare-today'>Lets Prepare Today<span><img src={HeroStar} alt="star"/></span></span>
        
            <div className='second-line'>
            <img className='towards-right' src={HeroArrow} alt="towards-right"/>
            {/* <span className='for-better'><img src={ForBetter} alt="For Better"/></span> */}
            <span className='for-better'>For Better</span>
            </div>
            <span className='third-line'>
            {/* <span className='tomorrow'><span><img src={HeroStar1} alt="star"/></span><img src={Tomorrow} alt="Tomorrow"/></span> */}
            <span className='tomorrow'><span><img src={HeroStar1} alt="star"/></span>Tomorrow</span>
            <span><img src={HeroArrow2} alt="towards-left"/></span>
            </span>
        </div>
         <div className='right-section'>
         <div className="tag">
				Highlights
        </div>
        <div>
        <Carousel />
        </div>
        </div>
        </div>
        <div className='lower-hero-section'>
        <HeroMarquee />
        </div>
        </div>
    </>
  )
}

export default Hero