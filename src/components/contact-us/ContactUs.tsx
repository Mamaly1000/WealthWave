import { useState } from "react";
import bgImage from "./../../assets/about-us/ce44c9d4-dc5c-418c-94c3-4299cb642ac0.png";
import { socialLinks } from "../../utils/about-us-values";

const ContactUs = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="contact-us-section">
      <div className="contact-us-form">
        <h3>Get In Touch</h3>
        <form>
          <input
            type="text"
            value={userName}
            placeholder="userName"
            onChange={(e) => setUserName(e.target.value)}
          />{" "}
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <textarea
            value={message}
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">submit</button>
          <button className="reset-btn" type="reset">
            reset
          </button>
        </form>
        <div className="links-container">
          <span>Contact Me : </span>
          {socialLinks.map((link, index) => {
            return (
              <div
                className="social-link"
                key={index}
                style={{ animationDelay: `${index / 10 + 0.2}s` }}
              >
                <a href={link.link}>
                  <img src={link.icon} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="bg-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
};

export default ContactUs;
