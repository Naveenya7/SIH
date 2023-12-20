import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Supernavbar.css';

const Supernavbar = ({handlelogoutclick}) => {
  const navigate = useNavigate();

const handlesuperlogout=()=>{
  
  navigate('/superadminlogout');
} 
 

return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="Images/logo.png" alt="GreenVouchers Logo" className="logo-image" />
        <span className="logo-title">GreenVouchers</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/communitymanagement" className="navbar-link">
            Community Management
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dailylogs" className="navbar-link">
            Daily Logs
          </Link>
        </li>
        
        <li className="navbar-item">
          <div className="login-container">
            <button onClick={handlesuperlogout} >
              Logout
            </button>
            
               
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Supernavbar;
