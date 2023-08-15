import useCrypto from "../../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const RelatedCoins = () => {
  const {
    cryptoSelector: { coinlist },
  } = useCrypto();
  const nav = useNavigate();
  const randomnum = Math.floor(Math.random() * coinlist.length);
  return (
    <div className="related-coins-container">
      <h4>Related Coins You May Like</h4>
      <div className="related-coins-table">
        <AnimatePresence>
          {coinlist.slice(randomnum - 7, randomnum).map((coin, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index / 10 + 0.1,
                  type: "tween",
                }}
                className="coin-row"
                key={index}
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
