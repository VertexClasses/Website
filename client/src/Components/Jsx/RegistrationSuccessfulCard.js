import React from 'react';
import '../Styles/SignUpCard.css';
import Confirmation from '../svgs/Confirmation.svg';
import { NavLink } from 'react-router-dom';

const RegistrationSuccessfulCard = () => {
  return (
    <div className='sign-up-card-container to-down'>
    <span className='heading-sign-up'>Student Registration Panel</span>
    <div className='sign-up-success'><img src={Confirmation} alt="check" /><span className='sign-up-success-text'>Registration Successful</span></div>
      <div className='sign-up-success-content'>
       Your Registration was successful!<br />
We're excited to have you join our learning community and look forward to supporting your educational journey.
      </div>
      <div className='extreme-lower-section'>
        <NavLink to="/" className='sign-in-redirect-large'>Keep Learning</NavLink>
      </div>
    </div>
  );
};

export default RegistrationSuccessfulCard;
