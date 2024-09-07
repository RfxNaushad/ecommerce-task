import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="border-b">
      <header className="container mx-auto bg-white py-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="FurniFlex" className="h-10 w-10" />
          <span className="font-bold text-xl text-black">
            Furni<span className="text-blue-400">Flex</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className="space-x-6 text-gray-700 text-base font-semibold">
          <Link to="#" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/store" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Categories
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Custom
          </Link>
          <Link to="#" className="hover:text-blue-600">
            Blog
          </Link>
        </nav>

        {/* User & Cart Section */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FontAwesomeIcon
              icon={faCartPlus}
              style={{ fontSize: "24px", color: "gray" }}
            />
            <span className="absolute top-4 bg-gray-700 right-0 left-4 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          </Link>

          <div className="relative">
            {user && (
              <div className="flex items-center space-x-2">
                <div onClick={toggleDropdown} className="cursor-pointer">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                  ) : (
                    <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"></span>
                  )}
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2  text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
