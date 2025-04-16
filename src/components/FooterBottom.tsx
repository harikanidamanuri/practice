import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterBottom: React.FC = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start">
        
        <div className="lg:w-1/3">
          <h3 className="text-lg font-bold mb-3">FOLLOW THE FLOCK</h3>
          <p className="text-gray-400 text-sm mb-4">
            Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild.
            Oh, we have cute sheep, too. #allbirds
          </p>
         
          <div className="flex gap-4 mt-2">
            <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faTiktok} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faYoutube} className="cursor-pointer hover:text-gray-300 text-xl" />
          </div>
        </div>

        
        <div className="lg:w-1/3 flex justify-center">
          <img
            className="w-20 h-20 object-contain"
            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg"
            alt="B Corporation Logo"
          />
        </div>

        
        <div className="lg:w-1/3 flex flex-wrap justify-center lg:justify-end gap-2">
          {[
            "🇺🇸", "🇨🇦", "🇦🇺", "🇳🇿", "🇨🇳", "🇪🇺",
            "🇯🇵", "🇰🇷", "🇦🇪", "🇧🇪", "🇩🇪", "🇮🇪",
          ].map((flag, index) => (
            <span key={index} className="text-2xl sm:text-3xl">{flag}</span>
          ))}
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="w-full mx-auto px-6 mt-6 text-gray-400 text-sm text-center space-y-2">
        <p>
          © 2024 Allbirds. All Rights Reserved.
          <span className="ml-2 hover:text-white cursor-pointer">Terms</span> |
          <span className="ml-1 hover:text-white cursor-pointer"> Privacy & Accessibility</span>
        </p>
        <p className="hover:text-white cursor-pointer">
          Do Not Sell My Personal Information
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
