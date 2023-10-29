import { useState } from "react";
import DashboardSection from "../dashboard/DashboardSection";
import Crypto_dashboard_header from "./crypto_dashboard_header";
import Crypto_home_section from "./home/Crypto_home_section";
import Crypto_wallet_section from "./wallet/Crypto_wallet_section"; 
export type crypto_sections_types =
  | "home" 
  | "portfolio"
  | "wallet"
  | "further investments";
const Dashboard_crypto_home = () => {
  const [cryptoSection, setCryptoSection] =
    useState<crypto_sections_types>("home");
  return (
    <DashboardSection classname="crypto-dashboard-section">
      <Crypto_dashboard_header
        cryptoSection={cryptoSection}
        setCryptoSection={setCryptoSection}
      />
      {cryptoSection === "home" && (
        <Crypto_home_section
          
        />
      )}
      {cryptoSection === "wallet" && <Crypto_wallet_section />}
    </DashboardSection>
  );
};

export default Dashboard_crypto_home;
