import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "../components/sidebar/SideBar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContextFunction } from "../context/AppContext.tsx";
import EditTagModal from "../components/edit-tags-modal/EditTagModal.tsx";
import { useLocation } from "react-router-dom";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar.tsx";
import { useSelector } from "react-redux";
import { selectDashboard } from "../features/dashboard_slice/dashboard_slice.ts";

const Layout = ({ children }: any) => {
  const location = useLocation();
  const dashboard = useSelector(selectDashboard);
  const [displaySideBar, setDisplaySideBar] = useState<boolean>(false);
  const contextData = useContextFunction();
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
      <AnimatePresence>
        {displaySideBar && <SideBar setShowSideBar={setDisplaySideBar} />}
      </AnimatePresence>
      {children}
      {location.pathname !== "/dashboard" && <Footer />}
      <EditTagModal
        show={contextData!.showTagModal}
        setShow={contextData!.setShowTagsModal}
        tags={contextData!.tags}
      />
      <AnimatePresence>
        {location.pathname === "/dashboard" && dashboard.Displaydashboard && (
          <DashBoardSideBar />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Layout;
