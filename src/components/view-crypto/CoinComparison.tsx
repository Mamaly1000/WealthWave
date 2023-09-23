import { useState, useTransition } from "react";
import arrowIcon from "./../../assets/crypto/arrow-down.svg";
import deleteIcon from "./../../assets/crypto/delete.svg";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import ComparisonButtons from "./ComparisonButtons";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { tagsMotion, viewFromTop } from "../../motions/viewCryptoMotions";
import { removeCryptoChart } from "../../features/crypto_slice/crypto_slice";
import { useDispatch, useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const CoinComparison = () => {
  const dispatch = useDispatch();
  const { cryptoSelector, cryptosList } = useCrypto();
  const [_isPending, startTransition] = useTransition();
  const fetchAllCoins = cryptosList(
    "fetch-coin",
    false,
    false,
    cryptoSelector.currentCurrency.name
  );
  const [selectedCoins, setSelectedCoins] = useState<IcryptoData[]>([]);
  const [displayCoins, setDisplayCoins] = useState<boolean>(false);
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      variants={viewFromTop(1, 0.5)}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      className="compare-charts-container"
    >
      <div
        className="select-coin-container"
        onClick={() => {
          startTransition(() => {
            if (cryptoSelector.coinlist.length === 0) {
              toast.promise(fetchAllCoins.refetch(), {
                error: "fetching coins failed!",
                success: "coins fetched successfully",
                pending: "fetching coins",
              });
            }
            if (selectedCoins.length <= 1) {
              setDisplayCoins((prev) => !prev);
            } else {
              toast.error("you cant choose more than 2 coins");
            }
          });
        }}
        style={{
          background: themeSelector.btnColor,
          color: themeSelector.headerColor,
        }}
      >
        <span>Select Coin</span>
        <img
          style={{ transform: displayCoins ? "rotate(180deg)" : "rotate(0)" }}
          src={arrowIcon}
          alt="arrow"
        />
      </div>
      <div className="selected-coin-container">
        <div
          style={{
            borderColor: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
          className="selected-coins"
        >
          <AnimatePresence>
            {selectedCoins.map((coin, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index, 0.3)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key={index}
                  onClick={() => {
                    dispatch(removeCryptoChart(coin.id));
                    const newArray = [...selectedCoins].filter(
                      (c) => c.id !== coin.id
                    );
                    setSelectedCoins(newArray);
                  }}
                  whileHover={{ background: "rgb(153 27 27)" }}
                  style={{ background: themeSelector.btnColor }}
                  transition={{ duration: 0.1 }}
                >
                  <img src={coin.image} />
                  {coin.id}
                  <img src={deleteIcon} />
                </motion.span>
              );
            })}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {displayCoins && (
            <motion.div
              variants={viewFromTop(0, 1)}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="coins-list-container"
            >
              <motion.div
                drag="x"
                dragSnapToOrigin
                dragConstraints={{ left: 50, right: 0 }}
                className="coins-list"
              >
                {cryptoSelector.coinlist.slice(0, 20).map((coin, index) => {
                  return (
                    <ComparisonButtons
                      coin={coin}
                      index={index}
                      key={index}
                      setSelectedCoins={setSelectedCoins}
                      selectedCoins={selectedCoins}
                      setDisplayCoins={setDisplayCoins}
                    />
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CoinComparison;
