import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setWishlist([]);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      }
    };
    fetchWishlist();
  }, []);

  const addToWishlist = async (product) => {
    try {
      setWishlist((prevWishlist) => {
        const isProductInWishlist = prevWishlist.some(
          (item) => item.id === product.id
        );
        if (!isProductInWishlist) {
          return [...prevWishlist, product];
        }
        return prevWishlist;
      });
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    }
  };

  // Remove item from wishlist and sync with backend
  const removeFromWishlist = async (productId) => {
    try {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.id !== productId)
      );
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
