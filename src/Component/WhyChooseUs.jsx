import React from "react";
import whychooseus from "../assets/images/whychooseus.jpeg";
import { petCareFeatures } from "../util/contant";
const WhyChooseUs = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-full">
            <img
              src={whychooseus}
              alt="whychooseus"
              className="h-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <div>
              <h1 className="title-heading">Why Choose Us?</h1>
              <p className="mt-3">
                Everything You Need for Your Pets We provide a vast selection of
                products for both cats and dogs, ensuring you can find
                everything you need for their health, comfort, and happiness—all
                in one place.
              </p>
              <ul className="mt-3 flex flex-col gap-3">
                {petCareFeatures.map((obj) => (
                  <li key={obj.id}>
                    <h3 className="list-disc font-bold">{obj.title}</h3>
                    <p>{obj.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
