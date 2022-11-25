import React, { useRef } from "react";
import logo from "../images/AJS-logo.png";
import desc from "../images/desc.png";
import emailjs from "@emailjs/browser";
import "../contactusstyle.css";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqtts2v",
        "template_xqm29rw",
        form.current,
        "DwJN5taYq7_gUFIXk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="contact-global">
      <a href="/">
        <img className="contact-logo" src={logo} />
      </a>
      <h1 className="contactme-header">Contact me</h1>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form-body">
          <div>
            <label className="form-label req" htmlFor="name">
              Name
            </label>
            <br />
            <input
              className="input-form"
              id="name"
              type="text"
              name="from_name"
            />
            <br />
            <label className="form-label req" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="input-form"
              id="email"
              type="text"
              name="user_email"
            />
            <br />
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <br />
            <input
              className="input-form"
              id="subject"
              type="text"
              name="subject"
            />
            <br />
            <label className="form-label req" htmlFor="msg">
              Message
            </label>
            <br />
            <textarea
              className="textarea-form req"
              id="msg"
              name="message"
            ></textarea>
            <br />

            <button type="submit" className="btn-send">
              Send
            </button>
          </div>
          <div className="contact-description">
            <img className="desc" src={desc} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
