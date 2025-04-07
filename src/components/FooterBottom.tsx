import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


const FooterBottom: React.FC = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Left Section - Follow the Flock */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold pb-5">FOLLOW THE FLOCK</h3>
          <p className="text-gray-400 text-sm max-w-sm pb-4">
            Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. 
            Oh, we have cute sheep, too. #allbirds
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faTiktok} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-gray-300 text-xl" />
            <FontAwesomeIcon icon={faYoutube} className="cursor-pointer hover:text-gray-300 text-xl" />
          </div>
        </div>

        {/* Middle Section - Certified B Corporation */}
        <div className="mb-6 md:mb-0">
        <img className="Footer__b-corp-logo Lazy--loaded" data-src="//cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg" alt="B Corporation Logo" src="//cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg" />
        </div>

        {/* Right Section - Flags */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-2">
          {[
            "🇺🇸", "🇨🇦", "🇦🇺", "🇳🇿", "🇨🇳", "🇪🇺", "🇯🇵", "🇰🇷", "🇦🇪", "🇧🇪", "🇩🇪", "🇮🇪"
          ].map((flag, index) => (
            <span key={index} className="text-4xl">{flag}</span>
          ))}
        </div>
      </div> 

      {/* Footer Bottom Links */}
      <div className="w-full mx-auto px-6 mt-6 text-gray-400 text-sm text-center md:text-left">
        <p className="text-center">© 2024 Allbirds. All Rights Reserved. 
          <span className="ml-4 hover:text-white cursor-pointer">Terms</span> | 
          <span className="hover:text-white cursor-pointer"> Privacy & Accessibility</span>
        </p>
        <p className="mt-2 hover:text-white cursor-pointer text-center">
          Do Not Sell My Personal Information
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;