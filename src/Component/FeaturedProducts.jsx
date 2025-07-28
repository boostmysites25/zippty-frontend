import React from "react";
import { motion } from "framer-motion";
import product_catlaiser from "../assets/images/productsimages/product_catlaiser.jpeg";
import product_smartcar from "../assets/images/productsimages/product_smartcar.jpeg";
import ItemCard from "./ItemCard";

const FeaturedProducts = () => {
  const productDetails = [
    {
      image: product_catlaiser,
      title: `Cat Laser Toy, Automatic 
Rotating Laser Pointer for Cats`,
      actualPrice: 5998,
      mrp: 12199,
    },
    {
      image: product_smartcar,
      title: `E&E Bestlife Smart Car Remote 
Control`,
      actualPrice: 1998,
      mrp: 12199,
    },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="wrapper paddingTop paddingBottom">
        <motion.h1 
          className="title-heading text-center mb-6 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h1>
        
        <motion.div 
          className="flex justify-center gap-5 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {productDetails.map((obj, index) => (
            <ItemCard key={index} cardDetails={obj} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
