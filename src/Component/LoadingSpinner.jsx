import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "medium", color = "primary" }) => {
  const sizes = {
    small: "w-6 h-6",
    medium: "w-10 h-10",
    large: "w-16 h-16",
  };

  const colors = {
    primary: "border-primary",
    white: "border-white",
    black: "border-black",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export const LoadingDots = ({ color = "primary" }) => {
  const colors = {
    primary: "bg-primary",
    white: "bg-white",
    black: "bg-black",
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 ${colors[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export const LoadingPulse = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`bg-gray-200 rounded-lg ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const LoadingCard = () => {
  return (
    <div className="border rounded-lg overflow-hidden animate-pulse">
      <LoadingPulse className="h-48 w-full" />
      <div className="p-4 space-y-3">
        <LoadingPulse className="h-4 w-3/4" />
        <LoadingPulse className="h-4 w-1/2" />
        <LoadingPulse className="h-8 w-full" />
      </div>
    </div>
  );
};

export default LoadingSpinner;