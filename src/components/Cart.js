import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="container mx-auto flex flex-col pb-20 pt-20 md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold m-4">An overview of your order</h2>
        <div className="flex flex-col" style={{ backgroundColor: "#fafafa" }}>
          {cart.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center justify-between pt-8 px-4 pb-8 border-b"
              style={{ backgroundColor: "#fafafa" }}
            >
              {/* Flex Container for Centering Items */}
              <div className="flex flex-1 items-center space-x-4">
                <div className="flex items-center space-x-2 border-2 rounded">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-gray-600 px-2 py-1 rounded-full hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="text-gray-600 px-2 py-1 rounded-full hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Image and Product Details */}
                <div className="flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-end">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-3 right-5 text-gray-400 font-thin text-4xl"
                  style={{ transform: "translateX(50%)" }}
                >
                  &times; {/* Cross to remove item */}
                </button>
                <p className="text-lg font-bold mt-16">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-1/3 px-10">
        <h3 className="text-2xl font-bold m-4">Order details</h3>
        <div
          className="p-6 rounded-lg border"
          style={{
            backgroundColor: "#fafafa",
          }}
        >
          <div>
            {/* Left-aligned details */}
            <div className="grid grid-cols-2 gap-x-4 border-b-2">
              <div className="flex flex-col mb-5">
                <p className="text-gray-700 mt-2">Subtotal</p>
                <p className="text-gray-700 mt-2">Shipping</p>
                <p className="text-gray-700 mt-2">
                  Estimated{" "}
                  <FontAwesomeIcon icon={faInfoCircle} className="ml-2" />
                </p>
              </div>
              {/* Right-aligned values */}
              <div className="flex flex-col items-end mb-5">
                <p className="text-gray-700 mt-2">€{totalPrice.toFixed(2)}</p>
                <p className="text-gray-700 mt-2">Free</p>
                <p className="text-gray-700 mt-2 ">€-</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h3 className="text-2xl text-gray-500 font-bold mt-4">Total</h3>
              <h3 className="text-2xl font-bold mt-4">
                €{totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-900">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
