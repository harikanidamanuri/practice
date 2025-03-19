import { FaUser, FaSearch, FaQuestionCircle, FaShoppingCart } from "react-icons/fa"; // Import icons

const Nav = () => {
  return (
    <>
      <div className="bg-purple-800 text-white text-center py-2 text-sm w-full fixed top-0 left-0 z-10">
        Spring Sale One weekend Only! Up To 50% off Select Shoes For Spring.
        <a href="#" className="underline ml-2">Shop Men</a>
        <a href="#" className="underline ml-2">Shop Women</a>
      </div>

      <nav className="flex items-center p-2 shadow-md mt-16 w-full fixed top-0 left-0 z-10 bg-white">
        <div className="w-full flex justify-between items-center">
         
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">MEN</a></li>
            <li><a href="#" className="hover:underline">WOMEN</a></li>
            <li><a href="#" className="hover:underline">SOCKS</a></li>
            <li><a href="#" className="hover:underline text-red-500">SALE</a></li>
          </ul>

          
          <h1 className="text-2xl font-cursive flex-grow text-center">allbirds</h1>

         
          <ul className="flex space-x-6 px-8 font-mono">
            <li><a href="#" className="hover:underline">SUSTAINABLE</a></li>
            <li><a href="#" className="hover:underline">RETURN</a></li>
            <li><a href="#" className="hover:underline">STORES</a></li>
          </ul>

        
          <div className="flex space-x-6 items-center ml-4">
           
            <button className="text-gray-600 hover:text-black">
              <FaUser size={24} color="black" />
            </button>

            <button className="text-gray-600 hover:text-black">
              <FaSearch size={24} color="black" /> 
            </button>

            <button className="text-gray-600 hover:text-black">
              <FaQuestionCircle size={24} color="black" />
            </button>

            <button className="text-gray-600 hover:text-black">
              <FaShoppingCart size={24} color="black" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
