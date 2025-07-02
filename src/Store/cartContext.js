import { createContext, useContext, useState } from "react";
import { clearCartapi } from "../api/cartapi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (Array.isArray(product)) {
      // Handle array of items (e.g., from backend fetch)
      setCartItems((prevCart) => {
        const newItems = product.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity,
        }));
        // Merge with existing items, updating quantities for duplicates
        const mergedItems = [...prevCart];
        newItems.forEach((newItem) => {
          const existingItem = mergedItems.find(
            (item) => item.id === newItem.id
          );
          if (existingItem) {
            existingItem.quantity = newItem.quantity; // Use backend quantity
          } else {
            mergedItems.push(newItem);
          }
        });
        return mergedItems;
      });
    } else {
      // Handle single item
      setCartItems((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      });
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const clearCart = (id) => {
    clearCartapi(id);
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
