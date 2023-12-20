import React, { useState, useRef, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './UserGrowthChart.css';

const UserGrowthChart = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('down');
  const chartRef = useRef();

  const handleScroll = () => {
    const rect = chartRef.current.getBoundingClientRect();
    const currentScrollDirection = rect.top < window.innerHeight && rect.bottom >= 0 ? 'down' : 'up';
    setScrollDirection(currentScrollDirection);
    setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = [
    { month: 'Jan', users: 100 },
    { month: 'Feb', users: 150 },
    { month: 'Mar', users: 200 },
  ];

  const milestones = [
    { month: 'Mar', event: 'Milestone 1' },
  ];

  return (
    <div className="chart-container" ref={chartRef}>
      <h2>Total Users Over Time</h2>
      <div>
        <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="rgb(34, 126, 34)" activeDot={{ r: 8 }} />
          {milestones.map((milestone, index) => (
            <line key={index} x1={index * (600 / (data.length - 1))} y1={300} x2={index * (600 / (data.length - 1))} y2={0} stroke="red" />
          ))}
          {milestones.map((milestone, index) => (
            <circle
              key={index}
              cx={index * (600 / (data.length - 1))}
              cy={0}
              r={5}
              fill="red"
              onMouseOver={() => console.log(`Event: ${milestone.event}`)}
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default UserGrowthChart;
