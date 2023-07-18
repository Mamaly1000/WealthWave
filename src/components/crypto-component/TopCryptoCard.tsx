import { IcryptoData } from "../../hooks/useCrypto";
import { nftCardsMotion } from "../../motions/motions";
import { motion } from "framer-motion";

type topCryptoCardPropType = {
  index: number;
  coin: IcryptoData;
};

const TopCryptoCard = ({ index, coin }: topCryptoCardPropType) => {
  return (
    <motion.div
      variants={nftCardsMotion(index)}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      className="top-crypto-component"
    >
      <div className="component-row">
        <img src={coin!.image} alt="" className="coin-img" />{" "}
        <span
          className="blod"
          style={{
            fontSize: coin!.id.length > 10 ? ".9rem" : "",
          }}
        >
          {coin!.id}
        </span>{" "}
        <span className="blur-text">{coin!.symbol}/usd</span>
      </div>
      <div className="current-price component-row">
        usd {coin!.current_price}$
      </div>
      <div className="component-row">
        <span className="blur-text market-cap">
          {coin!.market_cap.toLocaleString()}
        </span>
        <span
          className={`percentage-container ${
            +coin!.price_change_percentage_24h > 0 ? "green" : "red"
          }`}
        >
          {coin!.price_change_percentage_24h}%
        </span>
      </div>
    </motion.div>
  );
};

export default TopCryptoCard;
