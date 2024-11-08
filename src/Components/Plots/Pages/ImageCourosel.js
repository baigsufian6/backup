import React, { useState } from "react";
import Image1 from '../Assets/new1.png'
import Image2 from '../Assets/new2.png';
import Image3 from '../Assets/new3.png';
import Image4 from '../Assets/new4.jpeg';
import Image5 from '../Assets/new5.jpeg';
import Image6 from '../Assets/new6.jpeg';
import Image7 from '../Assets/new7.jpeg';
import Image8 from '../Assets/new8.jpeg';
import Image9 from '../Assets/new9.jpeg';
import Image10 from '../Assets/new10.jpeg';
import Image11 from '../Assets/new11.jpeg';

const ImageCarousel = () => {
  // Array of image URLs
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
  ];

  // State to keep track of the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for the next button
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handler for the previous button
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
