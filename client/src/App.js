import React from 'react'
import {Routes,Route} from 'react-router-dom'
import RouteHome from "./Routes/RouteHome"
import RouteAboutUs from "./Routes/RouteAboutUs"
import RouteCourses from "./Routes/RouteCourses"
import RouteAdmission from "./Routes/RouteAdmission"
import RouteStudentZone from "./Routes/RouteStudentZone"
import RouteJuniorDivision from "./Routes/RouteJuniorDivision"
import NotFound from './Components/Jsx/404'
import RouteSignUp from './Routes/RouteSignUp'
import RouteSignUpSuccess from './Routes/RouteSignUpSuccess'
import RouteSignUpOTP from './Routes/RouteSignUpOTP'
import RouteSignIn from './Routes/RouteSignIn'
import RouteForgetPassword from './Routes/RouteForgetPassword'
import RouteSetNewPassword from './Routes/RouteSetNewPassword'
import RoutePasswordChangedSuccessfully from './Routes/RoutePasswordChangedSuccessfully'
import Route11th from './Routes/Route11th'
import Route12th from './Routes/Route12th'
import Route13th from './Routes/Route13th'
import RouteTet from './Routes/RouteTet'
import RouteRegistration from './Routes/RouteRegistration'
import RouteRegistrationSuccessful from './Routes/RouteRegistrationSuccessful'
import RouteLogout from './Routes/RouteLogout'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RouteHome />}/>        <Route path="/aboutus" element={<RouteAboutUs />}/> 
        <Route path="/courses" element={<RouteCourses />}/> 
        <Route path="/admission" element={<RouteAdmission />}/>
        <Route path="/admission/admissionprocess" element={<RouteAdmission />}/>
        <Route path="/studentzone" element={<RouteStudentZone />}/>
        <Route path="/junior-division" element={<RouteJuniorDivision />}/>
        <Route path="/sign-up" element={<RouteSignUp />}/>
        <Route path="/otp" element={<RouteSignUpOTP />}/>
        <Route path="/sign-in" element={<RouteSignIn />}/>
        <Route path="/successfully-registered" element={<RouteSignUpSuccess />}/>
        <Route path="/reset-password" element={<RouteForgetPassword />}/>
        <Route path="/set-new-password" element={<RouteSetNewPassword />}/>
        <Route path="/password-changed-successfully" element={<RoutePasswordChangedSuccessfully />}/>
        <Route path="/courses/11th" element={<Route11th />}/>
        <Route path="/courses/12th" element={<Route12th />}/>
        <Route path="/courses/TET-STET" element={<RouteTet />}/>
        <Route path="/courses/13th" element={<Route13th />}/>
        <Route path="/courses/junior-division" element={<RouteJuniorDivision />}/>
        <Route path="/courses/11th/registration" element={<RouteRegistration />}/>
        <Route path="/courses/12th/registration" element={<RouteRegistration />}/>
        <Route path="/courses/13th/registration" element={<RouteRegistration />}/>
        <Route path="/courses/junior-division/registration" element={<RouteRegistration />}/>
        <Route path="/courses/TET-STET/registration" element={<RouteRegistration />}/>
        <Route path="/registration/registration-successful" element={<RouteRegistrationSuccessful />}/>
        <Route path="/logout" element={<RouteLogout />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
    );
}

