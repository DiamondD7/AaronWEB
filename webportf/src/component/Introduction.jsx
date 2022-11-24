import React from "react";
import { GithubLogo, LinkedinLogo, InstagramLogo } from "phosphor-react";
import logo from "../images/AJS-logo.png";
const Introduction = () => {
  return (
    <div>
      <div className="introduction--container">
        {/* <div className="intro-header headers">Aaron Julian Sierra</div>
        <div className="titles">
          <p>Software Developer</p>
        </div> */}
        <img className="logo" src={logo} />
      </div>
      <div className="logos">
        <a href="https://github.com/DiamondD7" target="_blank">
          <GithubLogo size={35} color={"#232527"} />
        </a>

        <a
          href="https://www.linkedin.com/in/aaron-sierra-0b2106224/"
          target="_blank"
        >
          <LinkedinLogo size={35} color={"#232527"} />
        </a>

        <a href="https://www.instagram.com/diamondcde/" target="_blank">
          <InstagramLogo size={35} color={"#232527"} />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
