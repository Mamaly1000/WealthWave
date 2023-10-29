import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { selectDashboard } from "../features/dashboard_slice/dashboard_slice";
import { useSelector } from "react-redux";
import Dashboard_Home from "../components/DashboardHome/Dashboard_Home";
import DashboardThemeSection from "../components/dashboardTheme-Section/dashboardThemeSection";
import DashboardProfileSection from "../components/dashboard-profile-section/DashboardProfileSection";
import Dashboard_crypto_home from "../components/dashboard-crypto-section/Dashboard_crypto_home";
import Crypto_budget_section from "../components/dashboard-crypto-section/budget/Crypto_budget_section";
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
        {dashboard.dashboard_Section === "dashboard/table/crypto" && (
          <Dashboard_crypto_home />
        )}{" "}
        {dashboard.dashboard_Section === "dashboard/wallet" && (
          <Crypto_budget_section />
        )}
      </div>
    </motion.div>
  );
};

export default Dashboard;
