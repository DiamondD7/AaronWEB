import React, { useEffect } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  Envelope,
  EnvelopeOpen,
} from "phosphor-react";
import logo from "../images/AJS-logo.png";

const Introduction = () => {
  useEffect(() => {
    const mailClose = document.getElementById("mailclose");
    const mailOpen = document.getElementById("mailopen");
    const emailModal = document.getElementById("emailmodal");

    mailClose.addEventListener("mouseenter", function () {
      mailOpen.style.display = "block";
      mailClose.style.display = "none";
      emailModal.style.display = "block";
    });

    mailOpen.addEventListener("mouseleave", function () {
      mailOpen.style.display = "none";
      mailClose.style.display = "block";
      emailModal.style.display = "none";
    });
  });
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

        <a className="mail-close" id="mailclose">
          <Envelope size={28} color={"#232527"} />
        </a>

        <a
          style={{ display: "none" }}
          className="mail-open"
          id="mailopen"
          href="/contactus"
          target="_blank"
        >
          <EnvelopeOpen size={28} color={"#232527"} />
        </a>

        <div id="emailmodal" className="email-modal">
          <p>aaronjuliansierra@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
