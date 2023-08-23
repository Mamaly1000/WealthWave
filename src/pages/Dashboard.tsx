import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import {
  selectDashboard,
  setDisplayDashboard,
} from "../features/dashboard_slice/dashboard_slice";
import { useDispatch, useSelector } from "react-redux";
import { dashboardIcon } from "../assets/dashboard/dashboardIcons";
import ToolTipBtn from "../components/dashboard/ToolTipBtn";
import Dashboard_Home from "../components/DashboardHome/Dashboard_Home";
const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(selectDashboard);
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="dashboard"
    >
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
      <div className="dashboard-content">
        {dashboard.dashboard_Section === "dashboard/home" && <Dashboard_Home />}
      </div>
    </motion.div>
  );
};

export default Dashboard;
