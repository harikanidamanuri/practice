import React from "react";

const Sale: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Fullwidth Responsive Image */}
      <img
        src="/images/Sale.avif"
        alt="Sale Banner"
        className="w-full h-auto object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-y-0 right-4 flex items-center text-white text-right px-4 md:right-10 md:px-8">
        <div className="max-w-sm">
          <h2 className="text-2xl md:text-4xl font-bold">New Arrivals</h2>
          <p className="text-sm md:text-lg">
            The latest styles and limited-edition colors that you can only find here (while they last, that is).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sale;