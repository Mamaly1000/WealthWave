import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "../components/sidebar/SideBar";
import { useState } from "react";
import { motion } from "framer-motion";
import SelectedNewsPost from "../components/selectedNewsPost/selectedNewsPost.tsx";

const Layout = ({ children }: any) => {
  const [displaySideBar, setDisplaySideBar] = useState<boolean>(false);

  return (
    <motion.div
      style={{
        background: "linear-gradient(to right, #000428, #004e92)",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      className="layout-container"
    >
      <NavBar showSideBar={displaySideBar} setShowSideBar={setDisplaySideBar} />
      {displaySideBar && <SideBar setShowSideBar={setDisplaySideBar} />}
      {children}
      <SelectedNewsPost />
      <Footer />
    </motion.div>
  );
};

export default Layout;
