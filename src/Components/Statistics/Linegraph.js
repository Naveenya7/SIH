
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  { time: 'Jan', beforeApp: 30, afterApp: 40 },
  { time: 'Feb', beforeApp: 35, afterApp: 45 },
  { time: 'Mar', beforeApp: 40, afterApp: 50 },
 
];

const RecyclingRateChart = () => {
  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="beforeApp" name="Before GreenBin" stroke="#8884d8" />
      <Line type="monotone" dataKey="afterApp" name="After GreenBin" stroke="#82ca9d" />
    </LineChart>
  );
};

export default RecyclingRateChart;
