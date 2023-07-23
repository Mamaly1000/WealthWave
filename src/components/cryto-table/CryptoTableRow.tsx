import { useState } from "react";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { componentViewMotion, cryptoRowMotion } from "../../motions/motions";
import { useDispatch } from "react-redux";
import { useContextFunction } from "../../context/AppContext";
import CryptoLine from "../crypto-component/CryptoLine";

const CryptoTableRow = ({
  header = true,
  crypto_data,
}: {
  header: boolean;
  crypto_data: IcryptoData[];
}) => {
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
      exit="exit"
      viewport={{ once: true }}
    >
      {header && (
        <div className="crypto-table-header">
          <h2 className="page-header">Crypto Currencies</h2>
          <button onClick={() => nav("/crypto")}>track more coins</button>
        </div>
      )}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, type: "tween" }}
          exit={{ opacity: 0, y: 50 }}
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
                ? crypto_data.map((coin, index) => {
                    return (
                      displayCryptoLines && (
                        <CryptoLine coin={coin} index={index} key={index} />
                      )
                    );
                  })
                : "1234567890".split("").map((c, index) => {
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
      </AnimatePresence>
    </motion.div>
  );
};

export default CryptoTableRow;
