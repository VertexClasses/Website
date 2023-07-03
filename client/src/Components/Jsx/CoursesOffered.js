import React from 'react'
import '../Styles/CoursesOffered.css'
import JeeMainAdvanced from '../svgs/JeeMainAdvanced.svg'
import JeeMain from '../svgs/JeeMain.svg'
import NEET from '../svgs/Neet.svg'
import JuniorDivision from '../svgs/JuniorDivision.svg'

const CoursesOffered = () => {
  return (
    <>
    <div className='sign-up-bg'>
        <p className='title-courses-offered'>Courses Offered</p>
        <div className='courses-offered'>
        <div className='course-offered'>
        <img src={JeeMainAdvanced} alt="Jee (Main + Advanced)" className='course-card'/>
        </div>
        <div className='course-offered'>
        <img src={JeeMain} alt="Jee Main" className='course-card'/>
        </div>
        <div className='course-offered'>
        <img src={NEET} alt="NEET" className='course-card'/>
        </div>
        <div className='course-offered'>
        <img src={JuniorDivision} alt="Junior Division" className='course-card'/>
        </div>
        </div>
        <div className='lower-section-coursesoffered'>.</div>
        </div>
    </>
  )
}

export default CoursesOffered