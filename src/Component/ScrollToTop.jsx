import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 left-8 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 15px 30px rgba(16, 16, 115, 0.3)",
            y: -5
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 17 
          }}
        >
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowUp className="text-xl relative z-10" />
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full rounded-full"
            animate={{ translateX: ["100%", "-100%"] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
