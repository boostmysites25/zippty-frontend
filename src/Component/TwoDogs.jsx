import React from "react";
import dogone from "../assets/images/dogone.jpeg";
import dogtwo from "../assets/images/dogtwo.jpeg";

const TwoDogs = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper grid md:grid-cols-2 gap-5">
        <img
          src={dogone}
          alt="dog-image"
          className="w-full h-full object-cover max-h-[23rem] rounded-2xl"
        />
        <img
          src={dogtwo}
          alt="dog-image"
          className="w-full h-full object-cover max-h-[23rem] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default TwoDogs;
