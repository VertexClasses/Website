import React from 'react'
import '../Styles/Subsection.css'
import MarqueeForSubsection from './MarqueeForSubsection';
import { useNavigate } from 'react-router-dom';

const SubsectionTETSTET = () => {
    const navigate = useNavigate();
    const handleNavigateToRegistrationPanel=()=>{
        navigate("/courses/TET-STET/registration");
      }
    return (
        <>
        <div className='subsection'>
            <div className='heading-subsection'>TET / STET</div>
            <MarqueeForSubsection />
            <p className='subsection-content'>
            Vertex Classes offers a specialized coaching program for the Super TET (Teacher Eligibility Test) or STET (State Teacher Eligibility Test) exam.<br /><br />

This program is designed to assist aspiring teachers in preparing for these competitive exams, essential for securing teaching positions in government schools. The Super TET course at Vertex Classes covers all the relevant subjects, including child development and pedagogy, language proficiency, mathematics, and environmental studies.<br /><br />

With experienced faculty and comprehensive study materials, the course focuses on strengthening conceptual understanding, teaching methodologies, and problem-solving skills. Vertex Classes aims to equip candidates with the necessary knowledge and confidence to excel in the Super TET or STET exam and embark on a successful teaching career.<br /><br />
            </p>
            <div className='btn-brochure-apply'>
            <button className='btn-brochure'>Brochure 23-24</button>
            <button className='btn-apply' onClick={handleNavigateToRegistrationPanel}>Apply Now</button>
            </div>
            </div>
        </>
    )
}
 
export default SubsectionTETSTET;