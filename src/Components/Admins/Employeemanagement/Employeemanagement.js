// EmployeeManagement.js

import React, { useState } from 'react';
import './Employeemanagement.css';
import Adminnavbar from '../Adminnavbar/Adminnavbar';

const EmployeeManagement = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    contactNumber: '',
  });

  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: 'EcoCare Thrissur',
      location: 'Thrissur, Kerala',
      contactPerson: 'Jane Smith',
      contactNumber: '9876543211',
      employees: [
        { id: 101, name: 'John Doe', position: 'Manager', contactNumber: '1234567890' },
        { id: 102, name: 'Alice Johnson', position: 'Staff', contactNumber: '9876543210' },
      ],
    },
    {
      id: 1,
      name: 'GreenEarth Kozhikode',
      location: 'Kozhikode, Kerala',
      contactPerson: 'Jane Smith',
      contactNumber: '9876543211',
      employees: [
        { id: 101, name: 'David', position: 'Manager', contactNumber: '1234567890' },
        { id: 102, name: 'Sheela', position: 'Staff', contactNumber: '9876543210' },
      ],
    },
    {
      id: 1,
      name: 'NatureSavers Trivandrum',
      location: 'Trivandrum, Kerala',
      contactPerson: 'Jane Smith',
      contactNumber: '9876543211',
      employees: [
        { id: 101, name: 'Lucy', position: 'Manager', contactNumber: '1234567890' },
        { id: 102, name: 'Rosy', position: 'Staff', contactNumber: '9876543210' },
      ],
    },
    
  ]);

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = (communityId) => {
    const updatedCommunities = communities.map((community) =>
      community.id === communityId
        ? { ...community, employees: [...community.employees, { id: Date.now(), ...newEmployee }] }
        : community
    );

    setCommunities(updatedCommunities);
    setNewEmployee({ name: '', position: '', contactNumber: '' });
  };

  const handleRemoveEmployee = (communityId, employeeId) => {
    const updatedCommunities = communities.map((community) =>
      community.id === communityId
        ? { ...community, employees: community.employees.filter((employee) => employee.id !== employeeId) }
        : community
    );

    setCommunities(updatedCommunities);
  };

  return (
    <div>
      <Adminnavbar />
      <div className='employee-management-container'>
        <h2>Employee Management</h2>
        {communities.map((community) => (
          <div key={community.id} className='community-section'>
            <h3 className='community-name'>{community.name}</h3>
            <div className='new-employee-form'>
              <input
                type='text'
                name='name'
                placeholder='Employee Name'
                value={newEmployee.name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='position'
                placeholder='Position'
                value={newEmployee.position}
                onChange={handleChange}
              />
              <input
                type='text'
                name='contactNumber'
                placeholder='Contact Number'
                value={newEmployee.contactNumber}
                onChange={handleChange}
              />
              <button onClick={() => handleAddEmployee(community.id)}>Add Employee</button>
            </div>
            <ul className='employee-list'>
              {community.employees.map((employee) => (
                <li key={employee.id}>
                  <div>
                    <h4>{employee.name}</h4>
                    <p>{employee.position}</p>
                    <p>Contact Number: {employee.contactNumber}</p>
                  </div>
                  <button onClick={() => handleRemoveEmployee(community.id, employee.id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeManagement;
