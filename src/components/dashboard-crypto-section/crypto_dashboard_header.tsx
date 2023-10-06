import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";
import React from "react";

const Crypto_dashboard_header = ({
  cryptoSection,
  setCryptoSection,
}: {
  cryptoSection: string;
  setCryptoSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const theme = useSelector(selecttheme);
  return (
    <div style={{ color: theme.headerColor }} className="dashboard-header">
      <h1>dashboard</h1>
      <div className="bottom-section">
        <p style={{ color: theme.plainTextColor }}>
          view your projects overview details
        </p>
        <div>
          {["home", "portfolio", "wallet", "further investments"].map(
            (text) => {
              return (
                <motion.button
                  animate={{
                    background: cryptoSection === text ? theme.modalColor : "",
                    border: `1px solid ${theme.btnColor}`,
                  }}
                  onClick={() => setCryptoSection(text)}
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
