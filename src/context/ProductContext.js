import React, { createContext, useState, useEffect } from 'react';

// Create a ProductContext
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch product data from a local JSON file or API
  useEffect(() => {
    // Mock product data - You can replace this with a fetch request to an API
    const fetchProducts = async () => {
      const response = await fetch('/products.json'); // OR an API URL
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};