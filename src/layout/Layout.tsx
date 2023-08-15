import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "../components/sidebar/SideBar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SelectedNewsPost from "../components/selectedNewsPost/selectedNewsPost.tsx";
import { useContextFunction } from "../context/AppContext.tsx";
import EditTagModal from "../components/edit-tags-modal/EditTagModal.tsx";

const Layout = ({ children }: any) => {
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
      <SelectedNewsPost />
      <Footer />
      <EditTagModal
        show={contextData!.showTagModal}
        setShow={contextData!.setShowTagsModal}
        tags={contextData!.tags}
      />
    </motion.div>
  );
};

export default Layout;
