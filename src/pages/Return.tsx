import React from "react";
import Header1 from "../components/Header1";
import Nav from "../components/Nav";
import AllbirdsApproach from "../components/allbirdsapproach";
import FooterData from "../components/FooterData";

const Return: React.FC = () => {
  return (<>
  <Header1 />
  <Nav />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-6xl bg-white flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/img6.jpg"
            alt="Allbirds ReRun Shoes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Allbirds ReRun™</h2>
          <h3 className="text-xl font-semibold text-yellow-600 mb-4">
            A New Way To Get Old Favorites
          </h3>
          <p className="text-gray-700 mb-4">
            Allbirds ReRun™ is a marketplace where you can shop slightly used or imperfectly made
            products, extending their life and lowering our impact on the planet. Allbirds has
            partnered with Trove, a company that specializes in circular commerce, to run
            Allbirds ReRun™ on our behalf.
          </p>
          <p className="text-gray-900 font-semibold mb-4">
            By clicking the link below, you will be leaving allbirds.com and entering
            the ReRun marketplace site.
          </p>
          <a
            href="#"
            className="border border-black px-6 py-3 text-black font-medium uppercase tracking-wide transition duration-300 
                       hover:bg-black hover:text-white"
          >
            Start Shopping ReRun™
          </a>
        </div>
      </div>
    </div>
    <AllbirdsApproach />
    <FooterData />
    </>
  );
};

export default Return;