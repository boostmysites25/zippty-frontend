"use client";

import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "../util/contant";

export default function CategorySlider() {
  const [startIndex, setStartIndex] = useState(0);

  const showPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 4));
  };

  const showNext = () => {
    setStartIndex((prev) => Math.min(categories.length - 4, prev + 4));
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="wrapper paddingTop paddingBottom"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2 
          className="title-heading gradient-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Browse by category
        </motion.h2>
        
        <motion.div 
          className="flex gap-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={showPrevious}
            disabled={startIndex === 0}
            className="rounded-full bg-black p-3 text-white disabled:opacity-50 disabled:cursor-not-allowed shimmer-effect"
            whileHover={{ 
              scale: 1.1, 
              rotate: -5,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronLeft className="h-4 w-4" />
            </motion.div>
          </motion.button>
          
          <motion.button
            onClick={showNext}
            disabled={startIndex >= categories.length - 4}
            className="rounded-full bg-black text-white p-3 disabled:opacity-50 disabled:cursor-not-allowed shimmer-effect"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronRight className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          {categories.slice(startIndex, startIndex + 4).map((category, index) => (
            <motion.div
              key={`${category.name}-${startIndex}`}
              className="group cursor-pointer overflow-hidden"
              variants={itemVariants}
              layout
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover-lift animate-tilt"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-[200px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Product count badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {category.products}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-4 text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <motion.h3 
                        className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.name}
                      </motion.h3>
                      <motion.p 
                        className="text-sm opacity-80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {category.products} products
                      </motion.p>
                    </div>
                    
                    <motion.div
                      className="text-primary"
                      whileHover={{ 
                        x: 5,
                        scale: 1.2,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{ translateX: "200%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
