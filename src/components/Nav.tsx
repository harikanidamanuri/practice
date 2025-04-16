import { useState } from "react";
import { User, Search, HelpCircle, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "MEN", href: "Men" },
    { label: "WOMEN", href: "Women" },
    { label: "SOCKS", href: "Socks" },
    { label: "SALE", href: "Sale", special: true },
    { label: "SUSTAINABLE", href: "Sustainable" },
    { label: "RETURN", href: "Return" },
    { label: "STORES", href: "Stores" },
  ];

  const iconButtons = [
    { icon: <User size={24} />, label: "User" },
    { icon: <Search size={24} />, label: "Search" },
    { icon: <HelpCircle size={24} />, label: "Help" },
    { icon: <ShoppingCart size={24} />, label: "Cart" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow font-custom h-16 mt-10">
        <div className="relative h-16 lg:h-20 w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between">

          {/* Left - Mobile Menu Icon */}
          <div className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <button onClick={toggleMobileMenu} className="text-gray-600">
              <Menu size={24} />
            </button>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/">
              <img
                src="./images/Allbirdslogo.png"
                alt="Allbirds Logo"
                className="h-8 sm:h-10"
              />
            </Link>
          </div>

          {/* Right - Cart icon for mobile */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button className="text-gray-700 hover:text-black">
              <ShoppingCart size={24} />
            </button>
          </div>

          {/* Desktop nav links (left) */}
          <div className="hidden lg:flex items-center space-x-6 font-semibold text-gray-800">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hover:underline ${link.special ? "text-red-500" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop nav links + icons (right) */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-800 font-semibold ml-auto">
            {navLinks.slice(4).map((link) => (
              <a key={link.label} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
            <div className="flex space-x-4">
              {iconButtons.map((button) => (
                <button
                  key={button.label}
                  className="text-gray-700 hover:text-black group relative"
                >
                  {button.icon}
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white py-1 px-2 rounded-md whitespace-nowrap">
                    {button.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-inner p-4 space-y-4">
            <ul className="flex flex-col space-y-4 font-semibold text-gray-800 text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`hover:underline ${link.special ? "text-red-500" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-6 pt-4">
              {iconButtons.map((button) => (
                <button
                  key={button.label}
                  className="text-gray-500 hover:text-black"
                >
                  {button.icon}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
