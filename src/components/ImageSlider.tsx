import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    {
      src: "images/bigimg.jpg",
      alt: "Men's Sale",
      text: "Men's Sale",
    },
    {
      src: "images/bigimg2.jpg",
      alt: "Women's Sale",
      text: "Women's Sale",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh] object-cover transition-all duration-500"
      />


      {/* Bottom center dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300 ${currentImage === index ? "bg-white" : "bg-gray-500"
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
