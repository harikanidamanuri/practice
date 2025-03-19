// src/components/TwoImages.js

import React from "react";

const TwoImages = () => {
  const imageData = [
    {
      src: "/images/img11.jpg",
      alt: "Image 1",
      title: "Tree Styles",
    },
    {
      src: "/images/img12.jpg",
      alt: "Image 2",
      title: "Trail Runner",
    },
  ];

  return (
    <div className="flex mt-24 ml-80 gap-8">
      {imageData.map((image, index) => (
        <div key={index} className="w-1/3 relative overflow-hidden group">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110 gap-6"
          />

          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold">{image.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoImages;
