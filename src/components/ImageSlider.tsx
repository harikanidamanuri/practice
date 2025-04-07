import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    { src: "images/bigimg.jpg", alt: "Men's Sale", text: "Men's Sale" },
    { src: "images/bigimg2.jpg", alt: "Women Sale", text: "Women's Sale" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full pb-10">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        className="w-full object-cover"
      />

    
      <div className="absolute top-4 left-4 text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
        {images[currentImage].text}
      </div>

    
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              currentImage === index ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
