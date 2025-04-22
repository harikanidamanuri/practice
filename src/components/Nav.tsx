import { useState } from "react";
import { User, Search, HelpCircle, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  const navLinks = [
    { label: "MEN", href: "Men" },
    { label: "WOMEN", href: "Women" },
    { label: "SOCKS", href: "Socks" },
    { label: "SALE", href: "Sale", special: true },
    { label: "SUSTAINABLE", href: "Sustainable" },
    { label: "RETURN", href: "Return" },
    { label: "STORES", href: "Stores" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Tooltip styles
  const tooltip = "absolute top-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition";

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow font-custom h-16 mt-10">
        <div className="relative h-16 lg:h-20 w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <button onClick={toggleMobileMenu} className="text-gray-600">
              <Menu size={24} />
            </button>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/">
              <img
                src="/images/Allbirdslogo.png"
                alt="Allbirds Logo"
                className="h-8 sm:h-10"
              />
            </Link>
          </div>

          {/* Cart Icon (Mobile) */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <Link to="/cart" className="relative text-gray-700 hover:text-black">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Nav Left */}
          <div className="hidden lg:flex items-center space-x-6 font-semibold text-gray-800">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className={`hover:underline ${link.special ? "text-red-500" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Nav Right */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-800 font-semibold ml-auto">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-4">
              {/* Icons with unified tooltip */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-black">
                  <Search size={24} />
                </button>
                <div className={tooltip}>Search</div>
              </div>

              <div className="relative group">
                <Link to="/login" className="text-gray-700 hover:text-black">
                  <User size={24} />
                </Link>
                <div className={tooltip}>User</div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-black">
                  <HelpCircle size={24} />
                </button>
                <div className={tooltip}>Help</div>
              </div>

              <div className="relative group">
                <Link to="/cart" className="relative text-gray-700 hover:text-black">
                  <ShoppingCart size={24} />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
                <div className={tooltip}>Cart</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-inner p-4 space-y-4">
            <ul className="flex flex-col space-y-4 font-semibold text-gray-800 text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={`/${link.href}`}
                    className={`hover:underline ${link.special ? "text-red-500" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-6 pt-4">
              <div className="relative group">
                <Link to="/login" className="text-gray-500 hover:text-black">
                  <User size={24} />
                </Link>
                <div className={tooltip}>User</div>
              </div>

              <div className="relative group">
                <button className="text-gray-500 hover:text-black">
                  <Search size={24} />
                </button>
                <div className={tooltip}>Search</div>
              </div>

              <div className="relative group">
                <button className="text-gray-500 hover:text-black">
                  <HelpCircle size={24} />
                </button>
                <div className={tooltip}>Help</div>
              </div>

              <div className="relative group">
                <Link to="/cart" className="relative text-gray-500 hover:text-black">
                  <ShoppingCart size={24} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
                <div className={tooltip}>Cart</div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
