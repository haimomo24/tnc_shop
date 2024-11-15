"use client"

import { useEffect, useState } from "react";
import Image from "next/image";  // Import Image từ next/image

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://www.asus.com/WebsitesBanner/VN/banners/d2useuhx8zmlcaje/d2useuhx8zmlcaje-0_0_desktop_0_1X.jpg',
    'https://www.asus.com/WebsitesBanner/VN/banners/nbz61e734exdtueu/nbz61e734exdtueu-0_0_desktop_0_1X.jpg?webp', 
    'https://www.asus.com/WebsitesBanner/VN/banners/4oonr4nnj2ywu2wz/4oonr4nnj2ywu2wz-0_0_desktop_0_1X.jpg?webp',
    'https://www.asus.com/WebsitesBanner/VN/banners/z5embk8btewj7wje/z5embk8btewj7wje-0_0_desktop_0_1X.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, 
  []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1920} // Cung cấp width cho ảnh
              height={1080} // Cung cấp height cho ảnh
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
