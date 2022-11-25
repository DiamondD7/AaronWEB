import React from "react";
import { useState } from "react";
import Introduction from "./Introduction";
import { X } from "phosphor-react";
import { CaretRight, CaretLeft, CaretDoubleDown } from "phosphor-react";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="x-btn"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    stroke="#edebe5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    stroke="#edebe5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  ></line>
                </svg>
              </button>
              <nav>
                <ul className="menu-items">
                  <li>
                    <button>
                      <a className="menu-anchor" href="/contactus">
                        Contact
                      </a>
                    </button>
                  </li>
                  <li>
                    <button>
                      <a className="menu-anchor" href="/cvresume">
                        CV/Resume
                      </a>
                    </button>
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
      <div className="double-down-icon">
        <p className="hover-text">Hover</p>
        <CaretDoubleDown className="caret-down" size={30} color={"#232527"} />
      </div>
      <div>
        <div className="aboutme container--divs">
          <div className="lr-container">
            <div className="lefty">
              <button className="btn-divider">
                <a className="anchor-empty about" href="/About">
                  About me{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    className="caretRight"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <polyline
                      points="96 48 176 128 96 208"
                      fill="none"
                      stroke="#232527"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></polyline>
                  </svg>
                </a>
              </button>
            </div>
            <div className="righty">
              <button className="btn-divider">
                <a className="anchor-empty projects" href="/MyProjects">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    className="caretLeft"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <polyline
                      points="160 208 80 128 160 48"
                      fill="none"
                      stroke="#232527"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></polyline>
                  </svg>{" "}
                  My Projects
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
