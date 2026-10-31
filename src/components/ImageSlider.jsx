import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    '/images/image_1.jpeg',
    '/images/image_2.jpeg',
    '/images/image_3.jpeg',
    '/images/image_4.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds image transition

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="image-slider-container">
      <div className="image-slider-glowing-border">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
