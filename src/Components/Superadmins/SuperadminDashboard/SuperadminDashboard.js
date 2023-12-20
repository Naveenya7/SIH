// SuperadminDashboard.js
import React from 'react';
import UsersChart from './UsersChart';
import CommunitiesChart from './CommunitiesChart';
import UsersTable from './UsersTable';
import AdminCard from './Cards/AdminCard';
import './SuperadminDashboard.css'; 
import Supernavbar from '../Supernavbar/Supernavbar';

const SuperadminDashboard = () => {
  return (
    <div>
      <Supernavbar/>
      <div className='charts'>
          <h2>User Growth Over Time</h2>
          <UsersChart />
       

        
          <h2>Community Engagement</h2>
          <CommunitiesChart />
          </div>
       
      

      <AdminCard />

      <h2>Active Users</h2>
      <UsersTable />
    </div>
  );
};

export default SuperadminDashboard;
