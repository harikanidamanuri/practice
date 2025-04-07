import React from "react";

const products = [
  {
    title: "Tree Runner Go",
    description: "Hanami Night",
    price: "$120",
    image: "images/img4.jpg", // Replace with actual image
    buttons: true,
  },
  {
    title: "Tree Runner Go",
    description: "Blizzard/Hanami Night",
    price: "$120",
    image: "images/img6.jpg", // Replace with actual image
  },
  {
    title: "Tree Gliders",
    description: "Blizzard/Hanami Blue",
    price: "$135",
    image: "images/img8.jpg", // Replace with actual image
    buttons: true,
  },
  {
    title: "Tree Dasher 2",
    description: "Hanami Night",
    price: "$135",
    image: "images/img10.png", // Replace with actual image
  },
];

export default function ProductLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
      {/* Left Side - Large Image */}
      <div className="relative group overflow-hidden">
        <img
          src="images/img4.jpg" // Replace with actual big image
          alt="New And Bountiful Blues"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <h2 className="text-3xl font-bold">New And Bountiful Blues</h2>
          <p className="text-xl">Cool shades to put some spring in your step.</p>
          <div className="mt-2 flex space-x-4">
            {["Shop Men", "Shop Women"].map((btnText, btnIndex) => (
              <button
                key={btnIndex}
                className="px-6 py-2 border border-white bg-transparent text-white uppercase text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black"
              >
                {btnText}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - 4 Product Images */}
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="text-md font-semibold">{product.price}</p>
            </div>

            {/* Hover Buttons */}
            {product.buttons && (
              <div className="absolute inset-0 flex justify-center items-center opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
                {["Shop Men", "Shop Women"].map((btnText, btnIndex) => (
                  <button
                    key={btnIndex}
                    className="px-6 py-2 border border bg-white text-black uppercase text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white mr-2"
                  >
                    {btnText}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}