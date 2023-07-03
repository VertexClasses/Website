import React, { useState,useEffect} from 'react'
import Navbar from '../Components/Jsx/Navbar'
import Hero from '../Components/Jsx/Hero'
import Methodology from '../Components/Jsx/Methodology'
import CoursesOffered from '../Components/Jsx/CoursesOffered'
import Results from '../Components/Jsx/Results'
import ContactUs from '../Components/Jsx/ContactUs'
import Footer from '../Components/Jsx/Footer'
import Signup from '../Components/Jsx/Signup'

const RouteHome = () => {
  const [showUp,setShowUp]=useState(true);
  const callStudentZone = async() =>{
    try{
        const res = await fetch('/studentzone',{
            method:"GET",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        console.log(data);
        setShowUp(false);
        
        if(res.ok)
        {
            console.log("Student has logged in and the student zone page is active");
        }
        else
        {
            //if error means the user isn't logged in
            const error = new Error(res.error);
            throw error;
        }
    }catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    callStudentZone();
},[]);

  return (
    <>
        <Navbar />
        <Hero />
        <Methodology />
        <CoursesOffered />
        <Results />
        <ContactUs />
        {showUp?
        <Signup />:<div></div>
        }
        <Footer />
    </>
  )
}

export default RouteHome