import React from "react";
import dogone from "../assets/images/dogone.jpeg";
import dogtwo from "../assets/images/dogtwo.jpeg";
import dog3 from "../assets/images/dog3.jpg";
import dog4 from "../assets/images/dog4.jpg";

const TwoDogs = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper grid md:grid-cols-2 gap-5">
        <img
          src={dogone}
          alt="dog-image"
          className="w-full h-full object-cover max-h-[23rem] rounded-2xl"
          data-aos="fade-up"
        />
        <img
          src={dogtwo}
          alt="dog-image"
          className="w-full h-full object-cover max-h-[23rem] rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <img
          src={dog3}
          alt="dog-image"
          className="w-full h-full object-cover max-h-[23rem] rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <img
          src={dog4}
          alt="dog-image"
          className="w-full h-full object-cover max-h-[23rem] rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
    </div>
  );
};

export default TwoDogs;
