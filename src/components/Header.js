import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../image/ficon.png'


const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white py-4 px-6 shadow-md flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="FurniFlex" className="h-10 w-10"/>
        <span className="font-bold text-xl text-blue-600">FurniFlex</span>
      </div>

      {/* Nav Links */}
      <nav className="space-x-6 text-gray-700">
        <Link to="#" className="hover:text-blue-600">Home</Link>
        <Link to="/store" className="hover:text-blue-600">Products</Link>
        <Link to="#" className="hover:text-blue-600">Categories</Link>
        <Link to="#" className="hover:text-blue-600">Custom</Link>
        <Link to="#" className="hover:text-blue-600">Blog</Link>
      </nav>

      {/* User & Cart Section */}
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative">
        <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '24px', color: 'black' }} />
          <span className="absolute top-4 right-0 left-4 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        </Link>

        {user ? (
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Hello, {user.displayName || user.email}</span>
            {user.photoURL && <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />}
            <button onClick={logout} className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;

