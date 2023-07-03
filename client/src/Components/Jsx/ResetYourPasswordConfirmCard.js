import React from 'react';
import '../Styles/SignUpCard.css';
import { useNavigate } from 'react-router-dom';

const ResetYourPasswordConfirmCard = () => {
  const navigate=useNavigate();
  const handleNewPassword=()=>{
    navigate("/password-changed-successfully")
  }
  return (
    <div className='sign-up-card-container'>
    <span className='heading-sign-up'>Reset Your Password</span>
    <div className='form-group'>
        <label htmlFor='password' className='confirmpassword-label'>Password:</label>
        <input type='password' className='sign-up-password' />
      </div>
      <div className='form-group'>
        <label htmlFor='confirm-password' className='confirmpassword-label'>Confirm Password:</label>
        <input
          type='password'
          className='sign-up-confirmpassword'
        />
      </div>
      <div className='sign-up-buttons'>
        <button className='sign-up-register' onClick={handleNewPassword}>Submit</button>
      </div>
    </div>
  );
};

export default ResetYourPasswordConfirmCard;
