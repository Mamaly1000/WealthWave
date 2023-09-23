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
import { IoMdAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { toast } from "react-toastify";
import { FilterType } from "../../features/crypto_slice/crypto_slice";
type CryptoLinePropsType = {
  index: number;
  coin: IcryptoData;
};
const CryptoLine = ({ index, coin }: CryptoLinePropsType) => {
  const nav = useNavigate();
  const { cryptoSelector } = useCrypto();
  const [displayChart, setDisplayChart] = useState<boolean>(false);
  const themeSelector = useSelector(selecttheme);
  const selected_td_style = (
    type: FilterType
  ): {
    borderInline: string;
    background: string;
  } => {
    return {
      background:
        cryptoSelector.sortType.type_name === type
          ? themeSelector.modalColor
          : "transparent",
      borderInline:
        cryptoSelector.sortType.type_name === type
          ? `1px solid ${themeSelector.btnColor}`
          : "none",
    };
  };
  return (
    <motion.tr
      variants={cryptoRowMotion(index)}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        borderInlineColor: themeSelector.btnColor,
        background: themeSelector.modalColor,
        color: themeSelector.headerColor,
      }}
      key={index}
      style={{
        borderTopColor: themeSelector.btnColor,
        background: "transparent",
      }}
      onAnimationComplete={() => {
        setDisplayChart(true);
      }}
    >
      <motion.td animate={selected_td_style("RANK")} className={`rank-td`}>
        <img src={starIcon} />
        {coin.market_cap_rank}
      </motion.td>
      <motion.td
        animate={selected_td_style("NAME")}
        className={`coin-td`}
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
      </motion.td>
      <motion.td animate={selected_td_style("PRICE")} className={`price-td`}>
        {coin.current_price
          ? cryptoSelector.currentCurrency.symbol +
            coin.current_price.toLocaleString()
          : "N/A"}
      </motion.td>
      <motion.td
        animate={selected_td_style("LOW_24H")}
        className={`low-td ${
          +coin.low_24h > +coin.high_24h ? "green-text" : "red-text"
        }`}
      >
        {coin.low_24h
          ? cryptoSelector.currentCurrency.symbol +
            coin.low_24h.toLocaleString()
          : "N/A"}
      </motion.td>
      <motion.td
        animate={selected_td_style("HIGH_24H")}
        className={`high-td  ${
          +coin.high_24h > +coin.low_24h ? "green-text" : "red-text"
        }`}
        onClick={() => nav(`/crypto/${coin!.id}`)}
      >
        {coin.high_24h
          ? cryptoSelector.currentCurrency.symbol +
            coin.high_24h.toLocaleString()
          : "N/A"}
      </motion.td>
      <motion.td
        animate={selected_td_style("24H")}
        className={`percentage-td  ${
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
          ? coin.price_change_percentage_24h.toLocaleString() + "%"
          : "N/A"}
      </motion.td>
      <motion.td
        animate={selected_td_style("24H_VOLUME")}
        className={`volume-td`}
      >
        {coin.total_volume
          ? cryptoSelector.currentCurrency.symbol +
            coin.total_volume.toLocaleString()
          : "N/A"}
      </motion.td>
      <motion.td
        animate={selected_td_style("MKT_CAP")}
        className={`market-cap-td`}
      >
        {coin.market_cap
          ? cryptoSelector.currentCurrency.symbol +
            coin.market_cap.toLocaleString()
          : "N/A"}
      </motion.td>
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
        <motion.button
          whileHover={{
            background: themeSelector.hoverColor,
            border: `1px solid ${themeSelector.headerColor}`,
          }}
          style={{
            border: `1px solid ${themeSelector.btnColor}`,
            background: "transparent",
            color: themeSelector.headerColor,
          }}
          transition={{ duration: 0.1 }}
          onClick={() => {
            toast.success(`${coin.name} added to your crypto dashboard`);
          }}
        >
          <IoMdAdd />
        </motion.button>
        <motion.button
          whileHover={{
            border: `1px solid ${themeSelector.headerColor}`,
            background: themeSelector.hoverColor,
          }}
          transition={{ duration: 0.1 }}
          style={{
            border: `1px solid ${themeSelector.btnColor}`,
            color: themeSelector.headerColor,
            background: "transparent",
          }}
        >
          <GiHamburgerMenu />
        </motion.button>
      </td>
    </motion.tr>
  );
};

export default CryptoLine;
