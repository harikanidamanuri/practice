
import { useState } from "react";

const Header1 = () => {
  const [bannerContent, setBannerContent] = useState(
    "Spring Sale One weekend Only! Up To 50% off Select Shoes For Spring."
  );

  const changeBannerContent = () => {
    const newContent =
      bannerContent === "Spring Sale One weekend Only! Up To 50% off Select Shoes For Spring."
        ? "New Sale Alert! Up to 40% off on All Spring Collection!"
        : "Spring Sale One weekend Only! Up To 50% off Select Shoes For Spring.";
    setBannerContent(newContent);
  };

  return (
    <>
      <div className="bg-purple-900 text-white text-center py-2 text-sm w-full fixed top-0 left-0 z-10 flex justify-between items-center px-4">
        <div className="flex-grow text-center">{bannerContent}</div>

        <button
          onClick={changeBannerContent}
          className="text-white hover:text-gray-300"
        >
          <span className="inline-block text-xl">{`>`}</span>
        </button>
      </div>
    </>
  );
};

export default Header1;
