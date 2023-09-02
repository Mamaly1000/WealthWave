import { useDispatch, useSelector } from "react-redux";
import { dashboardLinks } from "../../Data/dashboardLinks";
import { selectProfile } from "../../features/profile_slice/profile_slice";
import {
  selectDashboard,
  setDashboardSection,
  setDisplayDashboard,
  setShrinkDashboard,
} from "../../features/dashboard_slice/dashboard_slice";
import { AnimatePresence, motion } from "framer-motion";
import Dashboard_Divider from "../divider-component/Dashboard_Divider";
import Divider from "../ntf-components/Divider";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useMemo } from "react";
import ToolTipBtn from "./ToolTipBtn";
import { arrowIcon } from "../../assets/dashboard/icons/icons";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const DashBoardSideBar = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(selectDashboard);
  const profile = useSelector(selectProfile);
  const themeSelector = useSelector(selecttheme);
  useMemo(() => {
    const sizeChecker = () => {
      if (window.innerWidth < 600) {
        dispatch(setDisplayDashboard(false));
      } else {
        dispatch(setDisplayDashboard(true));
      }
    };
    window.addEventListener("resize", sizeChecker);
    return () => {
      window.removeEventListener("resize", sizeChecker);
    };
  }, [window.innerWidth]);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="dashboard-sidebar"
      animate={{ maxWidth: dashboard.shrinkDasboard ? 75 : 250, opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1, type: "tween" }}
        className="profile-section"
      >
        <motion.img
          src={profile.profile_pic}
          animate={{
            width: dashboard.shrinkDasboard ? 50 : 100,
            border: `1px solid ${themeSelector.btnColor}`,
          }}
          onClick={() => dispatch(setShrinkDashboard(false))}
        />
        {!dashboard.shrinkDasboard && (
          <motion.span className="profile-name">{profile.name}</motion.span>
        )}
        {!dashboard.shrinkDasboard && (
          <motion.span className="profile-email">{profile.email}</motion.span>
        )}
      </motion.div>
      <ToolTipBtn
        classname="dashboard-shrink-btn"
        content=""
        onclick={() => {
          dispatch(setShrinkDashboard(dashboard.shrinkDasboard ? false : true));
        }}
        place="right"
        tooltip_id=""
      >
        <motion.img
          animate={{ rotate: !dashboard.shrinkDasboard ? 180 : 0 }}
          src={arrowIcon}
        />
      </ToolTipBtn>
      {dashboardLinks.map((link_section) => {
        return (
          <div key={link_section.header} className="link-group">
            {!dashboard.shrinkDasboard && (
              <motion.h2
                className="header"
                style={{ color: themeSelector.headerColor }}
              >
                {link_section.header}
                <Divider height={3} width={100} />
              </motion.h2>
            )}
            <motion.div
              animate={{
                paddingInlineStart: dashboard.shrinkDasboard ? 0 : 10,
              }}
              className="links"
            >
              {link_section.links.map((link) => {
                return (
                  <>
                    <motion.div
                      animate={{
                        width: dashboard.shrinkDasboard ? 65 : 160,
                        flexDirection: dashboard.shrinkDasboard
                          ? "row-reverse"
                          : "row",
                        gap: dashboard.shrinkDasboard ? 1 : 2,
                        color: themeSelector.headerColor,
                      }}
                      key={link.name}
                      className="link"
                      data-tooltip-id={`my-tooltip-${link.route.replaceAll(
                        "/",
                        "-"
                      )}`}
                      onClick={() => {
                        dispatch(setDashboardSection(link.route));
                        dispatch(
                          setShrinkDashboard(
                            dashboard.shrinkDasboard ? true : false
                          )
                        );
                      }}
                      whileHover={{ x: dashboard.shrinkDasboard ? 0 : 20 }}
                    >
                      <AnimatePresence>
                        {link.route === dashboard.dashboard_Section && (
                          <Dashboard_Divider width={5} height={20} />
                        )}
                      </AnimatePresence>
                      <motion.img src={link.icon} alt="" />
                      {!dashboard.shrinkDasboard && (
                        <motion.span>{link.name}</motion.span>
                      )}
                    </motion.div>
                    {dashboard.shrinkDasboard && (
                      <ReactTooltip
                        id={`my-tooltip-${link.route.replaceAll("/", "-")}`}
                        place={"bottom-start"}
                        content={link.name}
                        className="tool-tip"
                      />
                    )}
                  </>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default DashBoardSideBar;
