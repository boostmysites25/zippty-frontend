import React, { useEffect, useState } from "react";
import Banner from "../Component/Banner";
import homepagepetsimage from "../assets/images/homepagepetsimage.png";
import HomeAbout from "../Component/HomeAbout";
import Testimonials from "../Component/Testimonials";
import Blogs from "../Component/Blogs";
import ProductGrid from "../Component/ProductGrid";
import SEO from "../Component/SEO";
// import { products } from "../util/productsDetails";
import { fetchProducts } from "../api/productapi";
import { seoConfig } from "../utils/seoConfig";
import { generateOrganizationSchema, generateWebsiteSchema } from "../utils/structuredData";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const homeBannerDetails = {
    mainHeading: "The best for your best friend.",
    paragraph: `At Zippty, we know your pets are more than just animals—they're family. Whether you have a curious kitten or an energetic dog,`,
    image: homepagepetsimage,
    isHome: true,
    isButton: true,
  };
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchProducts();
      console.log(res, "askjdfhkjasdhfjkashdfjlashjldfh");
      setProducts(res.products);
    };
    getProducts();
  }, []);


  // Structured data for homepage
  const structuredData = [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ];

  return (
    <div>
      <SEO
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        url="/"
        type={seoConfig.home.type}
        structuredData={structuredData}
      />
      <SEO
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        url="/"
        type={seoConfig.home.type}
        structuredData={structuredData}
      />
      <Banner bannerDetails={homeBannerDetails} />
      {/* <CategorySlider /> */}
      {/* <FeaturedProducts /> */}
      <HomeAbout />
      <div>
        <h1 className="title-heading text-center" data-aos="fade-up">Best selling products</h1>
        <ProductGrid products={products.slice(0, 8)} />
      </div>
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default HomePage;
