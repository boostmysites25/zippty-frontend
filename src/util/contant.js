//categories images
import accessories from "../assets/images/categories/accessories.jpeg";
import toys from "../assets/images/categories/toys.jpeg";
import food from "../assets/images/categories/food.jpeg";
import cloths from "../assets/images/categories/cloths.jpeg";
export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about-us", label: "About Us" },
  { path: "/contact-us", label: "Contact Us" },
];
export const BASE_API_URL = "https://zippty-backend.vercel.app";
// export const BASE_API_URL = "http://localhost:7070";
export const petCareFeatures = [
  // {
  //   id: 1,
  //   title: "Interactive Toys",
  //   description:
  //     "We specialize in high-quality interactive toys that keep your pets engaged, active, and entertained. Our carefully curated selection focuses on innovative products that stimulate your pet's natural instincts.",
  // },
  {
    id: 2,
    title: "Trusted Quality",
    description:
      "We believe your pets deserve only the best entertainment. That's why we offer interactive toys from brands you can rely on, all selected for their superior quality, durability, and effectiveness in keeping pets engaged.",
  },
  {
    id: 3,
    title: "For Every Energy Level",
    description:
      "Whether your pet is highly energetic and playful or prefers more gentle stimulation, we have the perfect interactive toys to match their energy levels and provide appropriate mental and physical exercise.",
  },
  {
    id: 4,
    title: "Seamless Shopping Experience",
    description:
      "Finding the perfect interactive toy for your pet has never been easier. Our website is user-friendly, making it simple for you to discover engaging products and get them delivered straight to your door, fast.",
  },
];

export const categories = [
  {
    name: "Accessories",
    products: 84,
    image: accessories,
  },
  {
    name: "Toys",
    products: 64,
    image: toys,
  },
  {
    name: "Food",
    products: 22,
    image: food,
  },
  {
    name: "Cloths",
    products: 16,
    image: cloths,
  },
];
