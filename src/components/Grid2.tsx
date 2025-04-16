import React, { useRef } from "react";

const products = [
  { id: 1, image: "/images/img7.jpg", name: "Women's Canvas Pipers", description: "Natural White / Hanami Night", price: "$90" },
  { id: 2, image: "/images/img4.jpg", name: "Men's Canvas Pipers", description: "Natural Black", price: "$90" },
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth / 1.2;
      container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white py-8">
      <h3 className="text-xl font-bold text-start pl-4 sm:pl-8 mb-6">MORE TO SHOP</h3>

      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl text-gray-600 hover:text-black transition px-4 py-2 border border-gray-300 rounded-full z-10 bg-white"
        >
          &lt;
        </button>

        {/* Product Grid Scrollable */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 px-4 sm:px-8 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[75%] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[360px] flex-shrink-0 bg-white p-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 sm:h-72 object-cover mb-2 bg-gray-200"
                />
                <h3 className="text-base sm:text-lg font-semibold truncate">{product.name}</h3>
                <p className="text-gray-600 text-sm truncate">{product.description}</p>
                <p className="text-black font-bold text-sm sm:text-base">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl text-gray-600 hover:text-black transition px-4 py-2 border border-gray-300 rounded-full z-10 bg-white"
        >
          &gt;
        </button>
      </div>

      {/* Mobile Text */}
      <div className="sm:hidden text-center text-sm text-gray-500 mt-2">
        Swipe left to see more
      </div>
    </div>
  );
};

export default Grid2;
