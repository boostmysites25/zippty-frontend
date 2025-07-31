import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundbg from "../assets/images/testimonialbg.png";
// Testimonials data array
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Cat Parent",
    image: require('../assets/images/testi1.webp'),
    text: "The Interactive Cat Toy with 2-speed adjustment has been a game-changer for my energetic Bengal cat, Leo! The 2-speed adjustment feature is perfect - I use the slower speed when he's just waking up and the faster speed for his evening play sessions. The remote control works flawlessly, and Leo absolutely loves chasing the laser dot. It's kept him entertained for hours and helped reduce his destructive behavior. The orange color is vibrant and easy to spot. Highly recommend for any cat parent!",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Pet Owner",
    image: require('../assets/images/testi2.webp'),
    text: "I bought the Automatic Cat Laser Toy for my two indoor cats, and they're obsessed! The 5 different angle patterns keep them guessing, and the fast and slow modes are perfect for different energy levels. My cats, Simba and Luna, chase it around the house for hours. The USB battery power is convenient, and the auto on/off feature saves battery life. The silent mode is great for late-night play sessions. Best investment for my cats' entertainment!",
  },
  {
    id: 3,
    name: "Anjali Desai",
    role: "Cat Enthusiast",
    image: require('../assets/images/testi3.webp'),
    text: "As a veterinarian, I'm always looking for safe and engaging toys for cats. The Interactive Cat Toy exceeded my expectations! The interactive features keep my Persian cat, Snowflake, mentally stimulated and physically active. The remote control range is impressive, and the automatic shut-off prevents overstimulation. It's helped Snowflake lose weight and become more playful. The quality is outstanding, and it's become a daily part of our routine.",
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "Pet Parent",
    image: require('../assets/images/testi4.webp'),
    text: "The laser toy has transformed my lazy cat, Mittens, into an active hunter! The 2-speed patterns are brilliant - she loves the challenge of the fast mode and the precision of the slow mode. The 5 different angles ensure she never gets bored, and the automatic features work perfectly. Mittens now wakes me up every morning ready to play. The USB charging is eco-friendly, and the build quality is excellent. Worth every penny!",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <motion.div 
      className="wrapper paddingTop paddingBottom"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="companyName"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What our Customers Say
          </motion.span>
          
          <motion.h2 
            className="title-heading gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What people say about us
          </motion.h2>

          {/* Star Rating */}
          <motion.div 
            className="flex gap-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, index) => (
              <motion.svg
                key={index}
                className="w-6 h-6 text-yellow-400 fill-current hover-scale cursor-pointer"
                viewBox="0 0 24 24"
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                viewport={{ once: true }}
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </motion.svg>
            ))}
          </motion.div>

          {/* Testimonial Text */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentIndex}
              className="text-lg italic text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              "{testimonials[currentIndex].text}"
            </motion.p>
          </AnimatePresence>

          {/* Author Info */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`author-${currentIndex}`}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2 h-[30rem] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-full flex justify-center bg-contain bg-center bg-no-repeat bg-white items-center"
            style={{ backgroundImage: `url(${backgroundbg})` }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <AnimatePresence mode="wait">
              <motion.img
                key={`image-${currentIndex}`}
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={`${testimonials[currentIndex].name}'s testimonial`}
                className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover rounded-full relative z-10 animate-tilt hover-lift"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="flex gap-4 w-full justify-center mt-[5rem] lg:mt-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={handlePrevious}
          className="p-4 bg-black rounded-full hover:bg-gray-800 transition-all duration-300 shimmer-effect animate-glow"
          aria-label="Previous testimonial"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </motion.svg>
        </motion.button>
        
        <motion.button
          onClick={handleNext}
          className="p-4 bg-black rounded-full hover:bg-gray-800 transition-all duration-300 shimmer-effect animate-glow"
          aria-label="Next testimonial"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Testimonials;
