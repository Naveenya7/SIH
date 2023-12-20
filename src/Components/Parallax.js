// Parallax.js
import React, { useEffect } from 'react';

const Parallax = () => {
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((element) => {
      const distance = window.scrollY * element.dataset.speed;
      element.style.transform = `translateY(${distance}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; 
};

export default Parallax;
