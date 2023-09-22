import { useEffect, useState } from "react";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { componentViewMotion, cryptoRowMotion } from "../../motions/motions";
import { useDispatch } from "react-redux";
import { useContextFunction } from "../../context/AppContext";
import CryptoLine from "../crypto-component/CryptoLine";
import { sortCryptoTable } from "../../features/crypto_slice/crypto_slice";
import ArrowIcon from "./ArrowIcon";
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
  const { cryptosList, cryptoSelector } = useCrypto();
  const currentCryptoData = cryptosList("fetch-crypto-list", true, true);
  const [filterTypeMode, setFilterTypeMode] = useState("ASC");
  useEffect(() => {
    setFilterTypeMode("ASC");
  }, [cryptoSelector.filterType.type_name]);
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
          <motion.table>
            <thead>
              <th>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "RANK"
                      ? "selected-td"
                      : ""
                  } rank-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "RANK",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  #
                  <ArrowIcon type="RANK" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "NAME"
                      ? "selected-td"
                      : ""
                  } coin-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "NAME",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  coin
                  <ArrowIcon type="NAME" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "PRICE"
                      ? "selected-td"
                      : ""
                  } price-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "PRICE",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  price
                  <ArrowIcon type="PRICE" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "LOW_24H"
                      ? "selected-td"
                      : ""
                  } low-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "LOW_24H",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  low-24h
                  <ArrowIcon type="LOW_24H" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "HIGH_24H"
                      ? "selected-td"
                      : ""
                  } high-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "HIGH_24H",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  high-24h
                  <ArrowIcon type="HIGH_24H" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "24H"
                      ? "selected-td"
                      : ""
                  } percentage-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "24H",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  24h
                  <ArrowIcon type="24H" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "24H_VOLUME"
                      ? "selected-td"
                      : ""
                  } volume-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "24H_VOLUME",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  24h volume
                  <ArrowIcon type="24H_VOLUME" typeMode={filterTypeMode} />
                </td>
                <td
                  className={`${
                    cryptoSelector.filterType.type_name === "MKT_CAP"
                      ? "selected-td"
                      : ""
                  } market-cap-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        type_name: "MKT_CAP",
                        type: filterTypeMode,
                      })
                    );
                    if (filterTypeMode === "ASC") {
                      setFilterTypeMode("DESC");
                    } else {
                      setFilterTypeMode("ASC");
                    }
                  }}
                >
                  mkt cap
                  <ArrowIcon type="MKT_CAP" typeMode={filterTypeMode} />
                </td>
                <td className="chart-td">last 7 days</td>
                <td className="td-actions">actions</td>
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
