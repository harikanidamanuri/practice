import { useState } from "react";
import { User, Search, HelpCircle, ShoppingCart, Menu } from "lucide-react"; // Import Lucide icons

const Nav = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define the navigation links for different sections
  const navLinks = [
    { label: "MEN", href: "Men" },
    { label: "WOMEN", href: "Women" },
    { label: "SOCKS", href: "Socks" },
    { label: "SALE", href: "Sale", special: true },
    { label: "SUSTAINABLE", href: "Sustainable" },
    { label: "RETURN", href: "Return" },
    { label: "STORES", href: "Stores" },
  ];

  // Define the icon buttons and their respective hover text
  const iconButtons = [
    { icon: <User size={24} color="black" />, label: "User" },
    { icon: <Search size={24} color="black" />, label: "Search" },
    { icon: <HelpCircle size={24} color="black" />, label: "Help" },
    { icon: <ShoppingCart size={24} color="black" />, label: "Cart" },
  ];

  // Handle mobile menu toggle
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      {/* Heading */}
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">Welcome to Allbirds</h1>
      </header>

      {/* Desktop and Tablet Navigation */}
      <nav className="flex items-center shadow-md w-full top-0 left-0 z-10 bg-white sticky top-0 z-50 font-custom">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Left Navigation: Men, Women, Socks, Sale */}
          <ul className="flex space-x-8 font-semibold text-gray-800 hidden md:flex">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`hover:underline ${link.special ? 'text-red-500' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo (Centered) */}
          <div className="flex justify-center flex-grow">
            <img
              src="./images/Allbirdslogo.png"
              alt="Allbirds Logo"
              className="h-10 hidden md:block" // Hide logo on mobile
            />
          </div>

          {/* Right Navigation: Sustainable, Return, Stores */}
          <ul className="hidden md:flex space-x-6 px-8 font-semibold pl-10">
            {navLinks.slice(4).map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Icon Buttons on Desktop */}
          <div className="hidden md:flex space-x-6 items-center ml-4 pr-10 mt-2">
            {iconButtons.map((button) => (
              <button key={button.label} className="text-gray-500 hover:text-black group relative mb-3">
                {button.icon}
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-10 left-1/2 transform -translate-x-1/2 bg-black text-white py-1 px-2 rounded-md">
                  {button.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        {/* Mobile Menu Icon (Hamburger) */}
        <button onClick={toggleMobileMenu} className="text-gray-600">
          <Menu size={24} />
        </button>

        {/* Logo - Only for Mobile View */}
        <div className="flex justify-center flex-grow">
          <img
            src="./images/Allbirdslogo.png"
            alt="Allbirds Logo"
            className="h-8 text-center" // Visible only on mobile
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col space-y-4 font-semibold text-gray-800">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`hover:underline ${link.special ? 'text-red-500' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Icons in Mobile Menu */}
            <div className="flex space-x-4 mt-4">
              {iconButtons.map((button) => (
                <button key={button.label} className="text-gray-500 hover:text-black">
                  {button.icon}
                </button>
              ))}
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
