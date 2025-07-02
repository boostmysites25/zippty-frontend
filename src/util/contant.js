import teamImage1 from "../assets/images/team/team-image-1.png";
import teamImage2 from "../assets/images/team/team-image-2.png";
import teamImage3 from "../assets/images/team/team-image-3.png";
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
export const BASE_API_URL = "https://zippybackend.vercel.app";
// export const BASE_API_URL = "http://localhost:7070";
export const petCareFeatures = [
  {
    id: 1,
    title: "Everything You Need for Your Pets",
    description:
      "We provide a vast selection of products for both cats and dogs, ensuring you can find everything you need for their health, comfort, and happiness—all in one place.",
  },
  {
    id: 2,
    title: "Trusted Quality",
    description:
      "We believe your pets deserve only the best. That’s why we offer products from brands you can rely on, all selected for their superior quality and effectiveness.",
  },
  {
    id: 3,
    title: "For Every Stage of Life",
    description:
      "Whether your pet is a playful puppy, a senior dog, a mischievous kitten, or a laid-back adult cat, we have the perfect products to support them at every stage of their life.",
  },
  {
    id: 4,
    title: "Seamless Shopping Experience",
    description:
      "Shopping for your pets has never been easier. Our website is user-friendly, making it simple for you to find what you need and get it delivered straight to your door, fast.",
  },
];

export const ourTeam = [
  {
    id: 1,
    image: teamImage1,
    name: "Caroline Washington",
    position: "Seller",
  },
  {
    id: 2,
    image: teamImage2,
    name: "Gerald Ferguson",
    position: "Seller",
  },
  {
    id: 3,
    image: teamImage3,
    name: "Averi Maddox",
    position: "Seller",
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
