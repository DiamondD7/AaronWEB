import React from "react";
import AaronCV from "../assets/files/Aaron Sierra CV 2022.pdf";
import "../cvstyle.css";

const CV = () => {
  return (
    <div>
      <a className="close-page" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arr-back-cv"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="216"
            y1="128"
            x2="40"
            y2="128"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <polyline
            points="112 56 40 128 112 200"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></polyline>
        </svg>
      </a>
      <h1 className="cv-header">Download my CV</h1>
      <p className="cv-paragraph">Click the download icon below</p>
      <div className="btn-div">
        <button className="download-btn">
          <a href={AaronCV} download="Aaron Sierra CV 2022" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="downloadSimple"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <polyline
                points="86 110 128 152 170 110"
                fill="none"
                stroke="#232527"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></polyline>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="152"
                fill="none"
                stroke="#232527"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <path
                d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                fill="none"
                stroke="#232527"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default CV;
