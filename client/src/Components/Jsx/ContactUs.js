import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ContactUs.css';
import ContactUsImage from '../svgs/contactUs.svg';

const ContactUs = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async(e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    // console.log('Name:', name);
    // console.log('Mobile No:', mobileNo);
    // console.log('Email:', email);
    // console.log('Message:', message);
    setName("");
    setMobileNo("");
    setEmail("");
    setMessage("");
    const res= await fetch("/message-me",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        name:name,
        phone:mobileNo,
        email:email,
        message:message,
      }),
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("BAD Request, please fill in all the entries properly");
    }
    else
    {
      window.alert("Thankyou for contacting us, we'll get back to you soon :)");
      navigate("/");
    }
  };

  return (
    <div className='sign-up-bg'>
    <div className='contact-us'>
      <p className='contact-us-heading'>Contact Us</p>
      <div className='divider'>
        <div className='contactus-left'>
          <img className='contact-us-image' src={ContactUsImage} alt="Man on cloud" />
        </div>
        <div>
          <form className='contactus-right' method="POST">
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor='phone'>Mobile No</label>
            <input type='number' id='phone' name='phone' value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
            <br />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor='message'>Message</label>
            <textarea type='text' id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <br />
            <div className='newButton'>
              <button className='btn' type='button' onClick={handleSend}>Send ➤</button>
            </div>
          </form>
        </div>
      </div>
      <div className='lower-section-contactus'>.</div>
    </div>
    </div>
  );
};

export default ContactUs;
