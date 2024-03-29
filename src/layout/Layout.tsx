import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "../components/sidebar/SideBar";
import { AnimatePresence, motion } from "framer-motion";
import { useContextFunction } from "../context/AppContext.tsx";
import EditTagModal from "../components/edit-tags-modal/EditTagModal.tsx";
import { useLocation } from "react-router-dom";
import DashBoardSideBar from "../components/dashboard/DashBoardSideBar.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDashboard,
  setDisplayDashboard,
} from "../features/dashboard_slice/dashboard_slice.ts";
import ToolTipBtn from "../components/dashboard/ToolTipBtn.tsx";
import { dashboardIcon } from "../assets/dashboard/dashboardIcons.ts";
import ProfileCard from "../components/header-component/ProfileCard.tsx";
import FilterModal from "../components/search-components/FilterModal.tsx";
import Create_wallet_modal from "../components/dashboard-crypto-section/wallet/Create_wallet_modal.tsx";

const Layout = ({ children }: any) => {
  const dasboard = useSelector(selectDashboard);
  const location = useLocation();
  const dashboard = useSelector(selectDashboard);
  const contextData = useContextFunction();
  const dispatch = useDispatch();
  return (
    <motion.div
      style={{
        background: contextData!.localTheme.bgColor,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      className="layout-container"
    >
      <NavBar showSideBar={dasboard.displayMainDashboard} />
      <AnimatePresence>
        {dasboard.displayMainDashboard && <SideBar />}
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
      {location.pathname === "/dashboard" && (
        <ToolTipBtn
          content="display dashboard"
          place="left"
          tooltip_id="display-dashboard"
          onclick={() => {
            dispatch(
              setDisplayDashboard(dashboard.Displaydashboard ? false : true)
            );
          }}
          classname="display-dashboard-btn"
        >
          <motion.img src={dashboardIcon} />
        </ToolTipBtn>
      )}
      <AnimatePresence>
        {dasboard.displayProfileCard && <ProfileCard />}
      </AnimatePresence>
      <FilterModal />
      <Create_wallet_modal />
    </motion.div>
  );
};

export default Layout;
