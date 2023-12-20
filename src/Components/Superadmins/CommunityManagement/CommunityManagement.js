
import React, { useState } from 'react';
import './CommunityManagement.css';
import Supernavbar from '../Supernavbar/Supernavbar'


const CommunityManagement = () => {
  const [newCommunity, setNewCommunity] = useState({
    name: '',
    location: '',
    contactPerson: '',
    contactNumber: '',
  });

  const [communities, setCommunities] = useState([
    {
      id: 2,
      name: 'EcoCare Thrissur',
      location: 'Thrissur, Kerala',
      contactPerson: 'Jane Smith',
      contactNumber: '9876543211',
    },
    {
      id: 3,
      name: 'GreenEarth Kozhikode',
      location: 'Kozhikode, Kerala',
      contactPerson: 'Robert Johnson',
      contactNumber: '9876543212',
    },
    {
      id: 4,
      name: 'NatureSavers Trivandrum',
      location: 'Trivandrum, Kerala',
      contactPerson: 'Samantha Davis',
      contactNumber: '9876543213',
    }
  ]);

  const handleChange = (e) => {
    setNewCommunity({ ...newCommunity, [e.target.name]: e.target.value });
  };

  const handleAddCommunity = () => {
    setCommunities([...communities, { id: Date.now(), ...newCommunity }]);
    setNewCommunity({ name: '', location: '', contactPerson: '', contactNumber: '' });
  };

  const handleRemoveCommunity = (id) => {
    setCommunities(communities.filter((community) => community.id !== id));
  };

  return (
    <div>
    <Supernavbar/>
    <div className='community-management-container'>
      <h2>Community Management</h2>
      <div className='new-community-form'>
        <input
          type='text'
          name='name'
          placeholder='Community Name'
          value={newCommunity.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          placeholder='Location (e.g., Kochi, Kerala)'
          value={newCommunity.location}
          onChange={handleChange}
        />
        <input
          type='text'
          name='contactPerson'
          placeholder='Contact Person'
          value={newCommunity.contactPerson}
          onChange={handleChange}
        />
        <input
          type='text'
          name='contactNumber'
          placeholder='Contact Number'
          value={newCommunity.contactNumber}
          onChange={handleChange}
        />
        <button onClick={handleAddCommunity}>Add Community</button>
      </div>
      <ul className='community-list'>
        {communities.map((community) => (
          <li key={community.id}>
            <div>
              <h3>{community.name}</h3>
              <p>{community.location}</p>
              <p>Contact Person: {community.contactPerson}</p>
              <p>Contact Number: {community.contactNumber}</p>
            </div>
            <button onClick={() => handleRemoveCommunity(community.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CommunityManagement;
