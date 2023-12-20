import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Card = ({ communityName, totalWasteCollected, totalWasteRecycled, imageUrl }) => {
  const data = [
    { name: 'Waste Collected', value: totalWasteCollected },
    { name: 'Waste Recycled', value: totalWasteRecycled },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="card">
      <img src={imageUrl} alt={communityName} />
      <div className="card-content">
        <h2>{communityName}</h2>
        <p>Total Waste Collected: {totalWasteCollected} kg</p>
        <p>Total Waste Recycled: {totalWasteRecycled} kg</p>

        <div className="chart-container">
          <PieChart className="pie-chart" width={300} height={150}>
            <Pie data={data} cx={150} cy={75} innerRadius={30} outerRadius={45} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Card;
