import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="wrapper paddingTop paddingBottom">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            className="group relative border rounded-lg overflow-hidden hover-lift animate-tilt cursor-pointer"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <Link to={`/product/${product._id}`}>
              <div className="aspect-square overflow-hidden relative">
                <motion.img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Stock status badge */}
                {product.stock && (
                  <motion.div
                    className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Out of Stock
                  </motion.div>
                )}
                
                {/* Quick view button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Quick View
                  </motion.button>
                </motion.div>
              </div>
              
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <motion.h3 
                    className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  {/* Wishlist button */}
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className="z-10 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AnimatePresence mode="wait">
                      {wishlist.some((item) => item.id === product.id) ? (
                        <motion.div
                          key="filled"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaHeart className="w-5 h-5 text-red-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="outline"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: -180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-primary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
                
                <motion.div 
                  className="mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {product.stock ? (
                    <motion.span 
                      className="text-red-500 font-semibold"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Currently unavailable
                    </motion.span>
                  ) : (
                    <motion.p 
                      className="font-bold text-lg text-primary"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      ₹{product.amount.toFixed(2)}
                    </motion.p>
                  )}
                </motion.div>
                
                {/* Add to cart button */}
                <motion.button
                  className="w-full mt-3 bg-black text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic here
                  }}
                >
                  <motion.span
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Add to Cart
                  </motion.span>
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
