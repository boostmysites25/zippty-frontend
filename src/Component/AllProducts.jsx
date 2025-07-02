import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductFilters from "./ProductFilters";
import { useWishlist } from "../Store/wishlistContext";
import { fetchProducts } from "../api/productapi";

const AllProducts = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [popups, setPopups] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from backend on mount
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await fetchProducts();
        const backendProducts = response.products || [];
        // Map backend products to frontend format
        const formattedProducts = backendProducts.map((product) => ({
          id: product._id,
          title: product.name,
          price: product.amount,
          image: product.images[0] || "/placeholder.svg",
          stock: product.stock || 10, // Default to 10 if stock is not provided
        }));
        setProducts(formattedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.response?.data?.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      showPopup(product.id);
    }
  };

  const showPopup = (productId) => {
    setPopups((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setPopups((prev) => ({ ...prev, [productId]: false }));
    }, 100);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8">
        {/* <ProductFilters /> */}
        <main className="lg:col-span-4">
          {/* <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">Showing 12-12 of 14 results</p>
            <select className="border rounded-md px-3 py-1.5 text-sm">
              <option>Sort by latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Sort by popularity</option>
            </select>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative border rounded-lg overflow-hidden"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-sm line-clamp-2">
                        {product.title}
                      </h3>
                      {/* <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product);
                        }}
                        className="z-10 px-2 mb-auto rounded-full hover:bg-white/80 relative"
                      >
                        {wishlist.some((item) => item.id === product.id) ? (
                          <FaHeart
                            className={`w-5 h-5 text-red-500 transition-transform duration-300 ${
                              popups[product.id] ? "scale-150" : "scale-100"
                            }`}
                          />
                        ) : (
                          <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-orange-500" />
                        )}
                      </button> */}
                    </div>
                    <p className="font-bold mt-2">
                      {!product.stock ? (
                        <span className="text-red-500">
                          Currently unavailable
                        </span>
                      ) : (
                        `₹${product.price.toFixed(2)}` // Changed to ₹ to match CartItems
                      )}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllProducts;
