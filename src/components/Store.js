import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import added from "../icon/Added.png"
import "../App.css";


const Store = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [productsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("Rocking chair");
  const [currentPage, setCurrentPage] = useState(1); // Default to page 1

  const query = new URLSearchParams(location.search);

  const categories = ["Rocking chair", "Side chair", "Lounge chair"];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  useEffect(() => {
    const pageFromURL = parseInt(query.get("page")) || 1;
    setCurrentPage(pageFromURL);
  }, [location.search]);

  useEffect(() => {
    setCurrentPage(1);
    navigate("?page=1");
  }, [selectedCategory]);

  return (
    <div className="container w-11/12 mx-auto py-6 pb-20 pt-20">
      <div className="flex">
        {/* Sidebar Filtering */}
        <div className="w-1/4 product-sidebar p-4 border-r-2">
          <ul className="gap-10">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer mb-2 p-2 text-xl border-b-2 font-medium ${
                  selectedCategory === category
                    ? "bg-black text-white rounded-lg"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)} // Set the category on click
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Showcase */}
        <div className="w-3/4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ml-10">
            {currentProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-fill mb-4 rounded-lg h-56"
                />
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-700 mb-2 pt-2.5 flex justify-between items-center text-base">
                  <span className="text-red-600">
                    €{(product.old_price * 0.7).toFixed(2)} 
                  </span>
                  <span className="line-through text-gray-400">
                    €{product.old_price}
                  </span>
                  <span className="text-gray-400">
                    {product.offer}
                  </span>
                </p>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-black text-white py-2 mt-6 rounded-lg hover:bg-gray-900 flex items-center justify-center space-x-2"
                >
                <img src={added} alt="addtocart" className="size-4" />
                <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center pt-20">
            <nav>
              <ul className="flex space-x-2">
                {/* Previous Button */}
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-lg ${
                      currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200"
                    }`}
                  >
                    &lt;
                  </button>
                </li>

                {/* Page Numbers */}
                {[...Array(totalPages).keys()].map((number) => (
                  <li key={number + 1}>
                    <button
                      onClick={() => paginate(number + 1)}
                      className={`px-3 py-1 rounded-lg ${
                        currentPage === number + 1
                          ? "bg-black text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}

                {/* Next Button */}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-lg ${
                      currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200"
                    }`}
                  >
                    &gt;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
