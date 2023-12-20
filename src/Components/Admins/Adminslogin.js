// SuperadminsLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminslogin.css'; // Import the SuperadminsLogin styles
import Navbar from '../Navbar/Navbar';

const AdminsLogin = ({handleLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleadminsClick = () => {
    // Perform login logic (you may want to add authentication logic here)
    // ...

    // Call handleLogin to hide the Navbar
    

    // Navigate to the Superadmins Dashboard or another page
    navigate('/employeemanagement');
  };

  return (
    <div>
      <Navbar/>
    <div className="admins-login-container">
      <h2>Admins Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleadminsClick}>Login</button>
    </div>
    </div>
  );
};

export default AdminsLogin;