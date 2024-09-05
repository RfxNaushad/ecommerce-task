import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Store from './components/Store';
import Cart from './components/Cart';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/store"
          element={
            <PrivateRoute>
              <Store />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            
              <Cart />
            
          }
        />
      </Routes>
    </Router>
  );
}

export default App;