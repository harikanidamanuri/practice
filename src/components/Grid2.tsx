import React, { useState } from "react";

const products = [
  { id: 1, image: "/images/img7.jpg", name: "Women's Canvas Pipers", description: "Natural White / Hanami Night", price: "$90" },
  { id: 2, image: "/images/img8.jpg", name: "Men's Canvas Pipers", description: "Natural Black", price: "$90" },
  { id: 3, image: "/images/img3.jpg", name: "Women's Lounger Lift", description: "Weathered Grey", price: "$105" },
  { id: 4, image: "/images/img4.jpg", name: "Men's Tree Runner Go", description: "Hanami Night", price: "$120" },
  { id: 5, image: "/images/img5.jpg", name: "Women's Breeze Runners", description: "Blue Shade", price: "$98" },
  { id: 6, image: "/images/img6.jpg", name: "Men's Casual Sneakers", description: "Storm Grey", price: "$115" },
  { id: 7, image: "/images/img7.jpg", name: "Women's Slip-Ons", description: "Cloud White", price: "$80" },
  { id: 8, image: "/images/img8.jpg", name: "Men's Sports Runners", description: "Jet Black", price: "$110" },
  { id: 9, image: "/images/img7.jpg", name: "Women's Canvas Pipers", description: "Women's Tree Runners", price: "$98" },
  { id: 10, image: "/images/img8.jpg", name: "Men's Canvas Pipers", description: "Men's Tree Longeres", price: "$98" },
  { id: 11, image: "/images/img3.jpg", name: "Women's Lounger Lift", description: "Men's Tree Breezers", price: "$100" },
  { id: 12, image: "/images/img4.jpg", name: "Men's Tree Runner Go", description: "Women's Tree Runners", price: "$98" },
];

const Grid2 = () => {
  const [startIndex, setStartIndex] = useState(0);
  
  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 4 + products.length) % products.length);
  };

  return (
    <div className="w-full bg-white py-8">
      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-6 text-start pl-8">MORE TO SHOP</h3>

      {/* Product Row */}
      <div className="relative">
        {/* Previous Button */}
        {startIndex !== 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black transition px-6 py-3 border border-gray-300 rounded-full z-10"
          >
            &lt;
          </button>
        )}

        {/* Product List */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-4">
          {products.slice(startIndex, startIndex + 4).map((product) => (
            <div key={product.id} className="w-48 sm:w-64 md:w-72 lg:w-80 p-2 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover mb-2 bg-gray-200"
              />
              <h3 className="text-sm sm:text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{product.description}</p>
              <p className="text-black font-bold text-sm sm:text-base">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        {startIndex + 4 < products.length && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black transition px-6 py-3 border border-gray-300 rounded-full z-10"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Grid2;
