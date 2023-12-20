import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import SuperadminsLogin from './Components/Superadmins/SuperadminsLogin';
import Home from './Components/Pages/Home';
import Adminslogin from './Components/Admins/Adminslogin';
import Superadminpages from './Components/Superadmins/Superadminpages/Superadminpages';
import CommunityManagement from './Components/Superadmins/CommunityManagement/CommunityManagement';
import SuperadminDashboard from './Components/Superadmins/SuperadminDashboard/SuperadminDashboard';
import Supernavbar from './Components/Superadmins/Supernavbar/Supernavbar';
import DailyLogPage from './Components/Superadmins/DailyLogs/DailyLogs';
import Superadminlogout from './Components/Superadmins/Superadminlogout';
import EmployeeManagement from './Components/Admins/Employeemanagement/Employeemanagement';
import AboutUs from './Components/Pages/AboutUs';
import Helpandsupport from './Components/Pages/Helpandsupport';
import Logo from './Components/Logo';


function App() {
  

  
 
  

  return (
    <Router>
      <div className="background-container">
        
      <Routes>
        <Route path="/" element={<Home />} />
        
        

        
        

        <Route path="/superadmins" element={<Superadminpages/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/superadminlogout" element={<Superadminlogout/>} />
        <Route path="/employeemanagement" element={<EmployeeManagement/>} />
       
        <Route path="/helpandsupport" element={<Helpandsupport/>} />
       
        <Route path="/communitymanagement" element={<CommunityManagement/>} />
        <Route path="/dashboard" element={<SuperadminDashboard/>} />
        <Route path="/dailylogs" element={<DailyLogPage/>} />
        <Route path="/superadmins-login" element={<SuperadminsLogin/>} />
        <Route path="/admins-login" element={<Adminslogin/>} />
        
      </Routes>
      </div>
    </Router>
  );
}
 export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import './App.css';
// import SuperadminsLogin from './Components/Superadmins/SuperadminsLogin';
// import Home from './Components/Pages/Home';
// import Adminslogin from './Components/Admins/Adminslogin';
// import Superadminpages from './Components/Superadmins/Superadminpages/Superadminpages';
// import CommunityManagement from './Components/Superadmins/CommunityManagement/CommunityManagement';
// import SuperadminDashboard from './Components/Superadmins/SuperadminDashboard/SuperadminDashboard';

// function App() {
  
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/superadmins-login"
//           element={<SuperadminsLogin  />}
//         />
//         <Route
//           path="/admins-login"
//           element={<Adminslogin/>}
//         />
//         <Route path="/superadmins" element={<Superadminpages/>} />
//         <Route path="/communitymanagement" element={<CommunityManagement/>} />
//         <Route path="/dashboard" element={<SuperadminDashboard/>} />
//       </Routes>
      
//     </Router>
//   );
// }

// export default App;

