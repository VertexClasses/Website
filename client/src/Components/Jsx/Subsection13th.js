import React from 'react'
import '../Styles/Subsection.css'
import MarqueeForSubsection from './MarqueeForSubsection';
import { useNavigate } from 'react-router-dom';

const Subsection13th = () => {
    const navigate = useNavigate();
    const handleNavigateToRegistrationPanel=()=>{
        navigate("/courses/13th/registration");
      }
    return (
        <>
        <div className='subsection'>
            <div className='heading-subsection'>Class XIII</div>
            <MarqueeForSubsection />
            <p className='subsection-content'>
            Vertex Classes provides specialized coaching programs for Class XIII students aiming to crack JEE ( Main + Advanced ), JEE Main, and NEET exams.<br /><br />

The JEE ( Main + Advanced ) course is designed to prepare students comprehensively for the highly competitive Joint Entrance Examination, offering in-depth coverage of physics, chemistry, and mathematics.<br /><br /> 

The JEE Main program focuses on building a solid foundation in these subjects to excel in the JEE Main exam.<br /><br />

For aspiring medical professionals, the NEET course provides rigorous coaching in biology, chemistry, and physics, covering all essential topics to succeed in the National Eligibility cum Entrance Test.<br /><br />

With experienced faculty, comprehensive study materials, and regular assessments, Vertex Classes aims to equip Class XIII students with the knowledge and skills.<br /><br />
            </p>
            <div className='btn-brochure-apply'>
            <button className='btn-brochure'>Brochure 23-24</button>
            <button className='btn-apply' onClick={handleNavigateToRegistrationPanel}>Apply Now</button>
            </div>
            </div>
        </>
    )
}
 
export default Subsection13th;