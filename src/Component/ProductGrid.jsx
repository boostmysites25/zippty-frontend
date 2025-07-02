import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../Store/wishlistContext";

const ProductGrid = ({ products }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="wrapper paddingTop paddingBottom">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.title}
            className="group relative border rounded-lg overflow-hidden"
          >
            <Link to={`/product/${product._id}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  {/* <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className="z-10 px-2 mb-auto rounded-full hover:bg-white/80"
                  >
                    {wishlist.some((item) => item.id === product.id) ? (
                      <FaHeart className="w-5 h-5 text-red-500" />
                    ) : (
                      <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-orange-500" />
                    )}
                  </button> */}
                </div>
                <p className="font-bold mt-2">
                  {product.stock ? (
                    <span className="text-red-500">Currently unavailable</span>
                  ) : (
                    `₹` + product.amount.toFixed(2)
                  )}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
