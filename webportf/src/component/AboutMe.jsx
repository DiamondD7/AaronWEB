import React from "react";
import pic1 from "../images/R.jpg";
import { CaretRight, CaretLeft } from "phosphor-react";
const AboutMe = () => {
  return (
    <div>
      <div className="aboutme container--div">
        <div className="lr-container">
          <div className="lefty">
            <button className="btn-divider">
              About me <CaretRight size={39} />
            </button>
          </div>
          <div className="righty">
            <button className="btn-divider">
              <CaretLeft size={39} /> My Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
