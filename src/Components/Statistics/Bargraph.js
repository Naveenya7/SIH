
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  { time: 'Jan', recyclingRate: 30 },
  { time: 'Feb', recyclingRate: 35 },
  { time: 'Mar', recyclingRate: 40 },
 
];

const RecyclingComparisonChart = () => {
  return (
    <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="recyclingRate" fill="#8884d8" name="Recycling Rate in Kerala" />
    </BarChart>
  );
};

export default RecyclingComparisonChart;
