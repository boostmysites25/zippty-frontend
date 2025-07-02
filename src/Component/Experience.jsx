import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

  return (
    <div className="paddingTop paddingBottom">
      <div
        ref={ref}
        data-aos-offset={-200}
        data-aos="fade-up"
        className="w-full text-primary grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl bg-gradient-to-r from-secondary to-primary p-[2rem]"
      >
        {/* Happy Clients */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 relative w-fit">
            <h1 className="small-heading">{happyClients}k+</h1>
          </div>
          <p className=" mt-3 text-black">Happy Clients</p>
        </div>

        {/* Brands */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 relative w-fit">
            <h1 className="small-heading">{brands}</h1>
          </div>
          <p className=" mt-3 text-black">Brands</p>
        </div>

        {/* Products */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 relative w-fit">
            <h1 className="small-heading"> {(products / 1000).toFixed(1)}k+</h1>
          </div>
          <p className=" mt-3 text-black">Products</p>
        </div>

        {/* Years in Business */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 relative w-fit">
            <h1 className="small-heading">{yearsInBusiness}</h1>
          </div>
          <p className=" mt-3 text-black">Years in Business</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
