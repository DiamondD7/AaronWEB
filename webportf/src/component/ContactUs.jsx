import React from "react";
import logo from "../images/AJS-logo.png";

import "../contactusstyle.css";
const ContactUs = () => {
  return (
    <div className="contact-global">
      <a href="/">
        <img className="contact-logo" src={logo} />
      </a>
      <h1 className="contactme-header">Contact me</h1>
      <form className="form">
        <label className="form-label req" htmlFor="name">
          Name
        </label>
        <br />
        <input className="input-form" id="name" type="text" />
        <br />
        <label className="form-label req" htmlFor="email">
          Email
        </label>
        <br />
        <input className="input-form" id="email" type="text" />
        <br />
        <label className="form-label" htmlFor="phone">
          Phone
        </label>
        <br />
        <input className="input-form" id="phone" type="text" />
        <br />
        <label className="form-label req" htmlFor="msg">
          Message
        </label>
        <br />
        <textarea className="textarea-form req" id="msg"></textarea>
        <br />

        <button className="btn-send">Send</button>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus
          omnis repellat in placeat, saepe magnam soluta aliquid illum nam
          architecto ipsa nihil animi impedit, nisi voluptatem quas mollitia
          quos.
        </p>
      </form>
    </div>
  );
};

export default ContactUs;
