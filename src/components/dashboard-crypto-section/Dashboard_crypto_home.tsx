import DashboardSection from "../dashboard/DashboardSection";
import Dashboard_wallet_preview from "./Dashboard_wallet_preview";
import Crypto_dashboard_header from "./crypto_dashboard_header";

const Dashboard_crypto_home = () => {
  return (
    <DashboardSection classname="crypto-dashboard-section">
      <Crypto_dashboard_header />
      <Dashboard_wallet_preview />
    </DashboardSection>
  );
};

export default Dashboard_crypto_home;
