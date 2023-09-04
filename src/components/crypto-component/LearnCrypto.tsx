import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";
import { selectCrypto } from "../../features/crypto_slice/crypto_slice";
import Divider from "../ntf-components/Divider";

const LearnCrypto = () => {
  const theme = useSelector(selecttheme);
  const coins = useSelector(selectCrypto);
  return (
    <div
      style={{ borderColor: theme.btnColor }}
      className="learn-crypto-section"
    >
      <div className="context">
        <div className="q-a-section">
          <h3 style={{ color: theme.headerColor }}>
            New In <span style={{ color: theme.btnColor }}>Cryptocurrency</span>
            ?
          </h3>
          <Divider height={3} width={150} />
          <p style={{ color: theme.plainTextColor }}>
            We'll tell you what cryptocurrencies are, how they work and why you
            should own one right now. So let's do it.
          </p>
        </div>
        <motion.button
          animate={{ background: theme.btnColor }}
          whileHover={{ background: theme.hoverColor }}
          transition={{ duration: 0.1 }}
        >
          Learn & Explore Now
        </motion.button>
      </div>
      {coins.coinlist.length > 0 && (
        <div className="coins">
          <motion.div
            animate={{ x: ["20%", "0%", "20%", "0%"] }}
            transition={{
              x: {
                duration: 200,
                repeat: Infinity,
                ease: "linear",
                type: "tween",
              },
            }}
            className="row"
          >
            {coins.coinlist.slice(0, 50).map((coin) => {
              return (
                <motion.div
                  animate={{
                    borderColor: theme.btnColor,
                    color: theme.plainTextColor,
                  }}
                  key={coin.id}
                  className="single-coin"
                >
                  <img src={coin.image} />
                  {coin.name}
                  <span>({coin.symbol})</span>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            animate={{ x: ["-20%", "0%", "20%", "0%"] }}
            transition={{
              x: {
                duration: 200,
                repeat: Infinity,
                ease: "linear",
                type: "tween",
              },
            }}
            className="row"
          >
            {coins.coinlist.slice(50, 100).map((coin) => {
              return (
                <motion.div
                  animate={{
                    borderColor: theme.btnColor,
                    color: theme.plainTextColor,
                  }}
                  key={coin.id}
                  className="single-coin"
                >
                  <img src={coin.image} />
                  {coin.name}
                  <span>({coin.symbol})</span>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-20%", "20%", "0%"] }}
            transition={{
              x: {
                duration: 200,
                repeat: Infinity,
                ease: "linear",
                type: "tween",
                delay: 5,
              },
            }}
            className="row"
          >
            {coins.coinlist.slice(100, 150).map((coin) => {
              return (
                <motion.div
                  animate={{
                    borderColor: theme.btnColor,
                    color: theme.plainTextColor,
                  }}
                  key={coin.id}
                  className="single-coin"
                >
                  <img src={coin.image} />
                  {coin.name}
                  <span>({coin.symbol})</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LearnCrypto;
