import React, { useState } from "react";

const Grid2 = () => {
  const imagesData = [
    {
      src: "/images/img6.jpg",
      alt: "Image 1",
      description: "Awesome Shoes for Men",
      price: "$59.99"
    },
    {
      src: "/images/img7.jpg",
      alt: "Image 2",
      description: "Comfortable Sneakers",
      price: "$69.99"
    },
    {
      src: "/images/img4.jpg",
      alt: "Image 3",
      description: "Trendy Flats",
      price: "$49.99"
    },
    {
      src: "/images/img4.jpg",
      alt: "Image 4",
      description: "Stylish Slip-Ons",
      price: "$39.99"
    },
    {
      src: "/images/img5.jpg",
      alt: "Image 5",
      description: "Sporty Shoes",
      price: "$79.99"
    },
    {
      src: "/images/img6.jpg",
      alt: "Image 6",
      description: "Running Sneakers",
      price: "$89.99"
    },
    {
      src: "/images/img7.jpg",
      alt: "Image 7",
      description: "Leather Boots",
      price: "$120.00"
    },
    {
      src: "/images/img8.jpg",
      alt: "Image 8",
      description: "Hiking Boots",
      price: "$110.00"
    },
    {
      src: "/images/img9.jpg",
      alt: "Image 9",
      description: "Slip-Resistant Work Shoes",
      price: "$85.00"
    },
    {
      src: "/images/img3.jpg",
      alt: "Image 10",
      description: "Casual Shoes",
      price: "$45.00"
    },
    {
      src: "/images/img4.jpg",
      alt: "Image 4",
      description: "Winter Boots",
      price: "$95.00"
    },
    {
      src: "/images/img5.jpg",
      alt: "Image 5",
      description: "Summer Sandals",
      price: "$30.00"
    }
  ];


  const [currentSet, setCurrentSet] = useState(0);

 
  const imagesPerSet = 4;

  // Function to show the next set of images
  const nextSet = () => {
    if (currentSet < imagesData.length / imagesPerSet - 1) {
      setCurrentSet(currentSet + 1);
    }
  };

  // Function to show the previous set of images
  const prevSet = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  // Get the current set of images to display
  const startIndex = currentSet * imagesPerSet;
  const currentImages = imagesData.slice(startIndex, startIndex + imagesPerSet);

  return (
    <div className="flex pb-10 w-full pl-80">
      {/* Left Section */}
      <div className="text-center">
        <div className="absolute bottom-10 left-10 text-white space-y-4">
          <h2 className="text-3xl font-bold">New And Bountiful Blues</h2>
          <p className="text-xl">Cool Shades to Put some Spring in your Step</p>
          <div className="flex flex-col space-y-4">
            <button className="bg-white px-6 py-3 rounded-md text-black transition duration-300 bg-white hover:bg-black hover:text-white">
              Shop for Men
            </button>
            <button className="bg-white px-6 py-3 rounded-md text-black transition duration-300 bg-white hover:bg-black hover:text-white">
              Shop for Women
            </button>
            <button className="bg-white px-6 py-3 rounded-md text-black transition duration-300 bg-white hover:bg-black hover:text-white">
              More Shop Options
            </button>
          </div>
        </div>
      </div>

      {/* Right Section (Carousel of Images) */}
      <div className="w-2/3 p-4">
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {/* Use map to display images dynamically */}
          {currentImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white">
                <span className="text-2xl">{image.description}</span>
              </div>
              <div className="absolute bottom-4 left-4 text-white space-y-2">
                <p className="text-lg font-bold">{image.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="flex justify-between mt-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-full"
            onClick={prevSet}
            disabled={currentSet === 0}
          >
            &lt;
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-full"
            onClick={nextSet}
            disabled={currentSet === imagesData.length / imagesPerSet - 1}
          >
            &gt;
          </button>
        </div>
      </div>
     </div>
  );
};

export default Grid2;
