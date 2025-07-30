import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import whychooseus from "../assets/images/whychooseus.jpeg";
import { petCareFeatures } from "../util/contant";

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-full">
            <div className="relative h-full overflow-hidden rounded-2xl group">
              <img
                src={whychooseus}
                alt="whychooseus"
                className="h-full w-full rounded-2xl object-cover"
              />

              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-primary font-semibold text-sm">
                Premium Quality
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h1
                className="title-heading gradient-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Why Choose Us?
              </motion.h1>

              <motion.p
                className="mt-3 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Interactive Toys for Your Pets We specialize in high-quality
                interactive toys that keep your pets engaged, active, and
                entertained. Our carefully curated selection focuses on
                innovative products that stimulate your pet's natural instincts
                and provide endless hours of fun.
              </motion.p>

              <motion.ul
                className="mt-3 flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {petCareFeatures.map((obj, index) => (
                  <motion.li
                    key={obj.id}
                    className="group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      whileHover={{
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <FaCheckCircle className="text-primary text-xl" />
                      </motion.div>

                      <div>
                        <motion.h3
                          className="font-bold text-lg group-hover:text-primary transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {obj.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-600 mt-1 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          {obj.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
