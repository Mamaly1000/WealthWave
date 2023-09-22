import { useSelector } from "react-redux";
import { IcryptoData } from "../../hooks/useCrypto";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SingleStackComponent = ({
  coin,
  index,
}: {
  index: number;
  coin: IcryptoData;
}) => {
  const theme = useSelector(selecttheme);
  const nav = useNavigate();
  return (
    <motion.div
      initial={{ x: 100, opacity: 0, background: "transparent" }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: index / 10 + 0.1 },
      }}
      whileHover={{
        background: theme.modalColor,
        transition: {
          duration: 0.1,
          delay: 0,
        },
      }}
      style={{ color: theme.headerColor, borderColor: theme.btnColor }}
      key={coin.id}
      onClick={() => nav(`/crypto/${coin.id}`)}
      className="single-stack-component"
    >
      <img src={coin.image} />
      <div className="name-section">
        <h5 className="bold">{coin.symbol}</h5>
        <span className="light"> ${coin?.total_volume?.toLocaleString()}</span>
      </div>
      <div className="price-cap">
        <span
          className={`bold ${
            coin.market_cap_change_percentage_24h > 0
              ? "green-text"
              : "red-text"
          }`}
        >
          {coin.market_cap_change_percentage_24h}%
        </span>
        <span className="light">${coin.current_price.toLocaleString()}</span>
      </div>
      <div
        className={`percentage ${
          coin.price_change_percentage_24h > 0 ? "green  " : "red"
        }`}
      >
        {coin.price_change_percentage_24h}%
      </div>
    </motion.div>
  );
};

export default SingleStackComponent;
