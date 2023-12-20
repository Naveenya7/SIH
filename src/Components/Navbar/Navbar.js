import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const navigate = useNavigate();
  
  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const handleSuperadminsClick = () => {
    navigate('/superadmins-login');
    setDropdownVisibility(false);
  };
  const handleadminsClick = () => {
    navigate('/admins-login');
    setDropdownVisibility(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="Images/logo.png" alt="GreenVouchers Logo" className="logo-image" />
        <span className="logo-title">GreenVouchers</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/aboutus" className="navbar-link">
            About Us
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/helpandsupport" className="navbar-link">
            Help and Support
          </Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/collection-centers" className="navbar-link">
            Collection Centers
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/business-partnerships" className="navbar-link">
            Business Partnerships
          </Link>
        </li> */}
        <li className="navbar-item">
          <div className="login-container">
            <button className="logout-button" onClick={toggleDropdown}>
              Login
            </button>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <button className="dropdown-link" onClick={handleSuperadminsClick}>
                  Superadmins
                </button>
                <button className="dropdown-link" onClick={handleadminsClick}>
                  Admins
                </button>
                
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

