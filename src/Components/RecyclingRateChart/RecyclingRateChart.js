import React, { useRef, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RecyclingRateChart = () => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // You can adjust the threshold based on your needs
    );

    observer.observe(chartRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  const data = [
    { month: 'Jan', rate: 20 },
    { month: 'Feb', rate: 25 },
    { month: 'Mar', rate: 30 },
    // Add more data points for each month
  ];

  return (
    <div ref={chartRef} style={{ margin: '20px auto', textAlign: 'center' }}>
      <h2>Recycling Rates Over Time</h2>
      <BarChart
        width={600}
        height={300}
        data={isVisible ? data : []} // Show data only when the chart is visible
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rate" fill="#008000" />
      </BarChart>
    </div>
  );
};

export default RecyclingRateChart;
