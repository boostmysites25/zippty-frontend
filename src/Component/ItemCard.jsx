import React from "react";

const ItemCard = ({ cardDetails }) => {
  const { image, title, actualPrice, mrp } = cardDetails;
  return (
    <div className="border group border-black  rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt=""
        className="max-h-[20rem] w-[320px] object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h1 className=" softTitle max-w-[18rem]  transition-all duration-300">
          {title}
        </h1>
        <p className=" transition-all duration-300">
          ₹{actualPrice} <span className="line-through">MRP ₹{mrp}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
