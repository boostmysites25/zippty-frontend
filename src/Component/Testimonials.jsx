import React, { useState } from "react";
import user1 from "../assets/images/testimonialsimage1.png";
import backgroundbg from "../assets/images/testimonialbg.png";
// Testimonials data array
const testimonials = [
  {
    id: 1,
    name: "Gerald Ferguson",
    role: "Customer",
    image: user1,
    text: "I can't thank Zippty enough! Bella has sensitive skin, and I had tried countless shampoos that just didn't work. After getting some advice from their team, I found the perfect grooming products for both Bella and Whiskers. The personalized service and fast shipping make it so easy for me to keep my pets' needs met, and I always feel confident in the products I'm buying. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Customer",
    image: user1,
    text: "The quality of service and products exceeded my expectations. The team went above and beyond to ensure my satisfaction. I've been a loyal customer for over a year now and couldn't be happier!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Customer",
    image: user1,
    text: "Outstanding experience from start to finish. The attention to detail and customer service is unmatched. I've recommended this company to all my friends and family!",
  },
  {
    id: 4,
    name: "Emma Williams",
    role: "Customer",
    image: user1,
    text: "What sets them apart is their commitment to excellence. Every interaction has been pleasant and professional. The products are top-notch and the service is exceptional!",
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
    <div className="wrapper paddingTop paddingBottom">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="companyName">What our Customers Say</span>
          <h2 className="title-heading">What people say about us</h2>

          {/* Star Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-6 h-6 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-lg italic text-gray-700">
            {testimonials[currentIndex].text}
          </p>

          {/* Author Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-500">{testimonials[currentIndex].role}</p>
          </div>

          {/* Navigation Buttons */}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-[30rem] flex justify-center">
          <div
            className="relative w-full flex justify-center bg-contain bg-center bg-no-repeat bg-white items-center"
            style={{ backgroundImage: `url(${backgroundbg})` }}
          >
            {/* <div className="absolute inset-0 bg-orange-500 rounded-full transform scale-110" /> */}
            {/* <img
              src={backgroundbg}
              alt="background-image"
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute"
            /> */}
            <img
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={`${testimonials[currentIndex].name}'s testimonial`}
              className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover rounded-full relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full justify-center mt-[5rem] lg:mt-0">
        <button
          onClick={handlePrevious}
          className="p-4 bg-black rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="p-4 bg-black rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
