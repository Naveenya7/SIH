// CommunitiesTable.js
import React from 'react';

const CommunitiesTable = () => {
  const communitiesData = [
    { id: 1, name: 'Trivandrum Eco Warriors', location: 'Trivandrum', members: 150 },
    { id: 2, name: 'Kochi Green Guardians', location: 'Kochi', members: 120 },
    { id: 3, name: 'Calicut Eco Enthusiasts', location: 'Calicut', members: 90 },
    // Add more community data as needed
  ];

  return (
    <div>
      <h2>Kerala Communities</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {communitiesData.map((community) => (
            <tr key={community.id}>
              <td>{community.id}</td>
              <td>{community.name}</td>
              <td>{community.location}</td>
              <td>{community.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunitiesTable;
