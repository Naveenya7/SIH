// UsersChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './UsersChart.css'; // Import the CSS file

const UsersChart = () => {
  const data = [
    { name: 'January', users: 200 },
    { name: 'February', users: 150 },
    { name: 'March', users: 300 },
    // Add more data points as needed
  ];

  return (
    <div className="UsersChart"> {/* Apply the UsersChart class */}
      <h2>Users Chart</h2>
      <div className="chart-container"> {/* Apply the chart-container class */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersChart;
