import React from 'react'
import '../Styles/Methodology.css'
import MethodologyCard from './MethodologyCard'

const Methodology = () => {
  return (
    <>
    <div className='sign-up-bg'>
        <p className='title-methodology'>Our Methodology</p>
        <div className='methodology-cards'>
        <div className='for-space'>
          <MethodologyCard colorName="#FCD444"/>
          </div>
          <div className='for-space'>
          <MethodologyCard colorName="#FC8844"/>
          </div>
          <div className='for-space'>
          <MethodologyCard colorName="#44A2FC"/>
          </div>
          <div className='for-space'>
          <MethodologyCard colorName="#FC4451"/>
          </div>
        </div>
        <div className='lower-section-methodology'></div>
        </div>
    </>
  )
}

export default Methodology