import React from "react";

const Graybg = () => {
  return (
    <div className="bg-gray-300 w-full py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-black uppercase mb-4">
          Want first dibs?
        </h2>
        
        {/* Paragraph */}
        <p className="text-xl text-gray-700 mb-6">Join our email list and be the first to know about new limited edition products material innovation ,and lots of other fun updates.</p>

        {/* Form Section */}
        <div className="flex justify-center items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-3 px-4 rounded-l-md text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-black text-white px-3 py-3 rounded-r-md hover:bg-gray-800 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>

        {/* Privacy Policy Note */}
        <p className="text-sm text-gray-500 mt-4">
          Note: you can opt-out at any-time. See our Privacy policy and terms{" "}
          <a href="/privacy-policy" className="text-blue-500 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Graybg;
