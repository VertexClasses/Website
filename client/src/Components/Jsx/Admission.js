import React from 'react'
import "../Styles/Admission.css"

const Admission = () => {
  return (
    <>
        <div className='sign-up-bg'>
        <div className='admission-wrapper'>
            <p className='admission-heading'>Admission Process</p>
            <p className='admission-heading2'>How to Apply</p>
            <p className='admission-heading3'>ONLINE APPLICATION FORM:</p>
            <p className='admission-content'>
            You can fill an Online Application form through our website by making payment of ₹ 350/-.<br />
            • Log on to www.vertexclasses.co.in<br />
            • Click on Admission 2023 link on the home page of www.vertexclasses.co.in<br />
            • Fill the Online Application Form and submit.<br />
            </p>
            <p className='admission-heading3'>APPLICATION FORM FEE:</p>
            <p className='admission-content'>
            Offline Application Form fee 500/- onlyOnline Application Form fee 350/- only(You need not to purchase an OMR Application Form if you have already filled an Online Application form)<br />
            FOR COURSE WHERE ADMISSION MODE IS DIRECT<br />
            • You can fill Online Application Form minimum two days before Class Commencement Date<br />
            • You can also send completely filled OMR Application Form with recent Passport size color photograph to Admission Office.<br />
            • For smooth completion of Admission Process, your duly filled Application Form must reach us before the commencement of course.<br />
            </p>
            <p className='admission-content'>
            FOR COURSE WHERE ADMISSION MODE IS V-NET
            • You can fill Online Application Form two days before V-NET Date.
            • You can also send completely filled OMR Application Form with recent Passport size color photograph to our Admission Office.
            </p>     
        </div>
        </div>
    </>
  )
}

export default Admission