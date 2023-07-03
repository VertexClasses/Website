import React from 'react'
import '../Styles/SignInCard.css'
import "../Styles/Signup.css"
import SignUpPageLogo from "../svgs/MainLogo.svg"
import SignUpFooter from "../svgs/sign-up-footer.svg"
import SignInCard from './SignInCard'

const SignIn = () => {
    return (
        <>
        <div className='sign-up-bg'>
        <div className='sign-in-page-wrapper'>
            <div className='sign-up-page-logo'>
                <img src={SignUpPageLogo} alt="logo" className='sign-up-page-logo'/>
            </div>
            <div className='sign-up-card'>
                <SignInCard />
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

export default SignIn