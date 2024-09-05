import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load the cart from localStorage when the app starts (only runs once)
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Hydrate the cart from localStorage
    }
  }, []);

  // Save the cart to localStorage whenever it changes and calculate totals
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); // Clean localStorage if the cart is empty
    }

    // Calculate total quantity and total price
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    
    setTotalQuantity(totalQty);
    setTotalPrice(totalCost);
  }, [cart]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity if product exists
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }]; // Add new product
    });
  };


  // Function to remove product from cart
//   const removeFromCart = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       ).filter((item) => item.quantity > 0)
//     );
//   };

const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
