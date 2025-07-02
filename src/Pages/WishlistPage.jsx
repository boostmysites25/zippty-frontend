import React from "react";
import { useWishlist } from "../Store/wishlistContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductGrid from "../Component /ProductGrid";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      {wishlist.length > 0 && (
        <h1 className="text-2xl font-bold mb-6 text-center">Your Wishlist</h1>
      )}
      {wishlist.length > 0 ? (
        <>
          <ProductGrid products={wishlist} />
        </>
      ) : (
        <div className="text-center text-gray-600 min-h-[50vh] flex justify-center items-center flex-col">
          <h1 className="text-2xl font-bold mb-6 text-center">Your Wishlist</h1>
          <p>Please add items to wishlist</p>
          <div className="flex justify-center mt-6">
            <Link
              to="/shop"
              className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
