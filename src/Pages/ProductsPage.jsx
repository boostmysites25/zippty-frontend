import React from "react";
import Banner from "../Component/Banner";
import AllProducts from "../Component/AllProducts";
import CategorySlider from "../Component/CategorySlider";
import shoppetsimage from "../assets/images/shoppetsimage.png";
import TwoDogs from "../Component/TwoDogs";
import SEO from "../Component/SEO";
import { seoConfig } from "../utils/seoConfig";
import { generateCollectionPageSchema, generateBreadcrumbSchema } from "../utils/structuredData";

const ProductsPage = () => {
  const aboutBannerDetails = {
    mainHeading: "Making pet care simple fun and full of love",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: shoppetsimage,
  };

  // Breadcrumb for shop page
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" }
  ];

  // Structured data for shop page
  const structuredData = [
    generateCollectionPageSchema({
      name: "Pet Products Shop",
      description: "Browse our extensive collection of premium pet products including toys, accessories, food, and clothing",
      url: "/shop",
      itemCount: 100 // You can make this dynamic
    }),
    generateBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <div>
      <SEO
        title={seoConfig.shop.title}
        description={seoConfig.shop.description}
        keywords={seoConfig.shop.keywords}
        url="/shop"
        type={seoConfig.shop.type}
        structuredData={structuredData}
      />
      <Banner bannerDetails={aboutBannerDetails} />
      {/* <CategorySlider /> */}
      <AllProducts />
      <TwoDogs />
    </div>
  );
};

export default ProductsPage;
