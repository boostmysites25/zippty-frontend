import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaShoppingCart, FaHeart, FaPhone, FaWhatsapp } from "react-icons/fa";

const FloatingActionButton = ({ actions = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainButtonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  };

  const menuVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      scale: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const defaultActions = [
    {
      icon: <FaShoppingCart />,
      label: "Cart",
      onClick: () => console.log("Cart clicked"),
      color: "bg-blue-500"
    },
    {
      icon: <FaHeart />,
      label: "Wishlist",
      onClick: () => console.log("Wishlist clicked"),
      color: "bg-red-500"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      onClick: () => console.log("WhatsApp clicked"),
      color: "bg-green-500"
    },
    {
      icon: <FaPhone />,
      label: "Call",
      onClick: () => console.log("Call clicked"),
      color: "bg-purple-500"
    }
  ];

  const menuActions = actions.length > 0 ? actions : defaultActions;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
        className="flex flex-col-reverse items-end space-y-reverse space-y-3"
      >
        {/* Action Items */}
        <AnimatePresence>
          {isOpen && menuActions.map((action, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              {/* Label */}
              <motion.div
                className="bg-black text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {action.label}
              </motion.div>
              
              {/* Action Button */}
              <motion.button
                className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg flex items-center justify-center`}
                onClick={action.onClick}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {action.icon}
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          className="w-16 h-16 bg-primary text-white rounded-full shadow-lg flex items-center justify-center relative overflow-hidden"
          onClick={toggleMenu}
          variants={mainButtonVariants}
          animate={isOpen ? "open" : "closed"}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 15px 30px rgba(16, 16, 115, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <FaPlus className="text-xl relative z-10" />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            animate={{ translateX: ["100%", "-100%"] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingActionButton;