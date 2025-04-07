import React from "react";
import Header1 from "../components/Header1";
import Nav from "../components/Nav";

const Sustainable: React.FC = () => {
  return (<>
  <Header1 />
  <Nav />
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-4xl bg-white p-6">
        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Initiatives */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold uppercase mb-4">Initiatives</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="hover:text-black hover:underline cursor-pointer">Our Sustainability Strategy</li>
              <li className="hover:text-black hover:underline cursor-pointer">MO.ONSHOT</li>
              <li className="hover:text-black hover:underline cursor-pointer">How We Operate</li>
              <li className="hover:text-black hover:underline cursor-pointer">Carbon Footprint</li>
              <li className="hover:text-black hover:underline cursor-pointer">Regenerative Agriculture</li>
              <li className="hover:text-black hover:underline cursor-pointer">Renewable Materials</li>
              <li className="hover:text-black hover:underline cursor-pointer">Carbon Offsets</li>
              <li className="hover:text-black hover:underline cursor-pointer">Responsible Energy</li>
            </ul>
          </div>

          {/* Right Side - Featured */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-lg font-bold uppercase mb-4">Featured</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Sustainability Strategy Card */}
              <div className="relative w-full h-32 md:h-40 flex items-center justify-center text-white font-bold uppercase text-center text-sm md:text-lg"
                style={{ background: "linear-gradient(to right, #d97706, #2563eb)" }}>
                <span>Our Sustainability Strategy</span>
              </div>

              {/* Allbirds Rerun Marketplace Card */}
              <div className="relative w-full h-32 md:h-40 bg-gray-300 flex items-center justify-center text-white font-bold uppercase text-center text-sm md:text-lg"
                style={{ backgroundImage: "url('/images/img7.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
                  <span>Allbirds Rerun™ Marketplace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sustainable;