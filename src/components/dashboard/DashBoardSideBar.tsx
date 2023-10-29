import { useDispatch, useSelector } from "react-redux";
import { dashboardLinks } from "../../Data/dashboardLinks";
import { selectProfile } from "../../features/profile_slice/profile_slice";
import {
  selectDashboard,
  setDashboardSection,
  setDisplayDashboard,
  setShrinkDashboard,
} from "../../features/dashboard_slice/dashboard_slice";
import { motion } from "framer-motion";
import Divider from "../ntf-components/Divider";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useMemo } from "react";
import ToolTipBtn from "./ToolTipBtn";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { IoIosArrowForward } from "react-icons/io";

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
      animate={{ maxWidth: dashboard.shrinkDasboard ? 55 : 250, opacity: 1 }}
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
            width: dashboard.shrinkDasboard ? 30 : 100,
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
        <motion.div
          animate={{ rotate: !dashboard.shrinkDasboard ? 180 : 0 }}
          transition={{ delay: 0.1, type: "tween" }}
        >
          <IoIosArrowForward />
        </motion.div>
      </ToolTipBtn>
      {dashboardLinks.map((link_section) => {
        return (
          <div className="link-group" key={link_section.header + ""}>
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
                        minWidth: 65,
                        width: dashboard.shrinkDasboard ? 65 : 160,
                        color: themeSelector.headerColor,
                        borderInlineStart:
                          dashboard.dashboard_Section === link.route
                            ? `3px solid ${themeSelector.btnColor}`
                            : `1px solid ${themeSelector.headerColor}`,
                      }}
                      key={link.route}
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
