import React from "react";
import FooterBottom from "./FooterBottom";
const footerData = [
  {
    title: "HELP",
    links: [
      "1-888-963-8944",
      "1-814-251-9966 (Text)",
      "help@allbirds.com",
      "Returns/Exchanges",
      "FAQ/Contact Us",
      "Afterpay",
    ],
  },
  {
    title: "SHOP",
    links: [
      "Men's Shoes",
      "Women's Shoes",
      "Men's Apparel",
      "Women's Apparel",
      "Socks",
      "Gift Cards",
      "Refer a Friend",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "Our Stores",
      "Our Story",
      "Our Materials",
      "Sustainability",
      "Investors",
      "Shoe Care",
      "Affiliates",
      "Bulk Orders",
      "Careers",
      "Press",
      "Allbirds Responsible Disclosure Program",
      "California Transparency Act",
      "Community Offers",
      "Our Blog",
      "Patents",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {footerData.map((section, index) => (
          <div key={index} className="text-left">
            <h3 className="font-bold text-lg mb-4 text-left">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-gray-300 hover:text-white cursor-pointer text-left">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
