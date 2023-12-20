import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const wasteCategories = ['Composted', 'Recycled', 'Landfill'];

const dataBeforeApp = [
  { name: 'Composted', value: 15 },
  { name: 'Recycled', value: 30 },
  { name: 'Landfill', value: 55 },
];

const dataAfterApp = [
  { name: 'Composted', value: 20 },
  { name: 'Recycled', value: 40 },
  { name: 'Landfill', value: 40 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const DomesticWasteChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: 'white' }}>Before GreenBin</h3>
        <PieChart width={300} height={300}>
          <Pie data={dataBeforeApp} dataKey="value" nameKey="name" cx={150} cy={150} outerRadius={80} fill="#8884d8">
            {dataBeforeApp.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div style={{ textAlign: 'center'  }}>
        <h3 style={{ color: 'white' }}>After GreenBin</h3>
        <PieChart width={300} height={300}>
          <Pie data={dataAfterApp} dataKey="value" nameKey="name" cx={150} cy={150} outerRadius={80} fill="#82ca9d">
            {dataAfterApp.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DomesticWasteChart;
