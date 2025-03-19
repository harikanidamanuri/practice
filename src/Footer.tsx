import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-300 w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading at the top-left */}
        <h2 className="text-4xl font-bold text-black mb-4">Allbirds Approach</h2>
        
        {/* Three paragraphs on the same line */}
        <div className="flex justify-between items-start">
          {/* Left Section (Paragraph + Learn More) */}
          <div className="w-1/3 text-left">
            <p className="text-xl text-gray-700">
              Our approach is simple: sustainable and comfortable footwear for every step you take.
            </p>
            <a href="/learn-more" className="text-blue-500 underline mt-4 inline-block">
              Learn More
            </a>
          </div>

          {/* Middle Section (Paragraph + Learn More) */}
          <div className="w-1/3 text-center">
            <p className="text-xl text-gray-700">
              We believe in innovation and sustainability to create a product that supports your every move.
            </p>
            <a href="/learn-more" className="text-blue-500 underline mt-4 inline-block">
              Learn More
            </a>
          </div>

          {/* Right Section (Paragraph + Learn More) */}
          <div className="w-1/3 text-right">
            <p className="text-xl text-gray-700">
              From design to production, we’re focused on creating the most sustainable, comfortable shoes for all.
            </p>
            <a href="/learn-more" className="text-blue-500 underline mt-4 inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
