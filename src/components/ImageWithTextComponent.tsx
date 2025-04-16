import React from "react";

const ImageWithTextComponent: React.FC = () => {
  return (
    <section className="w-full h-[400px] md:h-[350px] flex flex-col items-center justify-center text-white text-center px-4 relative">
      
      <img 
        src="/images/img9.jpg" 
        alt="Banner" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Main Heading */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase relative z-10">
        WE MAKE BETTER THINGS IN A BETTER WAY
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-lg max-w-2xl relative z-10">
        By looking to the world's greatest innovator—Nature—we create shoes that deliver 
        unrivaled comfort that you feel good in and feel good about.
      </p>

      {/* Logo Text */}
      <img src="./images/Allbirdslogo.png" alt="Allbirds Logo" className="mt-6 text-2xl font-bold italic relative z-10 h-12 w-[100px] bg-transparent" />

      {/* <h3 className="mt-6 text-2xl font-bold italic relative z-10">allbirds</h3> */}
      <p className="text-sm uppercase tracking-widest relative z-10">BY NATURE</p>
    </section>
  );
};

export default ImageWithTextComponent;
