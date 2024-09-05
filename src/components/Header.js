// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const Header = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <header>
//       <h1>E-commerce App</h1>
//       {user ? (
//         <>
//           <span>Welcome, {user.email}</span>
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <a href="/login">Login</a>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Calculate total items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <nav>
        <ul>
          {user ? (
            <>
              <li><Link to="/store">Store</Link></li>
              <li><Link to="/cart">Cart ({totalItems})</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;