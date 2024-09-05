import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartTotal = () => {
  const { getTotalQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-total">
      <h3>Total Quantity: {getTotalQuantity()}</h3>
      <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  );
};

export default CartTotal;
