import {
  FaPaw,
  FaTruck,
  FaExchangeAlt,
  FaGift,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutStore = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-blue-500 to-primary text-white py-20 px-4 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4">
          Be Part of the Zippty Family
        </h1>
        <p className="text-xl mb-8">
          When you shop with Zippty, you're not just a customer—you're part of
          our community.
        </p>
        <Link
          to={"/shop"}
          className="bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Services Section */}
      {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Our Services – Zippty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaTruck className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Fast, Reliable Shipping
            </h3>
            <p className="text-gray-600">
              We process and ship orders quickly—delivery times depend on your location, so you get your pet's products as soon as possible.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaExchangeAlt className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Easy Returns & Exchanges
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority, and we want you to be
              completely happy with your purchase.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaHeadset className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Expert Pet Care Advice
            </h3>
            <p className="text-gray-600">
              We're more than just a pet store—we're a resource for all things
              pet care.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FaGift className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Gift Cards & Special Offers
            </h3>
            <p className="text-gray-600">
              Looking for the perfect gift for a pet lover? Our gift cards make
              it easy.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaHeadset className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Exceptional Customer Service
            </h3>
            <p className="text-gray-600">
              We believe in treating our customers like family.
            </p>
          </div>
        </div>
      </div> */}

      {/* Why Choose Us Section */}
      <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Why Choose Our Services?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-2">Quick & Reliable</h3>
            <p className="text-gray-600">
              Fast, reliable shipping so you can get your pet's supplies right
              when you need them.
            </p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-600">
              We offer the guidance and resources you need to give your pets the
              best care.
            </p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-2">Affordable Quality</h3>
            <p className="text-gray-600">
              Premium products at competitive prices, ensuring your pets get the
              best without breaking the bank.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="bg-gradient-to-r from-primary to-blue-300 text-white py-20 px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4">
          Start Shopping with Zippty Today!
        </h2>
        <p className="text-xl mb-8">
          Explore our wide range of products and enjoy a shopping experience
          that's as convenient and satisfying as it is helpful for you and your
          pet.
        </p>
        <Link
          to={"/shop"}
          className="bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
};

export default AboutStore;
