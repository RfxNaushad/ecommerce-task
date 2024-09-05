import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Store = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const navigate  = useNavigate();
  const location = useLocation();

  const [productsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get the current page from the URL or default to 1
  const query = new URLSearchParams(location.search);
  const initialPage = parseInt(query.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Filtering logic
  const categories = ["Rocking chair", "Side chair", "Lounge chair"];
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Function to handle pagination and update the URL
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);  // Update the URL with the new page number
  };

  // Sync the current page from the URL when the component mounts or URL changes
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const pageFromURL = parseInt(query.get('page')) || 1;
    setCurrentPage(pageFromURL);
  }, [location.search]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        {/* Sidebar Filtering */}
        <div className="w-1/4 p-4 border-r-2">
          <h3 className="text-lg font-bold mb-4">Filter by Category</h3>
          <ul>
            <li 
              className={`cursor-pointer mb-2 p-2 ${selectedCategory === "All" ? "bg-blue-500 text-white" : ""}`} 
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            {categories.map((category) => (
              <li 
                key={category}
                className={`cursor-pointer mb-2 p-2 ${selectedCategory === category ? "bg-blue-500 text-white" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Showcase */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg"/>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="line-through text-gray-400">€{product.originalPrice}</span>
                  <span className="ml-2 text-red-600">€{product.price} 30% OFF</span>
                </p>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <button 
                  onClick={() => addToCart(product)} 
                  className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <nav>
              <ul className="flex space-x-2">
                {[...Array(totalPages).keys()].map(number => (
                  <li key={number + 1}>
                    <button
                      onClick={() => paginate(number + 1)}
                      className={`px-3 py-1 rounded-lg ${currentPage === number + 1 ? "bg-black text-white" : "bg-gray-200"}`}
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
