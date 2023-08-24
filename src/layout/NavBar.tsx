import { Link } from "react-router-dom";
import { useContextFunction } from "../context/AppContext";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import searchIcon from "./../assets/navbar/search.svg";
import hamIcon from "./../assets/navbar/ham.svg";
import settingIcon from "./../assets/navbar/setting.svg";
import { toast } from "react-toastify";
import NavBarDivider from "../components/divider-component/NavBarDivider";
import logo from "./../assets/logo/small-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayMainDasboard } from "../features/dashboard_slice/dashboard_slice";
import { selectProfile } from "../features/profile_slice/profile_slice";

const NavBar = ({ showSideBar }: { showSideBar: boolean }) => {
  const dispatch = useDispatch();
  const contextData = useContextFunction();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [hovered, setHoveredLink] = useState<string>("");
  const { profile_pic } = useSelector(selectProfile);
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
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.13, type: "tween" }}
          className="sidebar-btn"
          onClick={() =>
            dispatch(setDisplayMainDasboard(showSideBar ? false : true))
          }
        >
          <motion.img src={hamIcon} />
        </motion.button>
        <Link to="/" className="navbar-logo">
          <motion.img
            initial={{ rotate: 270, scale: 0 }}
            animate={{
              rotate: contextData!.scrollH ? 0 : 270,
              scale: contextData!.scrollH ? 1 : 0,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            src={logo}
          />
        </Link>
        <div className="nav-links">
          <button
            onClick={() => {
              toast.info("comming soon !");
            }}
            className="main-navbar-btn"
          >
            <motion.img src={searchIcon} />
          </button>
          <button
            onClick={() => {
              toast.info("comming soon !");
            }}
            className="main-navbar-btn"
          >
            <motion.img src={settingIcon} />
          </button>
          <Link className="dashboard-btn" to="/dashboard">
            <motion.img src={profile_pic} />
          </Link>
          <Link
            onMouseEnter={() => {
              setHoveredLink("/sign-in");
            }}
            onMouseLeave={() => {
              setHoveredLink("");
            }}
            to="/sign-in"
          >
            sign in
            <NavBarDivider
              hover={hovered}
              path="/sign-in"
              height={5}
              width={100}
            />
          </Link>
          <Link
            onMouseEnter={() => {
              setHoveredLink("/sign-up");
            }}
            onMouseLeave={() => {
              setHoveredLink("");
            }}
            to="/sign-up"
          >
            sign up
            <NavBarDivider
              hover={hovered}
              path="/sign-up"
              height={5}
              width={100}
            />
          </Link>{" "}
          <Link
            onMouseEnter={() => {
              setHoveredLink("/");
            }}
            onMouseLeave={() => {
              setHoveredLink("");
            }}
            to="/"
          >
            home page
            <NavBarDivider hover={hovered} path="/" height={5} width={100} />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
