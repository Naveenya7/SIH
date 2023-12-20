import React, { useState, useEffect } from 'react';
import './ScrollingImages.css';

const imagePaths = [
  'Images/img1.png',
  'Images/img2.png',
  'Images/img3.png',
  'Images/img4.png',
  'Images/img5.png',
  'Images/img6.png',
  'Images/img7.png',
  'Images/img8.png',
  'Images/img9.png',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (imagePaths.length * 2));
    }, 2000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="image-slider">
      <div className="slider-title">OUR PARTNERS</div>
      <div
        className="image-container"
        style={{
          transform: `translateX(-${currentIndex * (100 / imagePaths.length)}%)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`img${index + 1}`} />
        ))}
        {imagePaths.map((path, index) => (
          <img key={index + imagePaths.length} src={path} alt={`img${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
