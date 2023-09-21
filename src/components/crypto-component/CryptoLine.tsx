import { AnimatePresence, motion } from "framer-motion";
import { cryptoRowMotion } from "../../motions/motions";
import { useNavigate } from "react-router-dom";
import { IcryptoData } from "../../hooks/useCrypto";
import { CryptoTable } from "../cryto-table/CryptoChart";
import useCrypto from "../../hooks/useCrypto";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { downarrow, starIcon, uparrow } from "../../assets/crypto/cryptoImages";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
type CryptoLinePropsType = {
  index: number;
  coin: IcryptoData;
};
const CryptoLine = ({ index, coin }: CryptoLinePropsType) => {
  const nav = useNavigate();
  const { cryptoSelector } = useCrypto();
  const [displayChart, setDisplayChart] = useState<boolean>(false);
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.tr
      variants={cryptoRowMotion(index)}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ borderInlineColor: themeSelector.btnColor }}
      key={index}
      style={{ borderBlockColor: themeSelector.btnColor }}
      onAnimationComplete={() => {
        setDisplayChart(true);
      }}
    >
      <td
        className={`${
          cryptoSelector.filterType.type_name === "RANK" ? "selected-td" : ""
        } rank-td`}
      >
        <img src={starIcon} />
        {coin.market_cap_rank}
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "NAME" ? "selected-td" : ""
        } coin-td`}
        onClick={() => nav(`/crypto/${coin!.id}`)}
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5, type: "tween" }}
          src={coin!.image}
          alt={coin.id}
        />
        {coin.id}
        <span>{coin.symbol}</span>
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "PRICE" ? "selected-td" : ""
        } price-td`}
        style={{ color: themeSelector.btnColor }}
      >
        {coin.current_price ? "$" + coin.current_price.toLocaleString() : "N/A"}
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "LOW_24H" ? "selected-td" : ""
        } low-td ${+coin.low_24h > +coin.high_24h ? "green-text" : "red-text"}`}
      >
        {coin.low_24h ? "$" + coin.low_24h.toLocaleString() : "N/A"}
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "HIGH_24H"
            ? "selected-td"
            : ""
        } high-td  ${
          +coin.high_24h > +coin.low_24h ? "green-text" : "red-text"
        }`}
        onClick={() => nav(`/crypto/${coin!.id}`)}
      >
        {coin.high_24h ? "$" + coin.high_24h.toLocaleString() : "N/A"}
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "24H" ? "selected-td" : ""
        } percentage-td  ${
          +coin.price_change_percentage_24h > 0 ? "green-text" : "red-text"
        }`}
        onClick={() => nav(`/crypto/${coin!.id}`)}
      >
        {coin.price_change_percentage_24h &&
        +coin.price_change_percentage_24h > 0 ? (
          <img src={uparrow} />
        ) : (
          <img src={downarrow} />
        )}
        {coin.price_change_percentage_24h
          ? coin.price_change_percentage_24h.toLocaleString()
          : "N/A"}
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "24H_VOLUME"
            ? "selected-td"
            : ""
        } volume-td`}
      >
        {coin.total_volume ? "$" + coin.total_volume.toLocaleString() : "N/A"}
      </td>
      <td
        className={`${
          cryptoSelector.filterType.type_name === "MKT_CAP" ? "selected-td" : ""
        } market-cap-td`}
      >
        {coin.market_cap ? "$" + coin.market_cap.toLocaleString() : "N/A"}
      </td>
      <td className="chart-td">
        <AnimatePresence mode="wait">
          {displayChart && (
            <CryptoTable
              width={"150px"}
              height={"100px"}
              id={coin.id}
              percent={coin.price_change_percentage_24h}
              sparkLine={coin!.sparkline_in_7d!.price}
              defChart={[]}
            />
          )}
        </AnimatePresence>
      </td>
      <td className="td-actions">
        <button
          style={{
            border: `1px solid ${themeSelector.btnColor}`,
            color: themeSelector.headerColor,
          }}
        >
          <PiDotsThreeOutlineVerticalLight />
        </button>
        <button
          style={{
            border: `1px solid ${themeSelector.btnColor}`,
            color: themeSelector.headerColor,
          }}
        >
          <GiHamburgerMenu />
        </button>
      </td>
    </motion.tr>
  );
};

export default CryptoLine;
