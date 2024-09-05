import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    updateCartQuantity(productId, quantity);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} width="50" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div>
              <label>Quantity: </label>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;