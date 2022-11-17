import React from "react";
import { DownloadSimple, ArrowLeft } from "phosphor-react";
import AaronCV from "../assets/files/Aaron Sierra CV 2022.pdf";
import "../cvstyle.css";

const CV = () => {
  return (
    <div>
      <a className="close-page" href="/">
        <ArrowLeft size={40} />
      </a>
      <h1 className="cv-header">Download my CV</h1>
      <p className="cv-paragraph">Click the download icon below</p>
      <div className="btn-div">
        <button className="download-btn">
          <a href={AaronCV} download="Aaron Sierra CV 2022" target="_blank">
            <DownloadSimple size={35} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default CV;
