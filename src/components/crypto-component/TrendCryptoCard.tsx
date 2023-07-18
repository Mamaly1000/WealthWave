import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nftCardsMotion } from "../../motions/motions";
import { ItrendCoin } from "../../features/crypto_slice/crypto_slice";
import useCrypto from "../../hooks/useCrypto";
import { CryptoTable } from "../cryto-table/CryptoChart";
import { default_charts_data } from "../../Data/dummy";
type trendCryptoCardPropsType = {
  coin: ItrendCoin;
  index: number;
};
const TrendCryptoCard = ({ coin, index }: trendCryptoCardPropsType) => {
  const {
    getCryptoPercentage,
    chartLists,
    LocalChartsData,
    LocalChartsData2,
    setLocalChartsData,
    setLocalChartsData2,
  } = useCrypto();
  const [coinPercentage, setCoinPercentage] = useState<number>(0);
  const fetch_Chart_Data = chartLists(
    coin!.item.id,
    () => {},
    () => {},
    true,
    false,
    false,
    50000
  );
  // useEffect(() => {
  //   if (fetch_Chart_Data.data) {
  //     if (LocalChartsData.findIndex((chart) => chart.id === coin.item.id) < 0) {
  //       if (LocalChartsData.length > 50) {
  //         setLocalChartsData2([
  //           ...LocalChartsData2,
  //           {
  //             id: coin.item.id,
  //             data: fetch_Chart_Data.data.data.prices,
  //           },
  //         ]);
  //       } else {
  //         setLocalChartsData([
  //           ...LocalChartsData,
  //           {
  //             id: coin.item.id,
  //             data: fetch_Chart_Data.data.data.prices,
  //           },
  //         ]);
  //       }
  //     }
  //   }
  // }, [fetch_Chart_Data]);
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
    >
      <motion.div className="trend-crypto-content">
        <motion.div>
          <motion.img src={coin!.item!.small} />
          <motion.div>
            <span
              className="bold"
              style={{
                fontSize: coin.item.id.length > 10 ? ".6rem" : "1rem",
              }}
            >
              {coin!.item!.id}
            </span>
            <span className="light">
              ${(+coin!.item!.price_btc * 1000).toFixed(8)}
            </span>
          </motion.div>
        </motion.div>
        <span
          className={`coin-percentage ${coinPercentage > 0 ? "green" : "red"}`}
        >
          {coinPercentage}%
        </span>
      </motion.div>
      <CryptoTable
        height={"150px"}
        id={coin.item.id}
        width={"200px"}
        percent={coinPercentage}
        defChart={default_charts_data[index].prices}
        sparkLine={[]}
      />
    </motion.div>
  );
};

export default TrendCryptoCard;
