import React from "react";

const AllbirdsApproach = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      
      <h2 className="text-3xl font-bold text-gray-900">The Allbirds Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Wear-All-Day Comfort</h3>
          <p className="text-gray-600 mt-2">
            Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. 
            Slip in, lace up, or slide them on and enjoy the comfy support.
          </p>
          <a href="#" className="text-blue-600 mt-2 inline-block hover:underline">Learn More</a>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Sustainability In Every Step</h3>
          <p className="text-gray-600 mt-2">
            From materials to transport, we're working to reduce our carbon footprint to near zero. 
            Holding ourselves accountable and striving for climate goals isn't a 30-year goal—it's now.
          </p>
          <a href="#" className="text-blue-600 mt-2 inline-block hover:underline">Learn More</a>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Materials From The Earth</h3>
          <p className="text-gray-600 mt-2">
            We replace petroleum-based synthetics with natural alternatives wherever we can. 
            Like using wool, tree fiber, and sugar cane. They're soft, breathable, and better for the planet—win, win, win.
          </p>
          <a href="#" className="text-blue-600 mt-2 inline-block hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default AllbirdsApproach;
