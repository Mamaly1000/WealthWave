import { memo, useEffect, useMemo, useState, useTransition } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterType,
  currencySymbol,
  setCryptoSearch,
} from "../../features/crypto_slice/crypto_slice";
import { CiSearch } from "react-icons/ci";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import DropDown, {
  crypto_currency_type,
  crypto_diplay_type,
} from "../drop-sown-component/DropDown";
import { currencies } from "../../Data/cryptoCurrencies";
import {
  crypto_entries_type,
  crypto_sort_type,
} from "../drop-sown-component/DropDown";
import ArrowComponent from "./ArrowComponent";

export type cryptoControlsType =
  | "crypto-currency"
  | "crypto-sort"
  | "crypto-filter"
  | "crypto-favorites"
  | "crypto-entries"
  | "crypto-diplay";

export type currencyDropdownType = {
  title: string;
  value: string;
  items: currencySymbol[];
};

const Crypto_Search = () => {
  const dispatch = useDispatch();
  const { cryptosList, cryptoSelector } = useCrypto();
  const [searchText, setSearchText] = useState<string>("");
  const { isLoading } = cryptosList(
    "refresh-data",
    false,
    false,
    cryptoSelector.currentCurrency.name
  );
  const controls = useAnimationControls();
  const [_pending, setTransition] = useTransition();
  const themeSelector = useSelector(selecttheme);
  const [searchControl, setSearchControl] = useState<cryptoControlsType | "">(
    ""
  );
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
      <div className="search-input-component">
        <Input_Btn
          onclick={() => {
            setSearchControl(
              searchControl === "crypto-currency" ? "" : "crypto-currency"
            );
          }}
          title="currency"
          data={cryptoSelector.currentCurrency.name}
          maintype="crypto-currency"
          searchControl={searchControl}
        />
        <AnimatePresence>
          {searchControl === "crypto-currency" && (
            <DropDown
              content={{
                items: currencies as unknown as crypto_currency_type,
                currentValue: cryptoSelector.currentCurrency.name,
                text: undefined,
                title: "choose your currency:",
                type: "crypto-currency",
              }}
              contentType="crypto-currency"
              setDisplayDropDown={setSearchControl}
            />
          )}
        </AnimatePresence>
      </div>
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="search-input-component">
        <Input_Btn
          onclick={() => {
            setSearchControl(
              searchControl === "crypto-entries" ? "" : "crypto-entries"
            );
          }}
          title="show"
          data={cryptoSelector.pagination.offset + ""}
          maintype="crypto-entries"
          searchControl={searchControl}
          text="entries"
        />
        <AnimatePresence>
          {searchControl === "crypto-entries" && (
            <DropDown
              content={{
                currentValue: cryptoSelector.pagination.offset + "",
                items: [
                  { name: "5", value: 5 },
                  { name: "10", value: 10 },
                  { name: "15", value: 15 },
                  { name: "20", value: 20 },
                  { name: "30", value: 30 },
                  { name: "40", value: 40 },
                  { name: "50", value: 50 },
                  { name: "60", value: 60 },
                  { name: "70", value: 70 },
                  { name: "80", value: 80 },
                  { name: "90", value: 90 },
                  { name: "100", value: 100 },
                  { name: "all", value: cryptoSelector.coinlist.length },
                ] as unknown as crypto_entries_type,
                title: "choose your entries amount:",
                text: "entries",
                type: "crypto-entries",
              }}
              contentType="crypto-entries"
              setDisplayDropDown={setSearchControl}
            />
          )}
        </AnimatePresence>
      </div>
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="search-input-component">
        <Input_Btn
          title="display"
          data={cryptoSelector.displayType}
          maintype="crypto-diplay"
          onclick={() =>
            setSearchControl(
              searchControl === "crypto-diplay" ? "" : "crypto-diplay"
            )
          }
          searchControl={searchControl}
        />
        <AnimatePresence>
          {searchControl === "crypto-diplay" && (
            <DropDown
              content={{
                currentValue: cryptoSelector.displayType,
                items: [
                  "line",
                  "stack",
                  "tree",
                ] as unknown as crypto_diplay_type,
                title: "choose your display data type:",
                text: undefined,
                type: "crypto-diplay",
              }}
              contentType="crypto-diplay"
              setDisplayDropDown={setSearchControl}
            />
          )}
        </AnimatePresence>
      </div>
      <hr style={{ background: themeSelector.btnColor }} />
      <div className="search-input-component">
        <Input_Btn
          title="sort"
          data={
            cryptoSelector.sortType.type_name +
            "-" +
            cryptoSelector.sortType.mode
          }
          maintype="crypto-sort"
          onclick={() =>
            setSearchControl(
              searchControl === "crypto-sort" ? "" : "crypto-sort"
            )
          }
          searchControl={searchControl}
        />
        <AnimatePresence>
          {searchControl === "crypto-sort" && (
            <DropDown
              contentType="crypto-sort"
              setDisplayDropDown={setSearchControl}
              extras={{
                currentValue: cryptoSelector.sortType.mode,
                items: ["asc", "desc"] as unknown as crypto_sort_type,
              }}
              content={{
                currentValue: cryptoSelector.sortType.type_name,
                items: [
                  { name: "24h-percentage", type: "24H" },
                  { name: "24h-vol", type: "24H_VOLUME" },
                  { name: "24h-high", type: "HIGH_24H" },
                  { name: "24h-low", type: "LOW_24H" },
                  { name: "market-cap", type: "MKT_CAP" },
                  { name: "coin-name", type: "NAME" },
                  { name: "market-cap-rank", type: "RANK" },
                  { name: "reset-sorting", type: "N/A" },
                ] as unknown as { name: string; type: FilterType },
                text: "sort by:",
                title: "sort",
                type: "crypto-sort",
              }}
            />
          )}
        </AnimatePresence>
      </div>
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
          {/* <BsChevronDown /> */}
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
          {/* <BsChevronDown /> */}
        </span>
      </div>{" "}
      <hr style={{ background: themeSelector.btnColor }} />
    </motion.div>
  );
};

export default memo(Crypto_Search);

const Input_Value = ({
  data,
  currentType,
  maintype,
  onclick,
}: {
  data: string;
  currentType: cryptoControlsType | "";
  maintype: cryptoControlsType;
  onclick: () => void;
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <span
      style={{
        borderColor: themeSelector.btnColor,
        background: themeSelector.modalColor,
      }}
      className="entry"
      onClick={onclick}
    >
      {data}
      <ArrowComponent currentType={currentType} maintype={maintype} />
    </span>
  );
};

const Input_Btn = ({
  title,
  onclick,
  searchControl,
  maintype,
  data,
  text,
}: {
  title: string;
  onclick: () => void;
  searchControl: cryptoControlsType | "";
  maintype: cryptoControlsType;
  data: string;
  text?: string;
}) => {
  return (
    <div className="input-btn">
      {title}:
      <Input_Value
        onclick={onclick}
        data={data}
        currentType={searchControl}
        maintype={maintype}
      />
      {text && <div className="text">{text}</div>}
    </div>
  );
};
