//AdminCard.js
import React from 'react';
import AdminCardItem from './AdminCardItem';
import './AdminCard.css';

function App() {
  const communityData = [
    {
      communityName: 'Thrissur',
      totalWasteCollected: 500,
      totalWasteRecycled: 350,
      imageUrl: `${process.env.PUBLIC_URL}/Images/thrissur.png`,
    },
    {
      communityName: 'Kochi',
      totalWasteCollected: 800,
      totalWasteRecycled: 600,
      imageUrl: `${process.env.PUBLIC_URL}/Images/kochi.png`,
    },
    {
      communityName: 'Kannur',
      totalWasteCollected: 300,
      totalWasteRecycled: 200,
      imageUrl: `${process.env.PUBLIC_URL}/Images/Kannur.png`,
    },
    {
      communityName: 'Trivandrum',
      totalWasteCollected: 700,
      totalWasteRecycled: 500,
      imageUrl: `${process.env.PUBLIC_URL}/Images/trivandrum.png`,
    },
    {
      communityName: 'Kollam',
      totalWasteCollected: 400,
      totalWasteRecycled: 300,
      imageUrl: `${process.env.PUBLIC_URL}/Images/kollam.png`,
    },
  ];

  return (
    <div className="card-container">
      {communityData.map((community, index) => (
        <AdminCardItem
          key={index}
          communityName={community.communityName}
          totalWasteCollected={community.totalWasteCollected}
          totalWasteRecycled={community.totalWasteRecycled}
          imageUrl={community.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
