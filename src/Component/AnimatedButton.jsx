import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "medium",
  className = "",
  disabled = false,
  icon = null,
  ...props 
}) => {
  const baseClasses = "relative overflow-hidden font-semibold rounded-lg transition-all duration-300 shimmer-effect";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10",
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      disabled={disabled}
      {...props}
    >
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Button content */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-2"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <motion.span
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
        <span>{children}</span>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        whileHover={{ translateX: "200%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;