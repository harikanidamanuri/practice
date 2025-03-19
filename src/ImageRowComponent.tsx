import React from 'react';

const ImageRowComponent = () => {
  const images = [
    {
      src: '/images/img3.jpg',
      alt: 'Shop Men',
      title: 'Best Seller',
      description: 'Fan-favorite Sneakers, Flats, and Slip-Ons',
      button1: 'Shop for Men',
      button2: 'Shop for Women',
    },
    {
      src: '/images/img5.jpg',
      alt: 'Shop Women',
      title: 'New Arrivals',
      description: 'Latest Styles & Limited Edition Colors',
      button1: 'Shop for Men',
      button2: 'Shop for Women',
    },
    {
      src: '/images/img8.jpg',
      alt: 'Shop Men & Women',
      title: 'Spring Essentials',
      description: 'Breezy Shoes Made From Tree Fiber For',
      description2: 'Warmer Days Ahead',
      button1: 'Shop for Men',
      button2: 'Shop for Women',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto pb-10">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:bg-white"
            src={image.src}
            alt={image.alt}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold shadow-lg">{image.title}</h2>
            <p className="text-white text-lg shadow-lg">{image.description}</p>
            {image.description2 && (
              <p className="text-white text-lg shadow-lg pl-10">{image.description2}</p>
            )}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black text-white px-8 py-3 rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <p>{image.button1}</p>
            </div>
            <div className="bg-black text-white px-8 py-3 rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <p>{image.button2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageRowComponent;
