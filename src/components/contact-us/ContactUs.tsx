import { useState } from "react";
import bgImage from "./../../assets/contact-main-page.png";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const ContactUs = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="contact-us-section"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          when: "beforeChildren",
        }}
        className="contact-us-form"
      >
        <h3>Get In Touch</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          <motion.button
            animate={{ background: themeSelector.btnColor }}
            whileHover={{ background: themeSelector.hoverColor }}
            transition={{ duration: 0.1 }}
            type="submit"
          >
            submit
          </motion.button>
          <motion.button
            animate={{ background: themeSelector.hoverColor }}
            className="reset-btn"
            type="reset"
          >
            reset
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50, backgroundImage: `url(${bgImage})` }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: "spring",
          when: "beforeChildren",
        }}
        className="bg-container"
        drag
        dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
        dragSnapToOrigin
      ></motion.div>
    </motion.div>
  );
};

export default ContactUs;
