// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { ProductProvider } from './context/ProductContext';
// import { CartProvider } from './context/CartContext';
// import Header from './components/Header';
// import Login from './components/Login';
// import Store from './components/Store';
// import Cart from './components/Cart';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <ProductProvider>
//           <CartProvider>
//             <Header />
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               {/* Private Routes for Store and Cart */}
//               <Route path="/store" element={<PrivateRoute><Store /></PrivateRoute>} />
//               <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
//             </Routes>
//           </CartProvider>
//         </ProductProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider, AuthContext } from './context/AuthContext';
// import { ProductProvider } from './context/ProductContext';
// import { CartProvider } from './context/CartContext';
// import Header from './components/Header';
// import Login from './components/Login';
// import Store from './components/Store';
// import Cart from './components/Cart';
// import PrivateRoute from './components/PrivateRoute';

// // Conditional App Structure based on authentication
// function AppContent() {
//   const { user } = useContext(AuthContext);

//   return (
//     <>
//       {user && <Header />} {/* Show header only if user is logged in */}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {/* Private Routes for Store and Cart */}
//         <Route path="/store" element={<PrivateRoute><Store /></PrivateRoute>} />
//         <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <ProductProvider>
//           <CartProvider>
//             <AppContent />
//           </CartProvider>
//         </ProductProvider>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Login from './components/Login';
import Store from './components/Store';
import Cart from './components/Cart';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              {/* Private Routes for Store and Cart */}
              <Route
                path="/store"
                element={
                  <PrivateRoute>
                    <Header />
                    <Store />
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Header />
                    <Cart />
                  </PrivateRoute>
                }
              />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
