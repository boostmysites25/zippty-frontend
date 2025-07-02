import { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../util/contant";
import { useWishlist } from "../Store/wishlistContext";
import { useCart } from "../Store/cartContext";
import logo from "../assets/images/logo/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const { wishlist } = useWishlist();
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 50 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full fixed z-40 transition-transform duration-500
        `}
    >
      {/* ${
     isVisible ? "translate-y-0" : "-translate-y-full"
   } */}
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-white">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhone size={16} />
            <span className="text-sm">+91-XXXXX XXXXX</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={16} />
            <span className="text-sm">info@domain.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt size={16} />
          <span className="text-sm font-bold">
            JP Colony, Shastri Nagar, Jaipur, Rajasthan -302016
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white flex items-center justify-between px-16 py-4 wrapper rounded-full shadow-xl">
        <Link to={"/"} className="text-xl font-bold ml-3">
          <img src={logo} alt="logo" className="w-[4.5rem] sm:w-[6rem]" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-primary hover:font-semibold transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-4 pr-10 py-2 rounded-full bg-gray-100 focus:outline-none"
            />
            <FaSearch className="absolute right-3 text-gray-400" size={20} />
          </div> */}

          <div className="flex items-center gap-4">
            <Link to={"/cartitems"} className="relative mr-3">
              <FaShoppingCart
                size={24}
                className="hover:scale-105 transition-all duration-300"
              />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
            <Link to={"/profile"} className="relative">
              <FaUser
                size={24}
                className="hover:scale-105 transition-all duration-300"
              />
              {/* <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlist.length}
              </span> */}
            </Link>
            <Link
              className="bg-primary text-white py-1 px-2 rounded-xl hover:scale-105 transition-all duration-300"
              to={token ? "" : "/login"}
              onClick={() => {
                if (token) {
                  localStorage.removeItem("token");
                  window.location.reload();
                }
              }}
            >
              {token ? "Logout" : "Login"}
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 bg-white h-screen">
          <button className="mb-6" onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-[#FF7629] ${
                  location.pathname === link.path
                    ? "text-[#FF7629]"
                    : "text-black"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
