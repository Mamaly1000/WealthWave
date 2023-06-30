import { Link } from "react-router-dom";
import { useContextFunction } from "../context/AppContext";
import { motion, useScroll, useSpring } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
type navBarPropsType = {
  showSideBar: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
};
const NavBar = ({ setShowSideBar }: navBarPropsType) => {
  const contextData = useContextFunction();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          maxHeight: "1.5px",
          minHeight: "1.5px",
          background: "#0079FF",
          boxShadow: "0 0 5px white",
          transformOrigin: "0%",
          zIndex: 100,
          scaleX,
        }}
      ></motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "tween" }}
        className="navBar-container"
        style={{
          background: contextData!.scrollH
            ? "rgba(30 64 175/0.4)"
            : "rgba(30 64 175/0.2)",
        }}
      >
        <motion.button
          whileHover={{ rotateZ: "360deg" }}
          transition={{ duration: 0.13, type: "tween" }}
          style={{
            scale: contextData!.scrollH ? "1" : "1.2",
            transition: "scale .13s linear",
            display: "flex",
          }}
          className="main-navbar-btn"
          onClick={() => setShowSideBar(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </motion.button>
        <Link
          to="/"
          className="navbar-logo"
          style={{
            scale: contextData!.scrollH ? "1.2" : "0",
            transition: "scale .13s linear",
          }}
        >
          <span>W</span>ealth<span>W</span>ave
        </Link>
        <div>
          <button
            className="main-navbar-btn"
            style={{
              scale: contextData!.scrollH ? "1" : "1.2",
              transition: "scale .13s linear",
              display: "flex",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button
            className="main-navbar-btn"
            style={{
              scale: contextData!.scrollH ? "0" : "1.2",
              transition: "scale .13s linear",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
          <button
            style={{
              width: "fit-content",
              paddingInline: 10,
              scale: contextData!.scrollH ? "0" : "1.2",
              transition: "scale .13s linear",
            }}
            className="main-navbar-btn"
          >
            sign in
          </button>
          <button
            style={{
              width: "fit-content",
              paddingInline: 10,
              color: "rgb(37 99 235)",
              background: "white",
              border: "1px solid rgb(37 99 235)",
              display: "flex",
              scale: contextData!.scrollH ? "0" : "1.2",
              transition: "scale .13s linear",
            }}
            className="main-navbar-btn"
          >
            sign up
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
