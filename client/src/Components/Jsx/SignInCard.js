import React from 'react';
import { useState } from 'react';
import '../Styles/SignUpCard.css';
import GoogleLogo from '../svgs/GoogleLogo.svg';
import SignInUserLogo from '../svgs/SignInUserLogo.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignUpCard = () => {
  const navigate = useNavigate();
    // const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = async(e) => {
      e.preventDefault(); // Prevent form submission and page refresh
      // console.log('Name:', name);
      // console.log('Mobile No:', mobileNo);
      // console.log('Email:', email);
      // console.log('Message:', message);

    //   setMobileNo("");
      setEmail("");
      setPassword("");
      const res= await fetch("/sign-in",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
        //   phone:mobileNo,
          email:email,
          password:password
        }),
      });
  
    //   const data = await res.json();
      if (res.ok) {
        // alert("You are successfully signed in:)");
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    };
  return (
    <div className='sign-up-card-container sign-in-card-container'>
    <div className='sign-in-first-section'>
    <span className='heading-sign-up'>Sign In</span>
    <img src={SignInUserLogo} alt="user" />
    </div>
    <form method='POST'>
      <div className='form-group'>
        <label htmlFor='email'>Email-Id:</label>
        <input type='email' className='sign-up-email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input type='password' className='sign-up-password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      </form>
        <button className='sign-in-register' onClick={handleSignIn}>Sign In</button>
        <button className='btn-sign-in-with-google'><span><img src={GoogleLogo} alt="google-logo" /></span><span className='sign-in-with-google'>Sign In with Google</span></button>
      <div className='extreme-lower-section-sign-in'>
      <div>
        <NavLink to="/reset-password" className='forgot-your-password'>Forgot Your Password?</NavLink>
        </div>
      <div>
        <p className='already-have-an-account'>Don't have an account yet?</p>
        <div>
        <NavLink to="/sign-up" className='sign-in-redirect'>Sign Up</NavLink>
        <NavLink to="/" className='sign-in-redirect'>Home</NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
