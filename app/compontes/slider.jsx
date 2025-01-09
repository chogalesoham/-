"use client";

// components/ImageSlider.jsx
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    {
      img: "https://image.winudf.com/v2/image1/Y29tLm13cG1hcHBzLndlZGRpbmcuc3RhZ2UuaWRlYXMuaGRfc2NyZWVuXzExXzE1ODAyNTY4NzhfMDgx/screen-11.jpg?fakeurl=1&type=.jpg",
      heding: "प्रत्येक क्षणात सौंदर्य आणि संगीत ",
    },
    {
      img: "https://i.pinimg.com/originals/e9/ee/2c/e9ee2c4669d45bf7d39d48a7e72f583b.jpg",
      heding: " परिपूर्ण सजावट आणि दर्जेदार साऊंड",
    },
    {
      img: "https://dreambiglittlegirl.com/wp-content/uploads/2015/07/2015-07-18_0002.jpg",
      heding: "सजावट आणि संगीताचे समाधान",
    },
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
          {images.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={item?.img}
                alt={`Image ${index + 1}`}
                className="w-full h-[50vh] md:h-[590px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
                <div className="bg-black bg-opacity-60 text-center px-4 mx-6 py-6 md:px-16 md:py-12 rounded-3xl shadow-2xl">
                  <h2 className="text-lg md:text-3xl font-semibold text-[#EB866C] mb-4">
                    ! माऊली मंडप डेकोरेटर्स !
                  </h2>
                  <h1 className="text-2xl md:text-6xl font-extrabold text-white leading-tight tracking-tight px-4 text-shadow mb-2">
                    {item?.heding}
                  </h1>
                  <a
                    href="your-booking-link"
                    class="inline-block px-4 py-1 bg-gradient-to-t from-[#ff914d] to-[#8c52ff]  font-semibold text-sm  transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
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
              currentIndex === index ? "bg-[#EB866C]" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
