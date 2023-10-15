import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";
import React from "react";
import { crypto_sections_types } from "./Dashboard_crypto_home";

const Crypto_dashboard_header = ({
  cryptoSection,
  setCryptoSection,
}: {
  cryptoSection: crypto_sections_types;
  setCryptoSection: React.Dispatch<React.SetStateAction<crypto_sections_types>>;
}) => {
  const theme = useSelector(selecttheme);
  return (
    <div style={{ color: theme.headerColor }} className="dashboard-header">
      <h1>{cryptoSection === "home" ? "dashboard" : cryptoSection}</h1>
      <div className="bottom-section">
        <p style={{ color: theme.plainTextColor }}>
          view your projects overview details
        </p>
        <div>
          {["home", "budget", "portfolio", "wallet", "further investments"].map(
            (text) => {
              return (
                <motion.button
                  animate={{
                    background: cryptoSection === text ? theme.modalColor : "",
                    border: `1px solid ${theme.btnColor}`,
                  }}
                  onClick={() =>
                    setCryptoSection(text as crypto_sections_types)
                  }
                  key={text}
                >
                  {text}
                </motion.button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Crypto_dashboard_header;
