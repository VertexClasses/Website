import React from 'react';
import '../Styles/SignUpCard.css';
import Confirmation from '../svgs/Confirmation.svg';
import { NavLink } from 'react-router-dom';

const SignUpSuccessCard = () => {
  return (
    <div className='sign-up-card-container to-down'>
    <span className='heading-sign-up'>Sign Up</span>
    <div className='sign-up-success'><img src={Confirmation} alt="check" /><span className='sign-up-success-text'>Success</span></div>
      <div className='sign-up-success-content'>
      Welcome to Vertex Classes!<br />
We're excited to have you join our learning community and look forward to supporting your educational journey.
      </div>
      <div className='extreme-lower-section'>
        <NavLink to="/sign-in" className='sign-in-redirect-large'>Sign In Now</NavLink>
      </div>
    </div>
  );
};

export default SignUpSuccessCard;
