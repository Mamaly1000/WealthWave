import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const Crypto_dashboard_header = () => {
  const theme = useSelector(selecttheme);
  return (
    <div style={{ color: theme.headerColor }} className="dashboard-header">
      <h1>dashboard</h1>
      <div className="bottom-section">
        <p style={{ color: theme.plainTextColor }}>
          view your projects overview details
        </p>
        <div>
          {[
            "send and recieve",
            "portfolio",
            "exchanges",
            "further investments",
          ].map((text) => {
            return (
              <motion.button
                animate={{
                  background: theme.modalColor,
                  border: `1px solid ${theme.btnColor}`,
                }}
                key={text}
              >
                {text}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Crypto_dashboard_header;
