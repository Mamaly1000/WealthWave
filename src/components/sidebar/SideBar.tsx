import { Link } from "react-router-dom";
import { SideBar_links } from "../../Data/dummy";
import React, { useState } from "react";
import { useContextFunction } from "../../context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import closeIcon from "./../../assets/blogs/cloaseImg.svg";
import logo from "./../../assets/logo/small-logo.png";
const SideBar = ({
  setShowSideBar,
}: {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [hide, _setHide] = useState<boolean>(false);
  const contextData = useContextFunction();

  return (
    <motion.div
      style={{ zIndex: 400 }}
      className="sideBar-container"
      exit={{ transition: { delay: 0.1 } }}
      transition={{ delay: 0.1 }}
    >
      <motion.div
        className="sideBar-overlay"
        onClick={() => setShowSideBar(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        transition={{ duration: 0.13, type: "tween" }}
      ></motion.div>
      <motion.div
        className="sideBar-content"
        style={{
          transform: hide ? "translateX(-40vw)" : "translateX(0vw)",
          opacity: hide ? 0 : 1,
        }}
        initial={{ x: "-40vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{
          opacity: 0,
          x: "-40vw",
          transition: {
            duration: 0.05,
            type: "tween",
          },
        }}
        transition={{
          duration: 0.1,
          type: "tween",
        }}
      >
        <div className="sideBar-header">
          <div>
            <img src={logo} />
            <span>W</span>ealth<span>W</span>ave
          </div>
          {!contextData!.screenW && (
            <button
              onClick={() => {
                setShowSideBar(false);
              }}
            >
              <img src={closeIcon} />
            </button>
          )}
        </div>
        <div className="sideBar-profile-section">
          <img
            src="https://avatars.githubusercontent.com/u/105161078?v=4"
            alt=""
          />
          <h5>Mamaly100</h5>
          <p>mamadmehdi.aziz.10@gmail.com</p>
        </div>
        <div className="sideBar-hamMenu">
          {SideBar_links.map((link, index) => {
            return (
              <Link
                onClick={() => {
                  setShowSideBar(false);
                }}
                to={link.route}
                key={index}
                className="sideBar-ham-links"
              >
                <img src={link.icon} alt={link.title} />
                {link.title}
                <AnimatePresence>
                  {window.location.pathname === link.route && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        duration: 0.1,
                        type: "tween",
                      }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
        <div className="copyRight-section">
          Copyright © 2023 By{" "}
          <a href="https://github.com/Mamaly1000" target="_blank">
            Mamaly1000
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
