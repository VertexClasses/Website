import React from 'react'
import "../Styles/Signup.css"
import "../Styles/SignIn.css"
import SignUpPageLogo from "../svgs/MainLogo.svg"
import SignUpFooter from "../svgs/sign-up-footer.svg"
import SignUpCard from './SignUpCard'

const Signup = () => {
  return (
    <>
    <div className='sign-up-bg'>
    <div className='sign-up-page-wrapper sign-up-page-wrapper1'>
        <div className='sign-up-page-logo'>
            <img src={SignUpPageLogo} alt="logo" className='sign-up-page-logo'/>
        </div>
        <div className='sign-up-card'>
            <SignUpCard />
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

export default Signup