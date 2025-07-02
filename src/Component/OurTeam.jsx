import React from "react";
import { ourTeam } from "../util/contant";

const OurTeam = () => {
  return (
    <div className="paddingTop paddingBottom">
      <div className="wrapper">
        <div>
          <h1 className="title-heading text-center">Our Team</h1>
          <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-5 mt-8">
            {ourTeam.map((obj) => (
              <div>
                <img src={obj.image} alt="team-image" className="rounded-2xl" />
                <h3 className="small-heading text-center mt-3">{obj.name}</h3>
                <p className="text-center mt-3">{obj.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
