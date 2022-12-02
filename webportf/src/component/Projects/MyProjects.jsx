import React from "react";
import { ArrowLeft } from "phosphor-react";
import ReactIcon from "../../images/icons/reacticon.png";
import TmdbIcon from "../../images/icons/tmdbicon.png";
import NodeIcon from "../../images/icons/nodejsicon.png";
import MongoIcon from "../../images/icons/mongodbicon.png";
import ExpressIcon from "../../images/icons/expressjsicon.png";
import MsSqlIcon from "../../images/icons/sqlicon.png";
import DotNetIcon from "../../images/icons/dotneticon.png";
import CsharpIcon from "../../images/icons/csharpicon.png";
import ApiIcon from "../../images/icons/apiicon.png";

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
            <img className="icons" src={ReactIcon} />
            <img className="icons" src={TmdbIcon} />
            <img className="icons" src={NodeIcon} />
            <p>
              I have cloned the Netflix application that has the ability to play
              videos with dynamic hero that always change when the page is
              refreshed and recieves data from the api provided by TMBD. This
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
            <img className="icons" src={MongoIcon} />
            <img className="icons" src={ExpressIcon} />
            <img className="icons" src={ReactIcon} />
            <img className="icons" src={NodeIcon} />
            <p>
              This project is a personal e-commerce project consuming its own
              node.js API. This is the client side of the website and there is
              another admin side of the website where admins can perform CRUD
              operations and control the data of the website. This was made
              using the M-E-R-N Stack. Additionally, this project is made just
              for myself and my learning, that is why it is only partially
              completed. The 'Men' and 'Women' sections are the only ones
              working and populated by the API.
            </p>

            <br />
            <p>FYI: Wait for the data to load around 2 mins.</p>
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
            <img className="icons" src={MongoIcon} />
            <img className="icons" src={ExpressIcon} />
            <img className="icons" src={ReactIcon} />
            <img className="icons" src={NodeIcon} />
            <p>
              This project is the admin part of the e-commerce website where
              only authorised personel have access, have the power to perform
              CRUD operations and have full control of the data FYI: Wait for
              the data to load around 2 mins.
            </p>
            <br />
            <p>FYI: Wait for the data to load around 2 mins.</p>
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

        <div className="preview-container-todo">
          <div className="content">
            <img className="icons" src={MsSqlIcon} />
            <img className="icons" src={DotNetIcon} />
            <img className="icons" src={ReactIcon} />
            <img className="icons" src={CsharpIcon} />
            <p>
              This project is focused on the CRUD operations, where users can
              add their daily tasks. This is made using .Net Core Web API, MS
              SQL Server, Reactjs and It is hosted in Azure.
            </p>
            <div className="website-anchortags-todo">
              <a href="https://todolistc.azurewebsites.net/" target="_blank">
                View site
              </a>
              <a
                href="https://github.com/DiamondD7/todolist_client"
                target="_blank"
              >
                View code
              </a>
              <a
                href="https://github.com/DiamondD7/todolist_backend"
                target="_blank"
              >
                View backend code
              </a>
            </div>
          </div>
        </div>

        <div className="preview-container-weather">
          <div className="content">
            <img className="icons" src={ReactIcon} />
            <img className="icons" src={ApiIcon} />
            <p>
              I have made this "weather project" powered by ReactJs and
              weatherstack API. It provides real-time weather data of any city
              in the world.
            </p>
            <div className="website-anchortags-weather">
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
              I am making this photography portfolio website for a client. As of
              right now, I am still working on this project; working closely
              with the client and fulfilling my client's needs and wants.
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
