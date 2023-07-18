import { AnimatePresence, motion } from "framer-motion";
import { cryptoRowMotion } from "../../motions/motions";
import { useNavigate } from "react-router-dom";
import saveIcon from "../../assets/crypto/save.svg";
import { IcryptoData } from "../../hooks/useCrypto";
import { CryptoTable } from "../cryto-table/CryptoChart";
import useCrypto from "../../hooks/useCrypto";
type CryptoLinePropsType = {
  index: number;
  coin: IcryptoData;
};
const CryptoLine = ({ index, coin }: CryptoLinePropsType) => {
  const nav = useNavigate();
  const {} = useCrypto();
  return (
    <motion.tr
      variants={cryptoRowMotion(index)}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={index}
    >
      <td className="rank-td">
        <button>
          <img src={saveIcon} alt="save" />
        </button>
        {coin.market_cap_rank}
      </td>
      <td className="coin-td" onClick={() => nav(`/crypto/${coin!.id}`)}>
        <img src={coin!.image} alt={coin.id} />
        {coin.id}
        <span>{coin.symbol}</span>
      </td>
      <td className="price-td">${coin.current_price}</td>
      <td
        className={`low-td ${
          +coin.low_24h > +coin.high_24h ? "green-text" : "red-text"
        }`}
      >
        ${coin.low_24h}
      </td>
      <td
        className={`high-td ${
          +coin.high_24h > +coin.low_24h ? "green-text" : "red-text"
        }`}
        onClick={() => nav(`/crypto/${coin!.id}`)}
      >
        ${coin.high_24h}
      </td>
      <td
        className={`percentage-td ${
          +coin.price_change_percentage_24h > 0 ? "green-text" : "red-text"
        }`}
        onClick={() => nav(`/crypto/${coin!.id}`)}
      >
        {coin.price_change_percentage_24h}%
      </td>
      <td className="volume-td">{coin.total_volume}$</td>
      <td
        className={`market-cap-td ${
          +coin.market_cap_change_24h > 0 ? "green-text" : "red-text"
        }`}
      >
        {coin.market_cap_change_24h}$
      </td>
      <td className="chart-td">
        <AnimatePresence mode="wait">
          <CryptoTable
            width={"130px"}
            height={"100%"}
            id={coin.id}
            percent={coin.price_change_percentage_24h}
            sparkLine={coin!.sparkline_in_7d!.price}
            defChart={[]}
          />
        </AnimatePresence>
      </td>
    </motion.tr>
  );
};

export default CryptoLine;
