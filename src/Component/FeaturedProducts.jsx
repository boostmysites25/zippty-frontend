import React from "react";
import product_catlaiser from "../assets/images/productsimages/product_catlaiser.jpeg";
import product_smartcar from "../assets/images/productsimages/product_smartcar.jpeg";
import ItemCard from "./ItemCard";
const FeaturedProducts = () => {
  const productDetails = [
    {
      image: product_catlaiser,
      title: `Cat Laser Toy, Automatic 
Rotating Laser Pointer for Cats`,
      actualPrice: 5998,
      mrp: 12199,
    },
    {
      image: product_smartcar,
      title: `E&E Bestlife Smart Car Remote 
Control`,
      actualPrice: 1998,
      mrp: 12199,
    },
  ];
  return (
    <div>
      <div className="wrapper paddingTop paddingBottom">
        <h1 className="title-heading text-center mb-6">FeaturedProducts</h1>
        <div className="flex justify-center gap-5 flex-wrap">
          {productDetails.map((obj) => (
            <ItemCard cardDetails={obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
