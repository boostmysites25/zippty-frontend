import React from "react";
import homeaboutsection from "../assets/images/homeaboutsection.png";
import homepagecompanylogos from "../assets/images/homepagecompanylogos.png";
import { Link } from "react-router-dom";
const HomeAbout = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper">
        <div className="grid md:grid-cols-2">
          <img src={homeaboutsection} alt="" />
          <div className="h-full flex flex-col gap-5 relative z-10">
            <span className="companyName">Zippty</span>
            <h1 className="title-heading">
              The smarter way to shop for your pet
            </h1>
            <p className="text-gray-600 max-w-md">
              At Zippy, we believe playtime isn't just fun; it's essential for
              your pet's physical and mental well-being. That's why we've
              combined cutting-edge technology with irresistible fun to create a
              range of interactive toys and robots designed to engage, excite,
              and enrich your furry friend's life.
            </p>
            <Link
              to={"/about-us"}
              className="bg-black w-fit text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <img src={homepagecompanylogos} alt="" />
      </div>
    </div>
  );
};

export default HomeAbout;
