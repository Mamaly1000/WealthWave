import useCrypto from "../../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const RelatedCoins = () => {
  const {
    cryptoSelector: { coinlist },
  } = useCrypto();
  const nav = useNavigate();
  const themeSelector = useSelector(selecttheme);
  const randomnum = Math.floor(Math.random() * coinlist.length);
  return (
    <div
      style={{
        background: themeSelector.containerColor,
        color: themeSelector.headerColor,
      }}
      className="related-coins-container"
    >
      <h4>Related Coins You May Like</h4>
      <div className="related-coins-table">
        <AnimatePresence>
          {coinlist.slice(randomnum - 7, randomnum).map((coin, index) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                  color: themeSelector.plainTextColor,
                  background: themeSelector.hoverColor,
                  borderColor: themeSelector.btnColor,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.1,
                }}
                className="coin-row"
                key={index}
                whileHover={{ background: themeSelector.btnColor }}
                onClick={() => nav(`/crypto/${coin.id}`)}
              >
                <div className="coins-left-section">
                  <img src={coin.image} /> <span>{coin.name}</span>
                </div>
                <div className="coins-right-section">
                  <span>${coin.current_price}</span>
                  <span
                    className={`${
                      +coin.price_change_percentage_24h > 0
                        ? "green-text"
                        : "red-text"
                    }`}
                  >
                    {coin.price_change_percentage_24h}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RelatedCoins;
