import React from 'react';

const ImageWithTextComponent = () => {
  return (
    <div className="relative w-full h-auto pb-10">
      <img
        src="images/img9.jpg"
        alt="Shoes Image"
        className="w-full h-full object-cover"
      />

      <div className="text-base font-medium absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white text-4xl sm:text-5xl md:text-xl font-bold uppercase shadow-lg">
        <h2>WE MAKE BETTER THINGS IN BETTER WAY</h2>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center text-white text-lg sm:text-xl md:text-xl max-w-lg mb-4">
        <h3>
          By looking to the world’s greatest innovator, we create shoes that deliver
          unrivaled comfort that you feel good and feel good about.
        </h3>
      </div>

      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-center text-white text-3xl pb-4">
        <p className="font-[cursive]">Allbirds</p>
      </div>

      <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-center text-white text-xl uppercase tracking-wider pt-4 ">
        <p>BY NATURE</p>
      </div>
    </div>
  );
};

export default ImageWithTextComponent;
