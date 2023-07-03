import React from 'react'
import "../Styles/Signup.css"
import SignUpPageLogo from "../svgs/MainLogo.svg"
import SignUpFooter from "../svgs/sign-up-footer.svg"
import ResetYourPasswordConfirmCard from './ResetYourPasswordConfirmCard'

const ResetYourPasswordConfirm = () => {
  return (
    <>
    <div className='sign-up-bg'>
    <div className='sign-up-page-wrapper'>
        <div className='sign-up-page-logo'>
            <img src={SignUpPageLogo} alt="logo" />
        </div>
        <div className='sign-up-card'>
            <ResetYourPasswordConfirmCard />
        </div>
        </div>
        <div className='sign-up-lower-section-wrapper'>
            <div className='sign-up-lower-section-left'>.</div>
            <div className='sign-up-lower-section-right'>
                <img src={SignUpFooter} alt="footer" />
            </div>
        </div>
        </div>
    </>
  )
}

export default ResetYourPasswordConfirm