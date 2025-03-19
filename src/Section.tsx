import React from "react";

const Section = () => {
  // Define the help phone numbers for each section
  const helpHeadings = [
    "1-888-963-8944",
    "1-814-251-9966(Text)",
    "help@allbirds.com",
    "Returns/Exchanges",
    "FAQ/contact Us",
    "Afterpay"
  ];

  // Define company numbers for each section
  const companyHeadings = [
    "Our Stores",
    "Our Story",
    "Out Materials",
    "Sustainability",
    "Investores",
    "Shoe Care",
    "Affililates",
    "Bulk Orders",
    "Careers",
    "Press",
  ];

  return (
    <div className="bg-black py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-around items-start text-white">
          
          {/* Help Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase">Help</h3>
            {helpHeadings.map((heading, index) => (
              <h6 key={index} className="text-sm mt-2">
                {heading}
              </h6>
            ))}
          </div>
          
          {/* Shop Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase">Shop</h3>
            <h6 className="text-sm mt-2">Men's Shoes</h6>
            <h6 className="text-sm mt-2">Women's Shoes</h6>
            <h6 className="text-sm mt-2">Men's Apparel</h6>
            <h6 className="text-sm mt-2">Women's Apparel</h6>
            <h6 className="text-sm mt-2">Socks</h6>
            <h6 className="text-sm mt-2">Gift Cards</h6>
            <h6 className="text-sm mt-2">Refer & Friends</h6>
          </div>
          
          {/* Company Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold uppercase">Company</h3>
            {companyHeadings.map((heading, index) => (
              <h6 key={index} className="text-sm mt-2">
                {heading}
              </h6>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section;
