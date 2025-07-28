import React from "react";
import { motion } from "framer-motion";

const ItemCard = ({ cardDetails, index = 0 }) => {
  const { image, title, actualPrice, mrp } = cardDetails;
  
  return (
    <motion.div 
      className="border group border-black rounded-2xl overflow-hidden hover-lift animate-tilt shimmer-effect cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="max-h-[20rem] w-[320px] object-cover transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Floating badge */}
        <motion.div
          className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {Math.round(((mrp - actualPrice) / mrp) * 100)}% OFF
        </motion.div>
      </div>
      
      <motion.div 
        className="p-4 flex flex-col gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="softTitle max-w-[18rem] group-hover:text-primary transition-all duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span 
            className="text-xl font-bold text-primary"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            ₹{actualPrice}
          </motion.span>
          <motion.span 
            className="line-through text-gray-500"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            MRP ₹{mrp}
          </motion.span>
        </motion.div>
        
        {/* Add to cart button that appears on hover */}
        <motion.button
          className="mt-2 bg-black text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Add to Cart
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ItemCard;
