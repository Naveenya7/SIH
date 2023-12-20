import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const EnvironmentalImpactChart = () => {
  const beforeData = [
    { name: 'Carbon Footprint Reduction', value: 20 },
    { name: 'Resource Conservation', value: 10 },
  ];

  const afterData = [
    { name: 'Carbon Footprint Reduction', value: 70 },
    { name: 'Resource Conservation', value: 30 },
  ];

  const COLORS = ['#008000', '#00CED1']; // Green and Turquoise

  return (
    <div style={{ margin: '20px auto', textAlign: 'center' }}>
      <h2>Environmental Impact Metrics</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Before Recycling App</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={beforeData}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            >
              {beforeData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </div>
        <div>
          <h3>After Recycling App</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={afterData}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            >
              {afterData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalImpactChart;
