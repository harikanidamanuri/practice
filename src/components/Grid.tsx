
import React from "react";
import Button from "./reusable/button";

const products = [
  {
    title: "Tree Runner Go",
    description: "Hanami Night",
    price: "$120",
    image: "images/4img.avif",
  },
  {
    title: "Tree Runner Go",
    description: "Blizzard/Hanami Night",
    price: "$120",
    image: "images/10img.avif",
  },
  {
    title: "Tree Gliders",
    description: "Blizzard/Hanami Blue",
    price: "$135",
    image: "images/6img.avif",
  },
  {
    title: "Tree Dasher 2",
    description: "Hanami Night",
    price: "$135",
    image: "images/img10.png",
  },
];

export default function ProductLayout() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-1">
        {/* Left big image section */}
        <div className="relative group overflow-hidden rounded-none">
          <img
            src="images/img4.jpg"
            alt="New And Bountiful Blues"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover transition-transform duration-300 md:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              New And Bountiful Blues
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white mb-4">
              Cool shades to put some spring in your step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {["Shop Men", "Shop Women"].map((btn, i) => (
                <button
                  key={i}
                  className="px-4 py-2 border border-white text-white text-xs sm:text-sm uppercase font-medium hover:bg-white hover:text-black transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side grid of 4 products */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-px">
          {products.map((product, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[350px] object-cover transition-transform duration-300 md:group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="font-bold text-sm">{product.price}</p>
              </div>

              {/* Responsive Buttons: always visible on mobile, hover on md+ */}
              {/* <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-black/40
                opacity-100 visible 
                md:opacity-0 md:invisible 
                md:group-hover:opacity-100 md:group-hover:visible 
                transition-opacity duration-300 px-4">
                {["Shop Men", "Shop Women"].map((btn, i) => (
                  <button
                    key={i}
                    className="w-full sm:w-auto px-4 py-2 bg-white text-black text-xs sm:text-sm uppercase font-semibold hover:bg-black hover:text-white transition"
                  >
                    {btn}
                  </button>
                ))}
              </div> */}
              <Button />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
