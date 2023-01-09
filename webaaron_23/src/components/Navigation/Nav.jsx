import React from "react";
import Ajlogo from "../../images/logo/AJS-logo.png";

import "../../styles/nav.css";
const Nav = () => {
  return (
    <div>
      <div>
        <ul className="ul-container">
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a>CV</a>
          </li>
          <li> </li>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
        <img className="ajlogo" src={Ajlogo} />
      </div>
    </div>
  );
};

export default Nav;
