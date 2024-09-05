// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// const Cart = () => {
//   const { cart, removeFromCart, totalQuantity, totalPrice } = useContext(CartContext);

//   return (
// <div className="container mx-auto p-6">
// <h2 className="text-2xl font-bold mb-6">An overview of your order</h2>

// {cart.length === 0 ? (
//   <p className="text-gray-500">Your cart is empty</p>
// ) : (
//   <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
//     <div className="w-full md:w-2/3">
//       <div className="flex flex-col space-y-4">
//         {cart.map((item) => (
//           <div 
//             key={item.id} 
//             className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white"
//           >
//             <div className="flex items-center space-x-4">
//               <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg"/>
//               <div>
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-500">Price: €{item.price}</p>
//                 <p className="text-gray-500">Quantity: {item.quantity}</p>
//               </div>
//             </div>
//             <button 
//               onClick={() => removeFromCart(item.id)} 
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Cart Summary */}
    // <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
    //   <h3 className="text-xl font-bold mb-4">Order details</h3>
    //   <p className="text-gray-700">Total Items: {totalQuantity}</p>
    //   <p className="text-gray-700">Subtotal: €{totalPrice.toFixed(2)}</p>
    //   <p className="text-gray-700">Shipping: Free</p>
    //   <p className="text-gray-700">Estimated Tax: €0</p>
    //   <h3 className="text-2xl font-bold mt-4">Total: €{totalPrice.toFixed(2)}</h3>
    //   <button 
    //     className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-900"
    //   >
    //     Go to Checkout
    //   </button>
    // </div>
//   </div>
// )}
// </div>
// );
// }; 

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
      {/* Product List */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center space-x-4">
                {/* Image */}
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg"/>
                
                {/* Product Details */}
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">€{item.price}</p>
                </div>
              </div>

              {/* Quantity Adjustment */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => decreaseQuantity(item.id)} 
                  className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => increaseQuantity(item.id)} 
                  className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Price and Remove */}
             
              <div className="flex items-center space-x-4">
                <p className="text-lg font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-600 hover:text-red-800 text-xl"
                >
                  &times; {/* Cross to remove item */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Order details</h3>
      <p className="text-gray-700">Total Items: {totalQuantity}</p>
      <p className="text-gray-700">Subtotal: €{totalPrice.toFixed(2)}</p>
      <p className="text-gray-700">Shipping: Free</p>
      <p className="text-gray-700">Estimated Tax: €0</p>
      <h3 className="text-2xl font-bold mt-4">Total: €{totalPrice.toFixed(2)}</h3>
      <button 
        className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-900"
      >
        Go to Checkout
      </button>
    </div>
      
    </div>
  );
};

export default Cart;
