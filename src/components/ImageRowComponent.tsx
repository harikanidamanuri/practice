import React from 'react';

const ImageRowComponent = () => {
  const images = [
    {
      src: '/images/img3.jpg',
      alt: 'Shop Men',
      title: 'Best Seller',
      description: 'Fan-favorite Sneakers, Flats, and Slip-Ons',
      button1: 'Shop Men',
      button2: 'Shop Women',
    },
    {
      src: '/images/img5.jpg',
      alt: 'Shop Women',
      title: 'New Arrivals',
      description: 'Latest Styles & Limited Edition Colors',
      button1: 'Shop Men',
      button2: 'Shop Women',
    },
    {
      src: '/images/img8.jpg',
      alt: 'Shop Men & Women',
      title: 'Spring Essentials',
      description: 'Breezy Shoes Made From Tree Fiber For',
      description2: 'Warmer Days Ahead',
      button1: 'Shop Men',
      button2: 'Shop Women',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-auto object-cover transition-transform duration-300 transform md:group-hover:scale-105"
            src={image.src}
            alt={image.alt}
          />
          {/* Text overlay */}
          <div className="absolute top-0 left-0 w-full text-white text-center p-4 bg-gradient-to-b from-black/60 to-transparent">
            <h2 className="text-white text-2xl font-bold drop-shadow">{image.title}</h2>
            <p className="text-white text-lg drop-shadow">{image.description}</p>
            {image.description2 && (
              <p className="text-white text-lg drop-shadow">{image.description2}</p>
            )}
          </div>
          {/* Buttons - responsive */}
          <div className="absolute bottom-4 left-0 w-full flex flex-col items-center space-y-2 
            md:flex-row md:justify-center md:space-y-0 md:space-x-4 
            opacity-100 visible 
            md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible 
            transition-opacity duration-300">
            <button className="px-6 py-2 border border-black text-black bg-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">
              {image.button1}
            </button>
            <button className="px-6 py-2 border border-black text-black bg-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">
              {image.button2}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageRowComponent;
