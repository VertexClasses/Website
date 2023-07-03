import React from 'react'
import '../Styles/Subsection.css'
import MarqueeForSubsection from './MarqueeForSubsection';
import { useNavigate } from 'react-router-dom';

const Subsection12th = () => {
    const navigate = useNavigate();
    const handleNavigateToRegistrationPanel=()=>{
      navigate("/courses/12th/registration");
    }
    return (
        <>
        <div className='subsection'>
            <div className='heading-subsection'>Class XII</div>
            <MarqueeForSubsection />
            <p className='subsection-content'>
            Vertex Classes offers comprehensive coaching programs for JEE ( Main + Advanced ), JEE Main, NEET, CBSE, and BSEB courses for Class XII students. 

The JEE ( Main + Advanced ) program is designed to prepare students for the highly competitive Joint Entrance Examination, which is essential for admission to prestigious engineering colleges in India. The JEE Main program focuses on building a strong foundation in physics, chemistry, and mathematics to excel in the JEE Main exam.<br /><br /> 

For aspiring medical professionals, the NEET program provides intensive coaching in biology, chemistry, and physics to crack the National Eligibility cum Entrance Test for medical admissions.<br /><br /> 

Additionally, Vertex Classes offers courses aligned with the CBSE and BSEB curricula for Class XII students, covering all subjects in a comprehensive and structured manner. With experienced faculty, rigorous study materials, and regular assessments, Vertex Classes strives to empower students with the knowledge and skills necessary for success in these crucial examinations.<br /><br />
            </p>
            <div className='btn-brochure-apply'>
            <button className='btn-brochure'>Brochure 23-24</button>
            <button className='btn-apply' onClick={handleNavigateToRegistrationPanel}>Apply Now</button>
            </div>
            </div>
        </>
    )
}
 
export default Subsection12th;