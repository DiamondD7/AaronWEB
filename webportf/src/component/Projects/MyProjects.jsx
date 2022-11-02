import React from "react";
import { ArrowLeft } from "phosphor-react";
import Capture from "../../images/Capture.PNG";

const MyProjects = () => {
  return (
    <div>
      <button className="backAbtBtn btn-empty marginT-1 marginL-2">
        <a href="/">
          <ArrowLeft size={32} />
        </a>
      </button>

      <h1 className="project-header">Project Highlights</h1>

      <div className="project-container">
        <div className="preview-container-nf">
          <div className="content">
            <p>
              I have cloned the Netflix application that has the ability to play
              videos with dynamic hero data that always change when the page is
              refreshed and get data from the api provided by the TMBD team.
              This application is built using ReactJS.
            </p>
            <div className="website-anchortags-nf">
              <a href="https://nfcloneweb.azurewebsites.net/" target="_blank">
                View site
              </a>
              <a
                href="https://github.com/DiamondD7/Netflix-clone"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        <div className="preview-container">
          <div className="content">
            <p>
              I have made this "weather project" powered by ReactJs and
              weatherstack API. It provides real-time weather data anywhere in
              the world.
            </p>
            <div className="website-anchortags">
              <a
                href="https://weather-weather.azurewebsites.net/"
                target="_blank"
              >
                View site
              </a>
              <a
                href="https://github.com/DiamondD7/weather-weather"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="preview-container">
          <div className="content">
            <p>
              I have made this "weather project" powered by ReactJs and
              weatherstack API. It provides real-time weather data anywhere in
              the world.
            </p>
            <div className="website-anchortags">
              <a
                href="https://weather-weather.azurewebsites.net/"
                target="_blank"
              >
                View site
              </a>
              <a
                href="https://github.com/DiamondD7/weather-weather"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MyProjects;
