"use client";

import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { categories } from "../util/contant";

export default function CategorySlider() {
  const [startIndex, setStartIndex] = useState(0);

  const showPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 4));
  };

  const showNext = () => {
    setStartIndex((prev) => Math.min(categories.length - 4, prev + 4));
  };

  return (
    <div className="wrapper paddingTop paddingBottom">
      <div className="flex items-center justify-between mb-6">
        <h2 className="title-heading">Browse by category</h2>
        <div className="flex gap-2">
          <button
            variant="outline"
            size="icon"
            onClick={showPrevious}
            disabled={startIndex === 0}
            className="rounded-full bg-black p-3 text-white"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            variant="outline"
            size="icon"
            onClick={showNext}
            disabled={startIndex >= categories.length - 4}
            className="rounded-full bg-black text-white p-3"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.slice(startIndex, startIndex + 4).map((category) => (
          <div
            key={category.name}
            className="group cursor-pointer overflow-hidden"
          >
            <div className="p-0">
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-[200px] object-cover rounded-t-2xl"
                />
                <div className=" p-4 text-black">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-80">
                        {category.products} products
                      </p>
                    </div>
                    <FaArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
