"use client";

// components/ImageSlider.jsx
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://i.pinimg.com/originals/9e/86/69/9e866940e346b626dc57bb1e841d2862.jpg",
    "https://i.pinimg.com/originals/9e/86/69/9e866940e346b626dc57bb1e841d2862.jpg",
    "https://i.pinimg.com/originals/9e/86/69/9e866940e346b626dc57bb1e841d2862.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay effect to move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 3 seconds autoplay interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen container mx-auto">
      <div className="overflow-hidden">
        {/* Image container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-[80vh] md:h-[590px] object-fill"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
