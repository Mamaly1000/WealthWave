import React, { useState } from "react";
import bgImage from "./../../assets/about-us/ce44c9d4-dc5c-418c-94c3-4299cb642ac0.png";

const ContactUs = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div
      className="contact-us-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h3>Contact Us</h3>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

export default ContactUs;
