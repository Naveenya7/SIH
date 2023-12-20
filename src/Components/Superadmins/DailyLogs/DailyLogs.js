import React from 'react';
import './DailyLogs.css';
import Supernavbar from '../Supernavbar/Supernavbar';

const DailyLogPage = () => {
  const dailyLogData = [
    { date: '2023-12-01', communities: [
        { name: 'Trivandrum', waste: { 'Biodegradable': 200, 'Non-biodegradable': 500, 'Plastic': 100, 'Metal': 50, 'Paper': 100, 'Glass': 50, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kochi', waste: { 'Biodegradable': 150, 'Non-biodegradable': 400, 'Plastic': 80, 'Metal': 40, 'Paper': 100, 'Glass': 30, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Thrissur', waste: { 'Biodegradable': 180, 'Non-biodegradable': 450, 'Plastic': 90, 'Metal': 60, 'Paper': 80, 'Glass': 40, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kollam', waste: { 'Biodegradable': 160, 'Non-biodegradable': 420, 'Plastic': 70, 'Metal': 30, 'Paper': 120, 'Glass': 35, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kannur', waste: { 'Biodegradable': 140, 'Non-biodegradable': 380, 'Plastic': 60, 'Metal': 20, 'Paper': 90, 'Glass': 25, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
      ],
    },
    { date: '2023-12-02', communities: [
        { name: 'Trivandrum', waste: { 'Biodegradable': 210, 'Non-biodegradable': 520, 'Plastic': 110, 'Metal': 60, 'Paper': 110, 'Glass': 60, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kochi', waste: { 'Biodegradable': 160, 'Non-biodegradable': 420, 'Plastic': 90, 'Metal': 50, 'Paper': 110, 'Glass': 40, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Thrissur', waste: { 'Biodegradable': 190, 'Non-biodegradable': 470, 'Plastic': 100, 'Metal': 70, 'Paper': 90, 'Glass': 50, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kollam', waste: { 'Biodegradable': 180, 'Non-biodegradable': 450, 'Plastic': 90, 'Metal': 40, 'Paper': 130, 'Glass': 45, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kannur', waste: { 'Biodegradable': 150, 'Non-biodegradable': 400, 'Plastic': 70, 'Metal': 30, 'Paper': 100, 'Glass': 35, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
      ],
    },
    { date: '2023-12-03', communities: [
        { name: 'Trivandrum', waste: { 'Biodegradable': 210, 'Non-biodegradable': 520, 'Plastic': 110, 'Metal': 60, 'Paper': 110, 'Glass': 60, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kochi', waste: { 'Biodegradable': 160, 'Non-biodegradable': 420, 'Plastic': 90, 'Metal': 50, 'Paper': 110, 'Glass': 40, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Thrissur', waste: { 'Biodegradable': 190, 'Non-biodegradable': 470, 'Plastic': 100, 'Metal': 70, 'Paper': 90, 'Glass': 50, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kollam', waste: { 'Biodegradable': 180, 'Non-biodegradable': 450, 'Plastic': 90, 'Metal': 40, 'Paper': 130, 'Glass': 45, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kannur', waste: { 'Biodegradable': 150, 'Non-biodegradable': 400, 'Plastic': 70, 'Metal': 30, 'Paper': 100, 'Glass': 35, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
      ],
    },
    { date: '2023-12-04', communities: [
        { name: 'Trivandrum', waste: { 'Biodegradable': 210, 'Non-biodegradable': 520, 'Plastic': 110, 'Metal': 60, 'Paper': 110, 'Glass': 60, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kochi', waste: { 'Biodegradable': 160, 'Non-biodegradable': 420, 'Plastic': 90, 'Metal': 50, 'Paper': 110, 'Glass': 40, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Thrissur', waste: { 'Biodegradable': 190, 'Non-biodegradable': 470, 'Plastic': 100, 'Metal': 70, 'Paper': 90, 'Glass': 50, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kollam', waste: { 'Biodegradable': 180, 'Non-biodegradable': 450, 'Plastic': 90, 'Metal': 40, 'Paper': 130, 'Glass': 45, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kannur', waste: { 'Biodegradable': 150, 'Non-biodegradable': 400, 'Plastic': 70, 'Metal': 30, 'Paper': 100, 'Glass': 35, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
      ],
    },
    { date: '2023-12-05', communities: [
        { name: 'Trivandrum', waste: { 'Biodegradable': 210, 'Non-biodegradable': 520, 'Plastic': 110, 'Metal': 60, 'Paper': 110, 'Glass': 60, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kochi', waste: { 'Biodegradable': 160, 'Non-biodegradable': 420, 'Plastic': 90, 'Metal': 50, 'Paper': 110, 'Glass': 40, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Thrissur', waste: { 'Biodegradable': 190, 'Non-biodegradable': 470, 'Plastic': 100, 'Metal': 70, 'Paper': 90, 'Glass': 50, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kollam', waste: { 'Biodegradable': 180, 'Non-biodegradable': 450, 'Plastic': 90, 'Metal': 40, 'Paper': 130, 'Glass': 45, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
        { name: 'Kannur', waste: { 'Biodegradable': 150, 'Non-biodegradable': 400, 'Plastic': 70, 'Metal': 30, 'Paper': 100, 'Glass': 35, 'E-waste': 0, 'Surplus Food': 0, 'Medical Waste': 0, }, },
      ],
    },
    
  ];

  return (
    <div><Supernavbar/>
    <div className="daily-log-page">
      <h1>Daily Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Community</th>
            <th>Biodegradable</th>
            <th>Non-biodegradable</th>
            <th>Plastic</th>
            <th>Metal</th>
            <th>Paper</th>
            <th>Glass</th>
            <th>E-waste</th>
            <th>Surplus Food</th>
            <th>Medical Waste</th>
          </tr>
        </thead>
        <tbody>
          {dailyLogData.map((log, dateIndex) =>
            log.communities.map((community, communityIndex) => (
              <tr key={`${dateIndex}-${communityIndex}`}>
                {communityIndex === 0 ? (
                  <td rowSpan={log.communities.length}>{log.date}</td>
                ) : null}
                <td>{community.name}</td>
                <td>{community.waste['Biodegradable']}</td>
                <td>{community.waste['Non-biodegradable']}</td>
                <td>{community.waste['Plastic']}</td>
                <td>{community.waste['Metal']}</td>
                <td>{community.waste['Paper']}</td>
                <td>{community.waste['Glass']}</td>
                <td>{community.waste['E-waste']}</td>
                <td>{community.waste['Surplus Food']}</td>
                <td>{community.waste['Medical Waste']}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DailyLogPage;
