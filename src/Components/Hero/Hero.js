
import React from 'react';
import './Hero.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero-container'>
      <h2>Welcome to GreenVouchers</h2>
      <p>Your platform for revolutionizing domestic waste management</p>
      <div className='hero-btns'>
        <Link to='/startafundraiser' className='btns'>
          <Button buttonStyle='btn--outline green-button' buttonSize='btn--large'>
            Join
          </Button>
        </Link>
        <Link to='/donate'>
          <Button
            className='btns'
            buttonStyle='btn--primary dark-green-button'
            buttonSize='btn--large'
            gradientStyle="green-gradient" 
          >
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

