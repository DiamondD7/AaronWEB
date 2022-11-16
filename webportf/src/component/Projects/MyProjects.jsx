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
              videos with dynamic hero that always change when the page is
              refreshed and get data from the api provided by TMBD. This
              application is built using ReactJS.
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

        {/*  */}

        <div className="preview-container-shopclient">
          <div className="content">
            <p>
              This project is a personal e-commerce project consuming its own
              node.js API. This is the client side of the website and there is
              another admin side of the website where admins can perform CRUD
              operations and control the data of the website. This was made
              using the M-E-R-N Stack Additionally, this project is only made
              just for my self and my learning, that is why it is only partial
              complete. Men and Women section are the only ones working and
              populated by the API
            </p>
            <div className="website-anchortags-shopclient">
              <a
                href="https://shopliftnzclient.azurewebsites.net/"
                target="_blank"
              >
                View site
              </a>
              <a
                href="https://github.com/DiamondD7/shoplift_client"
                target="_blank"
              >
                View code
              </a>

              <a href="https://github.com/DiamondD7/backend" target="_blank">
                View backend code
              </a>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="preview-container-shopadmin">
          <div className="content">
            <p>
              This project is the admin part of the e-commerce website where the
              authorized personel can only access and have the power to perform
              CRUD operations and have full control of the data
            </p>
            <div className="website-anchortags-shopadmin">
              <a
                href="https://shopliftnzadmin.azurewebsites.net/"
                target="_blank"
              >
                View site
              </a>
              <a
                href="https://github.com/DiamondD7/shoplift_admin"
                target="_blank"
              >
                View code
              </a>
              <a href="https://github.com/DiamondD7/backend" target="_blank">
                View backend code
              </a>
            </div>
          </div>
        </div>

        <div className="preview-container-weather">
          <div className="content">
            <p>
              I have made this "weather project" powered by ReactJs and
              weatherstack API. It provides real-time weather data any city in
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

        <div className="preview-container-kali">
          <div className="content">
            <p>
              I am making this photography website portfolio for a client. As of
              right now, I am still working on this project; working closely
              with the client and putting my client's needs and wants for the
              design of the website
            </p>
            <div className="website-anchortags-kali">
              <a style={{ color: "limegreen" }}>
                Still working on this project
              </a>
              <a
                href="https://github.com/DiamondD7/kaliphotography"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
