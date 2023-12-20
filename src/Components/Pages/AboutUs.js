// AboutUs.js

import React from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
    
    <div className="about-us-container">
      <header>
        <h1>Welcome to GreenVouchers</h1>
      </header>
      <section className="main-content">
        <p>
          Explore a world of sustainable impact and eco-friendly initiatives at GreenVouchers. We're on a mission to create positive change by connecting individuals, businesses, and communities.
        </p>
        <p>
          Join us in the journey towards a greener future! At GreenVouchers, we believe in collective action for a more sustainable and vibrant world. Our platform empowers you to contribute to environmental conservation, support community development, and make a lasting impact.
        </p>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We are committed to facilitating environmental conservation, supporting community development, and empowering individuals to contribute to a healthier planet. Together, we can make a difference.
        </p>
      </section>
      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>
          Feel free to explore our platform, register to join our mission, in our community projects. Every action you take brings us one step closer to a sustainable and thriving world.
        </p>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
