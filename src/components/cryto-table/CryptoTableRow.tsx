import { useState } from "react";
import useCrypto from "../../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { componentViewMotion, cryptoRowMotion } from "../../motions/motions";
import { fetchCoins } from "../../features/crypto_slice/crypto_slice";
import { useDispatch } from "react-redux";
import { useContextFunction } from "../../context/AppContext";
import CryptoLine from "../crypto-component/CryptoLine";

const CryptoTableRow = () => {
  const nav = useNavigate();
  const contextData = useContextFunction();
  const dispatch = useDispatch();
  const [displayCryptoLines, setDisplayCryptoLines] = useState<boolean>(false);
  const { cryptosList, cryptoSelector, setLoacalCryptoList, LocalCryptoList } =
    useCrypto();
  const currentCryptoData = cryptosList("fetch-crypto-list", true, true);

  return (
    <motion.div
      className="crypto-table-container"
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
    >
      <div className="crypto-table-header">
        <h2 className="page-header">Crypto Currencies</h2>
        <button onClick={() => nav("/crypto")}>track more coins</button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "tween" }}
        viewport={{ once: true }}
        onAnimationComplete={() => {
          setDisplayCryptoLines(true);
        }}
        className="crypto-table-container"
      >
        <motion.table
          drag="x"
          dragConstraints={{
            right: 10,
            left: -1080,
          }}
          dragSnapToOrigin={contextData!.screenW}
        >
          <thead>
            <th>
              <td className="rank-td">#</td>
              <td className="coin-td">coin</td>
              <td className="price-td">price</td>
              <td className="low-td">low-24h</td>
              <td className="high-td">high-24h</td>
              <td className="percentage-td">24h</td>
              <td className="volume-td">24h volume</td>
              <td className="market-cap-td">mkt cap</td>
              <td className="chart-td">last 7 days</td>
            </th>
          </thead>
          <motion.tbody
            initial={{ height: 200 }}
            animate={{ height: displayCryptoLines ? 610 : 200 }}
            transition={{ duration: 1, type: "tween" }}
          >
            {!currentCryptoData.isLoading || !currentCryptoData.isFetching
              ? cryptoSelector.coinlist.map((coin, index) => {
                  return (
                    displayCryptoLines && (
                      <CryptoLine coin={coin} index={index} key={index} />
                    )
                  );
                })
              : "123456".split("").map((c, index) => {
                  return (
                    <motion.tr
                      variants={cryptoRowMotion(index)}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key={c}
                      className="loading-animation"
                    ></motion.tr>
                  );
                })}
          </motion.tbody>
        </motion.table>
      </motion.div>
    </motion.div>
  );
};

export default CryptoTableRow;
