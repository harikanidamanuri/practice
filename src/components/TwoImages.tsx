import React from 'react';
import Button from './reusable/button';

const TwoImages = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2">
     
      {[
        {
          src: "/images/img11.jpg",
          alt: "Cards On The Table",
          heading: "Cards On The Table",
          subtext: "Hosted by Stanley Tucci",
          buttonLabel: "WATCH NOW",
        },
        {
          src: "/images/img12.jpg",
          alt: "Comfort In Bloom",
          heading: "Comfort In Bloom",
          subtext: "Cushy kicks in plush shades of plum",
          buttonLabel: "SHOP NOW",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/2 h-[400px] md:h-[600px] group overflow-hidden"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
          />

          
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-center px-4 z-10">
            <h2 className="text-xl sm:text-2xl font-semibold">{item.heading}</h2>
            <p className="text-sm sm:text-base">{item.subtext}</p>
          </div>

         
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40
              opacity-100 visible
              md:opacity-0 md:invisible
              md:group-hover:opacity-100 md:group-hover:visible
              transition-opacity duration-300"
          >
            {/* <button className="px-5 py-2 bg-white text-black font-semibold border border-white hover:bg-black hover:text-white transition-colors duration-300">
              {item.buttonLabel}
            </button> */}
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoImages;
