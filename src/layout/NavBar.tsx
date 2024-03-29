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
import {
  selectDashboard,
  setDisplayMainDasboard,
  setDisplayProfileCard,
} from "../features/dashboard_slice/dashboard_slice";
import { selectProfile } from "../features/profile_slice/profile_slice";
import { selecttheme } from "../features/theme_slice/theme_slice";

const NavBar = ({ showSideBar }: { showSideBar: boolean }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selecttheme);
  const dashborad = useSelector(selectDashboard);
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
          background: contextData!.localTheme.hoverColor,
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
            ? "rgba(0 0 0/0.4)"
            : "rgba(0 0 0/0.3)",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.13, type: "tween" }}
          className="sidebar-btn"
          onClick={() =>
            dispatch(setDisplayMainDasboard(showSideBar ? false : true))
          }
          animate={{ background: contextData!.localTheme.btnColor }}
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
            style={{ background: contextData!.localTheme.btnColor }}
            className="main-navbar-btn"
          >
            <motion.img src={searchIcon} />
          </button>
          <button
            onClick={() => {
              toast.info("comming soon !");
            }}
            style={{ background: contextData!.localTheme.btnColor }}
            className="main-navbar-btn"
          >
            <motion.img src={settingIcon} />
          </button>
          <button
            className="dashboard-btn"
            onClick={() =>
              dispatch(
                setDisplayProfileCard(
                  dashborad.displayProfileCard ? false : true
                )
              )
            }
          >
            <motion.img
              animate={{ border: `1px solid ${theme.btnColor}` }}
              src={profile_pic}
            />
          </button>
          <Link
            onMouseEnter={() => {
              setHoveredLink("/sign-in");
            }}
            onMouseLeave={() => {
              setHoveredLink("");
            }}
            style={{ color: contextData!.localTheme.plainTextColor }}
            to="/sign-in"
          >
            sign in
            <NavBarDivider
              hover={hovered}
              path="/sign-in"
              height={3}
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
            style={{ color: contextData!.localTheme.plainTextColor }}
            to="/sign-up"
          >
            sign up
            <NavBarDivider
              hover={hovered}
              path="/sign-up"
              height={3}
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
            style={{ color: contextData!.localTheme.plainTextColor }}
          >
            home page
            <NavBarDivider hover={hovered} path="/" height={3} width={100} />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
