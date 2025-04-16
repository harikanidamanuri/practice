import { useState, useEffect } from "react";

const Header1 = () => {
  const [bannerContent, setBannerContent] = useState(
    "Free Shipping On Orders Over $75. Easy Returns."
  );

  
  const changeBannerContent = () => {
    const newContent =
      bannerContent === "Free Shipping On Orders Over $75. Easy Returns."
        ? "New Sale Alert! Up to 40% off on All Spring Collection!"
        : "Free Shipping On Orders Over $75. Easy Returns.";
    setBannerContent(newContent);
  };

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBannerContent();
    }, 2000); // Change content every 2 seconds

    return () => clearInterval(intervalId); 
  }, [bannerContent]);

  return (
    <>
      <div className="font-Geo bg-black text-white text-center py-2 text-xs sm:text-sm md:text-base w-full fixed top-0 left-0 z-10 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Banner content */}
        <div className="flex-grow text-center">
          <span className="block">{bannerContent}</span>
        </div>

        {/* Button to manually change banner content */}
        <button
          onClick={changeBannerContent}
          className="text-white hover:text-gray-300 ml-2 sm:ml-4 md:ml-6 text-xl md:text-2xl"
        >
          <span className="inline-block">{`>`}</span>
        </button>
      </div>
    </>
  );
};

export default Header1;
