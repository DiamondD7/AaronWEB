import React from "react";
import { useState } from "react";
import Introduction from "./Introduction";
import { X } from "phosphor-react";
import { CaretRight, CaretLeft } from "phosphor-react";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const bod = document.getElementById("body--");
  if (openMenu === true) {
    bod.style.overflow = "hidden";
  } else {
    bod.style.overflow = "scroll";
  }

  return (
    <div>
      <div>
        <div className="container--div">
          {openMenu ? (
            <div className="div--nav">
              <div className="overlay"></div>
              <button
                className="closeBtn-Menu"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <X size={40} color={"#edebe5"} />
              </button>
              <nav>
                <ul className="menu-items">
                  <li>
                    <button>Contact</button>
                  </li>
                  <li>
                    <button>Additional</button>
                  </li>
                  <li>
                    <button>Blog</button>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <button className="btn-menu" onClick={() => setOpenMenu(!openMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="menu-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          )}
          <Introduction />
        </div>
      </div>
      <div>
        <div className="aboutme container--divs">
          <div className="lr-container">
            <div className="lefty">
              <button className="btn-divider">
                <a className="anchor-empty" href="/About">
                  About me <CaretRight size={39} />
                </a>
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
    </div>
  );
};

export default Home;
