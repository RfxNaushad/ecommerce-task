import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Store from "./components/Store";
import Cart from "./components/Cart";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Private Routes for Store and Cart */}
              <Route
                path="/store"
                element={
                  <PrivateRoute>
                    <Header />
                    <Store />
                    <Footer></Footer>
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Header />
                    <Cart />
                    <Footer></Footer>
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
