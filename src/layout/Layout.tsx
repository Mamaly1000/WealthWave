import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "../components/sidebar/SideBar";
import { useState } from "react";

const Layout = ({ children }: any) => {
  const [displaySideBar, setDisplaySideBar] = useState<boolean>(false);
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000428, #004e92)",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <NavBar showSideBar={displaySideBar} setShowSideBar={setDisplaySideBar} />
      {displaySideBar && <SideBar setShowSideBar={setDisplaySideBar} />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
