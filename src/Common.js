import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
// import './App.css';
import SuperadminsLogin from './Components/Superadmins/SuperadminsLogin';
import Home from './Components/Pages/Home';
import Adminslogin from './Components/Admins/Adminslogin';
function Common() {
  return (
    <>
    {/* <Particlebackground/> */}
    {/* <video src='./BGVIDEO.mp4' autoPlay loop muted id="background-video" /> */}
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/superadmins-login' element={<SuperadminsLogin />} />
        <Route path='/admins-login' element={<Adminslogin />} />
          
          

        </Routes>
      </Router>
    </>
  //   <div>
  //   <ParticlesBackground />
  //   {/* Your other components and content */}
  // </div>
  );
}

export default Common;
