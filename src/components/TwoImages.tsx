import React from "react";

const TwoImages = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen gap-4">
      {/* Left Section - Trail Runner */}
      <div className="relative w-full w-1/2 p-8 bg-cover bg-center group">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white text-center">
          <h2 className="text-2xl font-bold">Trail Runner</h2>
          <p className="mt-2">Tough, Grippy, Ready To Explore</p>
          <img
            src="images/img11.jpg"
            alt="Trail Runner Shoes"
            className="mx-auto mt-4 w-full h-auto object-cover"
          />
          {/* Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300">
              Shop Men
            </button>
            <button className="bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300">
              Shop Women
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Travel Collection */}
      <div className="relative w-full w-1/2 p-8 bg-cover bg-center group">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-white text-center">
          <h2 className="text-2xl font-bold">The New Travel Collection</h2>
          <p className="mt-2">Lightweight, Stylish Shoes Ready To Roam.</p>
          <img
            src="images/img12.jpg"
            alt="Travel Collection Shoes"
            className="mx-auto mt-4 w-full h-auto object-cover"
          />
          {/* Buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300">
              Shop Men
            </button>
            <button className="bg-white text-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300">
              Shop Women
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoImages;
