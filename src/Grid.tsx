import React from "react";

function Grid() {
  const leftImageData = {
    src: "/images/img4.jpg",
    alt: "Main Image",
    heading: "New And Bountiful Blues",
    description: "Cool Shades to Put some Spring in your Step",
    buttons: [
      { text: "Shop for Men" },
      { text: "Shop for Women" }
    ]
  };

  const rightImageData = [
    {
      src: "/images/img10.png",
      alt: "Image 1",
      heading: "Tree runner Go",
      subheading: "Hanami night",
      buttonText: "Shop for Men"
    },
    {
      src: "/images/img10.png",
      alt: "Image 2",
      heading: "Shop for Men",
    },
    {
      src: "/images/img10.png",
      alt: "Image 3",
      heading: "Shop for Men",
    },
    {
      src: "/images/img10.png",
      alt: "Image 4",
      heading: "Shop for Men",
    }
  ];

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/2 h-screen relative">
        <img
          src={leftImageData.src}
          alt={leftImageData.alt}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-10 left-10 text-white space-y-4">
          <h2 className="text-3xl font-bold">{leftImageData.heading}</h2>
          <p className="text-xl">{leftImageData.description}</p>
          <div className="flex flex-col space-y-4">
            {leftImageData.buttons.map((button, index) => (
              <button
                key={index}
                className="bg-white-500 px-6 py-3 rounded-md text-black transition duration-300 bg-white hover:bg-black hover:text-white"
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Grid of Images) */}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4 p-4">
        {rightImageData.map((image, index) => (
          <div key={index} className="group relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white">
              <span className="text-2xl">{image.buttonText || "Shop for Men"}</span>
              {image.heading && (
                <div className="absolute bottom-10 left-10 text-white space-y-4">
                  <p className="text-3xl font-bold">{image.heading}</p>
                  {image.subheading && <p className="text-xl">{image.subheading}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
