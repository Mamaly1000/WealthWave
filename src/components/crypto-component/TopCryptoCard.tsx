import { useSelector } from "react-redux";
import { IcryptoData } from "../../hooks/useCrypto";
import { nftCardsMotion } from "../../motions/motions";
import { motion } from "framer-motion";
import { selecttheme } from "../../features/theme_slice/theme_slice";

type topCryptoCardPropType = {
  index: number;
  coin: IcryptoData;
};

const TopCryptoCard = ({ index, coin }: topCryptoCardPropType) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      variants={nftCardsMotion(index)}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      className="top-crypto-component"
      style={{ border: "1px solid transparent", background: "rgba(0 0 0/.2)" }}
      whileHover={{
        background: themeSelector.modalColor,
        border: `1px solid ${themeSelector.btnColor}`,
        transition: {
          duration: 0.1,
          type: "tween",
          delay: 0,
        },
      }}
    >
      <div className="component-row">
        <img src={coin!.image} alt="" className="coin-img" />{" "}
        <motion.span
          className="blod"
          animate={{
            fontSize: coin!.id.length > 10 ? ".9rem" : "",
            color: themeSelector.headerColor,
          }}
        >
          {coin!.id}
        </motion.span>{" "}
        <span
          className="blur-text"
          style={{ color: themeSelector.plainTextColor }}
        >
          {coin!.symbol}/usd
        </span>
      </div>
      <div
        style={{ color: themeSelector.btnColor }}
        className="current-price component-row"
      >
        usd {coin!.current_price}$
      </div>
      <div className="component-row">
        <span
          style={{ color: themeSelector.plainTextColor }}
          className="blur-text market-cap"
        >
          {coin!.market_cap.toLocaleString()}
        </span>
        <span
          className={`percentage-container ${
            +coin!.price_change_percentage_24h > 0 ? "green" : "red"
          }`}
          style={{ color: themeSelector.plainTextColor }}
        >
          {coin!.price_change_percentage_24h}%
        </span>
      </div>
    </motion.div>
  );
};

export default TopCryptoCard;
