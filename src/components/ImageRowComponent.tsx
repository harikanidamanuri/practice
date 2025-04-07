import React from 'react';

const ImageRowComponent = () => {
  const images : any = [
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-8">
      {images.map((image: any, index: number) => (
        <div key={index} className="relative group">
          <img
            className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:bg-white"
            src={image.src}
            alt={image.alt}
          />
          <div className="absolute top-0 left-0 w-full text-white text-center p-4">
            <h2 className="text-white text-2xl font-bold shadow-lg">{image.title}</h2>
            <p className="text-white text-lg shadow-lg">{image.description}</p>
            {image.description2 && (
              <p className="text-white text-lg shadow-lg pl-10">{image.description2}</p>
            )}
          </div>
          <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-4 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
            <div className="px-6 py-2 border border-black text-black bg-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">
              <p>{image.button1}</p>
            </div>
            <div className="px-6 py-2 border border-black text-black bg-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white">
              <p>{image.button2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageRowComponent;
