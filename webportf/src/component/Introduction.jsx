import React from "react";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
const Introduction = () => {
  return (
    <div>
      <div className="introduction--container">
        <div className="intro-header headers">Aaron Julian Sierra</div>
        <div className="titles">
          <p>Software Developer</p>
        </div>
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
      </div>
    </div>
  );
};

export default Introduction;
