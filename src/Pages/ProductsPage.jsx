import React from "react";
import Banner from "../Component /Banner";
import AllProducts from "../Component /AllProducts";
import CategorySlider from "../Component /CategorySlider";
import shoppetsimage from "../assets/images/shoppetsimage.png";
import TwoDogs from "../Component /TwoDogs";

const ProductsPage = () => {
  const aboutBannerDetails = {
    mainHeading: "The friendly and caring small pet store",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: shoppetsimage,
  };
  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      {/* <CategorySlider /> */}
      <AllProducts />
      <TwoDogs />
    </div>
  );
};

export default ProductsPage;
