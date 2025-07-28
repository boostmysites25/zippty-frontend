import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaAward, FaBox, FaClock } from "react-icons/fa";

const Experience = () => {
  // Target values for each section
  const targetYearsInBusiness = 28;
  const targetHappyClients = 2;
  const targetBrands = 72;
  const targetProducts = 1800;

  // State variables
  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [brands, setBrands] = useState(0);
  const [products, setProducts] = useState(0);

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // Animation duration in milliseconds
      const steps = 50; // Number of animation steps
      const intervalTime = duration / steps; // Interval per step

      const updateCounts = (setter, target) => {
        let stepValue = target / steps;
        let count = 0;

        const interval = setInterval(() => {
          count += stepValue;
          if (count >= target) {
            setter(target);
            clearInterval(interval);
          } else {
            setter(Math.ceil(count));
          }
        }, intervalTime);

        return interval;
      };

      // Run all counters in parallel
      const yearsInterval = updateCounts(
        setYearsInBusiness,
        targetYearsInBusiness
      );
      const clientsInterval = updateCounts(setHappyClients, targetHappyClients);
      const brandsInterval = updateCounts(setBrands, targetBrands);
      const productsInterval = updateCounts(setProducts, targetProducts);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(clientsInterval);
        clearInterval(brandsInterval);
        clearInterval(productsInterval);
      };
    }
  }, [inView]);

  const stats = [
    {
      icon: <FaUsers />,
      value: `${happyClients}k+`,
      label: "Happy Clients",
      color: "text-blue-500"
    },
    {
      icon: <FaAward />,
      value: brands,
      label: "Brands",
      color: "text-yellow-500"
    },
    {
      icon: <FaBox />,
      value: `${(products / 1000).toFixed(1)}k+`,
      label: "Products",
      color: "text-green-500"
    },
    {
      icon: <FaClock />,
      value: yearsInBusiness,
      label: "Years in Business",
      color: "text-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
    <div className="paddingTop paddingBottom">
      <motion.div
        ref={ref}
        className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-black p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative mb-4"
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon background */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div
                  className={`relative z-10 w-16 h-16 ${stat.color} bg-white/10 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20`}
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(255,255,255,0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {stat.icon}
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.value}
                </motion.h1>
                
                <motion.p 
                  className="text-white/80 font-medium text-lg"
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>

              {/* Animated underline */}
              <motion.div
                className="w-0 h-1 bg-gradient-to-r from-white/50 to-white/20 mt-3 group-hover:w-full transition-all duration-500"
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
