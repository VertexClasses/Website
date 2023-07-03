import React from 'react'
import '../Styles/Subsection.css'
import MarqueeForSubsection from './MarqueeForSubsection';
import { useNavigate } from 'react-router-dom';

const SubsectionJuniorDivision = () => {
    const navigate = useNavigate();
    const handleNavigateToRegistrationPanel=()=>{
        navigate("/courses/junior-division/registration");
      }
    return (
        <>
        <div className='subsection'>
            <div className='heading-subsection'>Junior Division</div>
            <MarqueeForSubsection />
            <p className='subsection-content'>
            Vertex Classes offers a specialized Junior Division course catering to students from Class V to X.<br /><br />

This course aims to provide comprehensive coaching for competitive exams such as the National Talent Search Examination (NTSE) and various Olympiads. The Junior Division course at Vertex Classes focuses on enhancing students' logical reasoning, problem-solving skills, and critical thinking abilities.<br /><br /> 

The curriculum covers subjects like Mathematics, Science, English, and Mental Ability, preparing students to excel in these prestigious examinations. With experienced faculty members, well-designed study materials, and regular practice tests, Vertex Classes aims to nurture young minds, helping them achieve success in NTSE and Olympiad exams, and laying a strong foundation for their academic and intellectual growth.<br /><br />
            </p>
            <div className='btn-brochure-apply'>
            <button className='btn-brochure'>Brochure 23-24</button>
            <button className='btn-apply' onClick={handleNavigateToRegistrationPanel}>Apply Now</button>
            </div>
            </div>
        </>
    )
}
 
export default SubsectionJuniorDivision;