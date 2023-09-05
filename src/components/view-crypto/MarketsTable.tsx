import { useMemo, useState } from "react";
import useCrypto from "../../hooks/useCrypto";
import { AnimatePresence, motion } from "framer-motion";
import { useContextFunction } from "../../context/AppContext";
import moment from "moment";
import { viewFromLeft } from "../../motions/viewCryptoMotions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const MarketsTable = () => {
  const { cryptoSelector } = useCrypto();
  const contextData = useContextFunction();
  const { selectedCoin } = cryptoSelector;
  const themeSelector = useSelector(selecttheme);
  const [tickers, _setTickers] = useState<
    {
      base: string;
      target: string;
      market: {
        name: string;
        identifier: string;
        has_trading_incentive: boolean;
      };
      last: number;
      volume: number;
      converted_last: {
        btc: number;
        eth: number;
        usd: number;
      };
      converted_volume: {
        btc: number;
        eth: number;
        usd: number;
      };
      trust_score: string;
      bid_ask_spread_percentage: number;
      timestamp: string;
      last_traded_at: string;
      last_fetch_at: string;
      is_anomaly: boolean;
      is_stale: boolean;
      trade_url: string;
      token_info_url: null;
      coin_id: string;
    }[]
  >(selectedCoin.tickers);
  const [marketSearchText, setMarketSearchText] = useState<string>("");
  const searchedArray = useMemo(() => {
    const newArray = [...tickers].filter(
      (market) =>
        market.base.toLowerCase().includes(marketSearchText.toLowerCase()) ||
        market.coin_id.toLowerCase().includes(marketSearchText.toLowerCase()) ||
        market.target.toLowerCase().includes(marketSearchText.toLowerCase()) ||
        market.market.name
          .toLowerCase()
          .includes(marketSearchText.toLowerCase()) ||
        market.market.identifier
          .toLowerCase()
          .includes(marketSearchText.toLowerCase())
    );
    return newArray;
  }, [tickers, marketSearchText]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4, type: "tween" }}
      exit={{
        opacity: 0,
        x: -50,
        transition: {
          duration: 0.3,
        },
      }}
      className="selected-coin-market-container"
    >
      <div className="market-header">
        <h2
          style={{
            color: themeSelector.headerColor,
          }}
        >
          {selectedCoin.name} Markets
        </h2>
        <input
          value={marketSearchText}
          onChange={(e) => {
            setMarketSearchText(e.target.value);
          }}
          placeholder="search ..."
          style={{ border: `1px solid ${themeSelector.btnColor}` }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, type: "tween" }}
        className="markets-table-container"
      >
        <motion.table
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragMomentum={false}
          dragSnapToOrigin={contextData!.screenW}
          style={{ borderColor: themeSelector.btnColor }}
        >
          <thead>
            {[
              "#",
              "exchange",
              "pair",
              "converted_last",
              "converted_volume",
              "last",
              "last_fetch_at",
              "last_traded_at",
              "volume",
              "trust_score",
            ].map((d, index) => {
              return (
                <th
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                  key={index}
                  className={d === "#" ? "rank" : d}
                >
                  {d}
                </th>
              );
            })}
          </thead>
          <tbody>
            {searchedArray.map((market, index) => {
              return (
                <AnimatePresence key={index}>
                  <motion.tr
                    variants={viewFromLeft(index, 0.3)}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      background: themeSelector.hoverColor,
                      borderColor: themeSelector.btnColor,
                    }}
                    whileHover={{ background: themeSelector.btnColor }}
                    transition={{ duration: 0.1 }}
                  >
                    <td className="rank">{index + 1}</td>
                    <td
                      className="exchange"
                      style={{
                        fontSize:
                          market.market.name.length > 10 ? ".7rem" : ".9rem",
                      }}
                    >
                      {market.market.name}
                    </td>
                    <td className="pair">USDT/BTC</td>
                    <td className="converted_last">
                      ${market.converted_last.usd.toLocaleString()}
                    </td>
                    <td className="converted_volume">
                      ${market.converted_volume.usd.toLocaleString()}
                    </td>
                    <td className="last">${market.last.toLocaleString()}</td>
                    <td className="last_fetch_at">
                      {moment(market.last_fetch_at).format("YYYY/MM/DD-HH:MM")}
                    </td>
                    <td className="last_traded_at">
                      {moment(market.last_traded_at).format("YYYY/MM/DD-HH:MM")}
                    </td>
                    <td className="volume">
                      ${market.volume.toLocaleString()}
                    </td>
                    <td className="trust_score">
                      {market.trust_score !== null ? (
                        <div className={market.trust_score + " score"}></div>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </motion.tr>
                </AnimatePresence>
              );
            })}
          </tbody>
        </motion.table>
      </motion.div>
    </motion.div>
  );
};

export default MarketsTable;
