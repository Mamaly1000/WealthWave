import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { selectDashboard } from "../features/dashboard_slice/dashboard_slice";
import { useSelector } from "react-redux";
import Dashboard_Home from "../components/DashboardHome/Dashboard_Home";
import DashboardThemeSection from "../components/dashboardTheme-Section/dashboardThemeSection";
import DashboardProfileSection from "../components/dashboard-profile-section/DashboardProfileSection";
const Dashboard = () => {
  const dashboard = useSelector(selectDashboard);
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="dashboard"
    >
      <div className="dashboard-content">
        {dashboard.dashboard_Section === "dashboard/home" && <Dashboard_Home />}
        {dashboard.dashboard_Section === "dashboard/theme" && (
          <DashboardThemeSection />
        )}
        {dashboard.dashboard_Section === "dashboard/profile" && (
          <DashboardProfileSection />
        )}
      </div>
    </motion.div>
  );
};

export default Dashboard;
