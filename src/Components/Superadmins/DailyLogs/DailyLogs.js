import React from 'react';
import './DailyLogs.css';
import Supernavbar from '../Supernavbar/Supernavbar';

const DailyLogPage = () => {
 

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
          {/* <tbody>
            {dailyLogData.map((log) =>
              log.communities.map((community, communityIndex) => (
                <tr key={`${log.date}-${communityIndex}`}>
                  <td>{'Employee Name'}</td> 
                  <td>{`${log.date}`}</td>
                  <td>{community.name}</td>
                  <td>{community.waste['Biodegradable']}</td>
                </tr>
              ))
            )}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default DailyLogPage;
