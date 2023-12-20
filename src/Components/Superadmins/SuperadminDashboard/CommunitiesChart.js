// CommunitiesChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CommunitiesChart.css'; // Import the CSS file

const CommunitiesChart = () => {
  const data = [
    { name: 'January', communities: 30 },
    { name: 'February', communities: 25 },
    { name: 'March', communities: 40 },
    // Add more data points as needed
  ];

  return (
    <div className="CommunitiesChart"> {/* Apply the CommunitiesChart class */}
      <h2>Communities Chart</h2>
      <div className="chart-container"> {/* Apply the chart-container class */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="communities" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CommunitiesChart;
