import { useState } from "react";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { componentViewMotion, cryptoRowMotion } from "../../motions/motions";
import { useDispatch, useSelector } from "react-redux";
import CryptoLine from "../crypto-component/CryptoLine";
import {
  sortingTypes,
  sortCryptoTable,
} from "../../features/crypto_slice/crypto_slice";
import ArrowIcon from "./ArrowIcon";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const CryptoTableRow = ({
  header = true,
  crypto_data,
}: {
  header: boolean;
  crypto_data: IcryptoData[];
}) => {
  const nav = useNavigate();
  const [crypto_id, setCrypto_id] = useState<string>("");
  const dispatch = useDispatch();
  const theme = useSelector(selecttheme);
  const [displayCryptoLines, setDisplayCryptoLines] = useState<boolean>(false);
  const { cryptosList, cryptoSelector } = useCrypto();
  const currentCryptoData = cryptosList(
    "fetch-crypto-list",
    true,
    true,
    cryptoSelector.currentCurrency.name
  );
  const selected_th_style = (
    type: sortingTypes
  ): {
    borderInline: string;
  } => {
    return {
      borderInline:
        cryptoSelector.sortType.type_name === type
          ? `1px solid ${theme.btnColor}`
          : "none",
    };
  };
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
              <th
                style={{
                  background: theme.modalColor,
                  color: theme.headerColor,
                }}
              >
                <motion.td
                  animate={selected_th_style("RANK")}
                  className={`rank-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "RANK",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  #
                  <ArrowIcon type="RANK" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("NAME")}
                  className={`coin-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "NAME",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  coin
                  <ArrowIcon type="NAME" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("PRICE")}
                  className={`price-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "PRICE",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  price
                  <ArrowIcon type="PRICE" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("LOW_24H")}
                  className={`low-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "LOW_24H",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  low-24h
                  <ArrowIcon type="LOW_24H" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("HIGH_24H")}
                  className={`high-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "HIGH_24H",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  high-24h
                  <ArrowIcon type="HIGH_24H" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("24H")}
                  className={`percentage-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "24H",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  24h
                  <ArrowIcon type="24H" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("24H_VOLUME")}
                  className={`volume-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "24H_VOLUME",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  24h volume
                  <ArrowIcon type="24H_VOLUME" />
                </motion.td>
                <motion.td
                  animate={selected_th_style("MKT_CAP")}
                  className={`market-cap-td`}
                  onClick={() => {
                    dispatch(
                      sortCryptoTable({
                        mode:
                          cryptoSelector.sortType.mode === "N/A"
                            ? "ASC"
                            : cryptoSelector.sortType.mode === "ASC"
                            ? "DESC"
                            : "ASC",
                        type_name: "MKT_CAP",
                      } as typeof cryptoSelector.sortType)
                    );
                  }}
                >
                  mkt cap
                  <ArrowIcon type="MKT_CAP" />
                </motion.td>
                <motion.td className="chart-td">last 7 days</motion.td>
                <motion.td className="td-actions">actions</motion.td>
              </th>
            </thead>
            <motion.tbody
              style={{ color: theme.headerColor }}
              transition={{ duration: 1, type: "tween" }}
            >
              {!currentCryptoData.isLoading
                ? crypto_data.map((coin, index) => {
                    return (
                      displayCryptoLines && (
                        <CryptoLine
                          crypto_id={crypto_id}
                          setCrypto_id={setCrypto_id}
                          coin={coin}
                          index={index}
                          key={coin.id}
                        />
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
                        style={{ cursor: "default" }}
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
