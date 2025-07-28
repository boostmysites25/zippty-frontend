import React from "react";
import { motion } from "framer-motion";
import backgroundbg from "../assets/images/imagebg.png";
import homebackgroundbg from "../assets/images/homebg.png";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ bannerDetails }) => {
  const { mainHeading, paragraph, image, isHome, isButton } = bannerDetails;
  const { pathname } = useLocation();

  return (
    <div
      className="relative overflow-hidden"
      
    >
      <div className="wrapper grid md:grid-cols-2 px-6 py-16 items-center">
        <div
          className="w-full relative"
        >
          <motion.img
            src={backgroundbg}
            alt="bgimage"
            className="w-[8rem] absolute right-0 -top-10 z-0 animate-float"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <div className="h-full flex flex-col gap-5 relative z-10">
            <motion.span
              className="text-lg text-primary font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Zippty
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight gradient-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {mainHeading}
            </motion.h1>

            <motion.p
              className="text-gray-600 max-w-md text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {paragraph}
            </motion.p>

            {isButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Link
                  to={"/shop"}
                  className="bg-black w-fit text-white px-8 py-3 rounded-md hover:bg-primary transition-all duration-300 shimmer-effect hover-lift inline-block"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Shop Now →
                  </motion.span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <motion.div
          className="w-full flex justify-center items-end mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className={`w-full h-[20rem] md:h-[30rem] bg-no-repeat bg-center bg-contain bg-white flex justify-center ${
              isHome ? `items-end` : `items-end`
            }`}
            style={{
              backgroundImage: `url(${
                isHome ? homebackgroundbg : homebackgroundbg
              })`,
            }}
          >
            <motion.img
              src={image}
              alt="Collection of happy pet faces"
              className={`relative z-10 h-[15rem] ${
                pathname === "/contact-us"
                  ? "h-[12rem] md:h-[22rem]"
                  : "md:h-[25rem]"
              } object-cover`}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <motion.img
        src={backgroundbg}
        alt="bgimage"
        className="w-[8rem] absolute -left-16 bottom-[40%] z-0 animate-float"
       
      />

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </div>
  );
};

export default Banner;
