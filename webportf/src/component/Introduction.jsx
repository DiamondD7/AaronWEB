import React from "react";
import { GithubLogo, LinkedinLogo, InstagramLogo } from "phosphor-react";
import logo from "../images/AJS-logo.png";
const Introduction = () => {
  return (
    <div>
      <div className="introduction--container">
        <img className="logo" src={logo} />
      </div>
      <div className="logos">
        <a href="https://github.com/DiamondD7" target="_blank">
          <GithubLogo size={28} color={"#232527"} />
        </a>

        <a
          href="https://www.linkedin.com/in/aaron-sierra-0b2106224/"
          target="_blank"
        >
          <LinkedinLogo size={28} color={"#232527"} />
        </a>

        <a href="https://www.instagram.com/diamondcde/" target="_blank">
          <InstagramLogo size={28} color={"#232527"} />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
