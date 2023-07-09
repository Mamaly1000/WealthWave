import { useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CryptoRow from "./cryptoRow";
import { componentViewMotion } from "../../motions/motions";
import { fetchCoins } from "../../features/crypto_slice/crypto_slice";
import { useDispatch } from "react-redux";

const CryptoTableRow = () => {
  const nav = useNavigate();
  const { cryptosList, cryptoSelector, setLoacalCryptoList, LocalCryptoList } =
    useCrypto();
  const dispatch = useDispatch();
  useEffect(() => {
    if (cryptosList.data) {
      setLoacalCryptoList(cryptosList.data.data);
      dispatch(fetchCoins(cryptosList.data.data));
    }
    if (cryptosList.isError) {
      dispatch(fetchCoins(LocalCryptoList));
    }
  }, [cryptosList]);

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
      <table>
        <thead>
          <tr>
            {[
              "rate",
              "icon",
              "name",
              "price",
              "high-24h",
              "low-24h",
              "24h",
              "Market-Cap",
            ].map((head, index) => {
              return (
                <th key={index} className={`th-${head}`}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        {!cryptosList.isLoading ? (
          <tbody>
            {cryptoSelector.coinlist.slice(0, 10).map((coin, index) => {
              return <CryptoRow coin={coin} key={index} index={index} />;
            })}
          </tbody>
        ) : (
          <tbody>
            <tr style={{ animationDelay: `${0 / 10 + 0.1}s` }}>
              <td className="td-rate">
                <Loader />
              </td>
              <td className="td-icon">
                <Loader />
              </td>
              <td className="td-name">
                <Loader />
              </td>
              <td className="td-price">
                <Loader />
              </td>
              <td className="td-high">
                <Loader />
              </td>
              <td className="td-low">
                <Loader />
              </td>
              <td className={`td-percent`}>
                <Loader />
              </td>
              <td className="td-cap">
                <Loader />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </motion.div>
  );
};

export default CryptoTableRow;
