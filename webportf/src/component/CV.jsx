import React from "react";
import { DownloadSimple, ArrowLeft } from "phosphor-react";

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
          <DownloadSimple size={35} />
        </button>
      </div>
    </div>
  );
};

export default CV;
