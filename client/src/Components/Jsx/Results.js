import React from 'react'
// import Topper from '../svgs/topper.svg'
// import SecondTopper from '../svgs/second-topper.svg'
// import OurResults from '../svgs/OurResults.svg'
import '../Styles/Results.css'
import CarouselLong from './CarouselLong'

const Results = () => {
  return (
    <>
    <div className='sign-up-bg'>
        <p className='our-results'>Our Results</p>
        {/* <img src={OurResults} alt="Our Results"/> */}
        {/* <div className='images'>
            <img src={SecondTopper} alt="Toppers Image"/>
            <img src={Topper} alt="Toppers Image" className='second-image'/>
        </div> */}
        <CarouselLong />
        <div className='lower-section-results'>
            .
        </div>
        </div>
    </>
  )
}

export default Results