import React, {
  memo,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  setCryptoSearch,
  sortCryptoTable,
} from "../../features/crypto_slice/crypto_slice";
import filterIcon from "../../assets/crypto/filter.svg";
import refreshIcon from "../../assets/crypto/refresh.svg";
import TreeChart from "../../assets/crypto/TreeChart.svg";
import lineChart from "../../assets/crypto/lineChart.svg";

export type FilterType =
  | "RANK"
  | "NAME"
  | "PRICE"
  | "LOW_24H"
  | "HIGH_24H"
  | "24H"
  | "24H_VOLUME"
  | "MKT_CAP";

const Crypto_Search = ({
  DisplayType,
  setDisplayType,
}: {
  DisplayType: string;
  setDisplayType: React.Dispatch<React.SetStateAction<"line" | "tree">>;
}) => {
  const dispatch = useDispatch();
  const { cryptosList } = useCrypto();
  const [searchText, setSearchText] = useState<string>("");
  const [displayFilterModal, _setDisplayFilterModal] = useState<boolean>(false);
  const { refetch, isLoading } = cryptosList("refresh-data", false, false);
  const controls = useAnimationControls();
  const [_pending, setTransition] = useTransition();
  const setSearchTextCallBack = useMemo(() => {
    dispatch(setCryptoSearch(searchText));
  }, [searchText]);
  useEffect(() => {}, [setSearchTextCallBack]);
  useEffect(() => {
    if (isLoading) {
      controls.start({
        rotate: [0, 360],
        transition: {
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isLoading]);

  return (
    <motion.div className="search-crypto-container">
      <motion.input
        value={searchText}
        onChange={(e) => {
          setTransition(() => {
            setSearchText(e.target.value);
          });
        }}
        placeholder="Search ... "
      />
      <motion.button
        onClick={() => {
          setTransition(() => {
            setDisplayType("line");
          });
        }}
        className={`${DisplayType === "line" ? "selected" : ""}`}
      >
        <img src={lineChart} />
      </motion.button>
      <motion.button
        onClick={() => {
          setTransition(() => {
            setDisplayType("tree");
          });
        }}
        className={`${DisplayType === "tree" ? "selected" : ""}`}
      >
        <img src={TreeChart} />
      </motion.button>
      <motion.button
        onClick={() => {
          setTransition(() => {
            toast.promise(refetch(), {
              pending: "Refreshing Data !",
              success: "Data Refreshed Successfully !",
              error: "Unable To Refresh Data !",
            });
          });
        }}
      >
        <motion.img
          initial={{ rotate: 0 }}
          animate={controls}
          transition={{
            duration: 0.1,
            type: "tween",
            ease: "linear",
          }}
          src={refreshIcon}
          alt="refresh"
        />
      </motion.button>
      <motion.button
        onClick={() => {
          dispatch(
            sortCryptoTable({
              type_name: "RANK",
              type: "ASC",
            })
          );
          toast.success("sorts have been cleared successfully !");
        }}
      >
        <img src={filterIcon} alt="filter" />
      </motion.button>
      <AnimatePresence>{displayFilterModal && <div></div>}</AnimatePresence>
    </motion.div>
  );
};

export default memo(Crypto_Search);
