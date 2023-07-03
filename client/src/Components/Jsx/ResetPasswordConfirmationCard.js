import React from 'react';
import '../Styles/SignUpCard.css';
import Confirmation from '../svgs/Confirmation.svg';
import { useNavigate } from 'react-router-dom';

const ResetPasswordConfirmation = () => {
  const navigate = useNavigate();
  const handleNavigateToSignin=()=>{
    navigate("/sign-in");
  }
  return (
    <div className='sign-up-card-container'>
    <span className='heading-sign-up'>Reset Your Password</span>
    <div className='sign-up-success'><img src={Confirmation} alt="check" /><span className='sign-up-success-text'>Your Password Reset is Successful</span></div>
    <div className='to-center-something'>
    <button className='sign-up-register' onClick={handleNavigateToSignin}>Sign In</button>
    </div>
    </div>
  );
};

export default ResetPasswordConfirmation;
