import React from 'react';
import './DailyLogs.css';
import Supernavbar from '../Supernavbar/Supernavbar';

const DailyLogPage = () => {
  
  const dailyLogData = [
    
  ];

  return (
    <div>
      <Supernavbar />
      <div className="daily-log-page">
        <h1>Daily Logs</h1>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>DateTime</th>
              <th>Location</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {dailyLogData.map((log, index) => (
              <tr key={index}>
                <td>{log.employeeName}</td>
                <td>{log.dateTime}</td>
                <td>{log.location}</td>
                <td>{log.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyLogPage;
