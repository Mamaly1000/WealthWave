import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nftCardsMotion } from "../../motions/motions";
import { ItrendCoin } from "../../features/crypto_slice/crypto_slice";
import useCrypto from "../../hooks/useCrypto";
import { CryptoTable } from "../cryto-table/CryptoChart";
import { default_charts_data } from "../../Data/dummy";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { TrendArrow } from "../../assets/crypto/cryptoImages";
type trendCryptoCardPropsType = {
  coin: ItrendCoin;
  index: number;
};
const TrendCryptoCard = ({ coin, index }: trendCryptoCardPropsType) => {
  const themeSelector = useSelector(selecttheme);
  const { getCryptoPercentage } = useCrypto();
  const [coinPercentage, setCoinPercentage] = useState<number>(0);
  const [displayChart, setDisplayChart] = useState<boolean>(false);
  useEffect(() => {
    if (coin) {
      setCoinPercentage(
        getCryptoPercentage(coin.item.id)
          ? (getCryptoPercentage(coin.item.id) as number)
          : +(
              (Math.floor(Math.random() * 100) < 40 ? "-" : "+") +
              Math.floor(Math.random() * 100)
            )
      );
    }
  }, [coin]);

  return (
    <motion.div
      variants={nftCardsMotion(index)}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      className="trend-crypto-component"
      onAnimationComplete={() => {
        setDisplayChart(true);
      }}
      whileHover={{ background: themeSelector.containerColor }}
    >
      <div className="top" style={{ borderColor: themeSelector.btnColor }}>
        <motion.div className="top-left">
          <motion.img src={coin!.item!.small} />
          <span
            className="bold"
            style={{
              fontSize: coin.item.symbol.length > 10 ? ".6rem" : "1.5rem",
              color: themeSelector.headerColor,
            }}
          >
            {coin!.item!.symbol}
          </span>
          <span
            style={{
              color: themeSelector.headerColor,
              background: themeSelector.btnColor,
            }}
            className="light"
          >
            {coin.item.name}
          </span>
        </motion.div>
        <button style={{ background: themeSelector.btnColor }}>
          <img src={TrendArrow} />
        </button>
      </div>
      <div className="bottom">
        <div
          className="bottom-left"
          style={{ color: themeSelector.plainTextColor }}
        >
          <span
            className="bold"
            style={{ color: themeSelector.plainTextColor }}
          >
            {" "}
            ${coin.item.price_btc.toFixed(8)}
          </span>
          <span
            className={`coin-percentage ${
              coinPercentage > 0 ? "green-text" : "red-text"
            }`}
          >
            {coinPercentage}%
          </span>
        </div>
        {displayChart && (
          <CryptoTable
            height={"120"}
            id={coin.item.id}
            width={"150px"}
            percent={coinPercentage}
            defChart={default_charts_data[index]!.prices}
            sparkLine={[]}
          />
        )}
      </div>
    </motion.div>
  );
};

export default TrendCryptoCard;
