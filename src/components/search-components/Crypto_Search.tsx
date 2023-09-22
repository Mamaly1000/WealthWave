import React, {
  memo,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { motion, useAnimationControls } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
import { useDispatch, useSelector } from "react-redux";
import { setCryptoSearch } from "../../features/crypto_slice/crypto_slice";
import { CiSearch } from "react-icons/ci";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { BsChevronDown } from "react-icons/bs";
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
  setDisplayType: React.Dispatch<
    React.SetStateAction<"line" | "tree" | "stack">
  >;
}) => {
  const dispatch = useDispatch();
  const { cryptosList } = useCrypto();
  const [searchText, setSearchText] = useState<string>("");
  const [_displayFilterModal, _setDisplayFilterModal] =
    useState<boolean>(false);
  const { isLoading } = cryptosList("refresh-data", false, false);
  const controls = useAnimationControls();
  const [_pending, setTransition] = useTransition();
  const themeSelector = useSelector(selecttheme);
  useMemo(() => {
    dispatch(setCryptoSearch(searchText));
  }, [searchText]);
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
    <motion.div
      style={{ color: themeSelector.headerColor }}
      className="search-crypto-container"
    >
      <div className="input-search">
        <motion.input
          value={searchText}
          onChange={(e) => {
            setTransition(() => {
              setSearchText(e.target.value);
            });
          }}
          animate={{
            background: themeSelector.modalColor,
            borderColor: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
          placeholder="Search ... "
        />
        <CiSearch />
      </div>
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="input-btn">
        currency:{" "}
        <span
          style={{
            borderColor: themeSelector.btnColor,
            background: themeSelector.modalColor,
          }}
          className="entry"
        >
          usd
          <BsChevronDown />
        </span>
      </div>{" "}
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="input-btn">
        show:{" "}
        <span
          style={{
            borderColor: themeSelector.btnColor,
            background: themeSelector.modalColor,
          }}
          className="entry"
        >
          10
          <BsChevronDown />
        </span>
        <span className="text">entries</span>
      </div>
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="input-btn">
        sort:{" "}
        <span
          style={{
            borderColor: themeSelector.btnColor,
            background: themeSelector.modalColor,
          }}
          className="entry"
        >
          price
          <BsChevronDown />
        </span>
      </div>{" "}
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="input-btn">
        filter:{" "}
        <span
          style={{
            borderColor: themeSelector.btnColor,
            background: themeSelector.modalColor,
          }}
          className="entry"
        >
          market-cap
          <BsChevronDown />
        </span>
      </div>{" "}
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="input-btn">
        display:{" "}
        <span
          style={{
            borderColor: themeSelector.btnColor,
            background: themeSelector.modalColor,
          }}
          className="entry"
        >
          table
          <BsChevronDown />
        </span>
      </div>{" "}
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="input-btn">
        favorites:{" "}
        <span
          style={{
            borderColor: themeSelector.btnColor,
            background: themeSelector.modalColor,
          }}
          className="entry"
        >
          off
          <BsChevronDown />
        </span>
      </div>{" "}
    </motion.div>
  );
};

export default memo(Crypto_Search);
