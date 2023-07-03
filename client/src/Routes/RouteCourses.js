import React from 'react'
import Navbar from '../Components/Jsx/Navbar'
import Footer from '../Components/Jsx/Footer'
import Subsection11th from '../Components/Jsx/Subsection11th'
import Subsection12th from '../Components/Jsx/Subsection12th'
import Subsection13th from '../Components/Jsx/Subsection13th'
import SubsectionJuniorDivision from '../Components/Jsx/SubsectionJuniorDivision'
import SubsectionTET from '../Components/Jsx/SubsectionTET'

const RouteCourses = () => {
  return (
    <>
        <Navbar />
        <Subsection11th />
        <Subsection12th />
        <Subsection13th />
        <SubsectionJuniorDivision />
        <SubsectionTET />
        <Footer />
    </>
  )
}

export default RouteCourses