import { Link } from "react-router-dom";
import { SideBar_links } from "../../Data/dummy";
import { useState } from "react";
import { useContextFunction } from "../../context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import closeIcon from "./../../assets/blogs/cloaseImg.svg";
import logo from "./../../assets/logo/small-logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDashboard,
  setDisplayMainDasboard,
} from "../../features/dashboard_slice/dashboard_slice";
import { selectProfile } from "../../features/profile_slice/profile_slice";
const SideBar = () => {
  const [hide, _setHide] = useState<boolean>(false);
  const contextData = useContextFunction();
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const { displayMainDashboard } = useSelector(selectDashboard);
  return (
    <motion.div
      animate={{ zIndex: displayMainDashboard ? 200 : -200 }}
      className="sideBar-container"
      exit={{ transition: { delay: 0.1 } }}
      transition={{ delay: 0.1 }}
    >
      <motion.div
        className="sideBar-overlay"
        onClick={() => dispatch(setDisplayMainDasboard(false))}
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
                dispatch(setDisplayMainDasboard(false));
              }}
            >
              <img src={closeIcon} />
            </button>
          )}
        </div>
        <div className="sideBar-profile-section">
          <img src={profile.profile_pic} alt="profile pic" />
          <h5>{profile.name}</h5>
          <p>{profile.email}</p>
        </div>
        <div className="sideBar-hamMenu">
          {SideBar_links.map((link, index) => {
            return (
              <Link
                onClick={() => {
                  dispatch(setDisplayMainDasboard(false));
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
