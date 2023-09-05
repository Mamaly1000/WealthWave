import useCrypto from "../hooks/useCrypto";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { toast } from "react-toastify";
import {
  IviewPageChartData,
  setCryptoChart,
  setEmptyCryptoCharts,
  setSelectedCoin,
} from "../features/crypto_slice/crypto_slice";
import { useDispatch, useSelector } from "react-redux";
import infoIcon from "./../assets/crypto/info.svg";
import arrowIcon from "./../assets/crypto/arrow.svg";
import arrowPerIcon from "./../assets/crypto/arrowPerIcon.svg";
import shareIcon from "./../assets/crypto/share.svg";
import saveIcon from "./../assets/crypto/save.svg";
import starIcon from "./../assets/crypto/star.svg";
import moment from "moment";
import { socialMedia } from "../Data/dummy";
import { useState } from "react";
import CryptoDataTable from "../components/view-crypto/CryptoDataTable";
import backIcon from "./../assets/crypto/back.svg";
import {
  tagsMotion,
  viewFromLeft,
  viewFromRight,
} from "../motions/viewCryptoMotions";
import TabsSection from "../components/view-crypto/TabsSection";
import CoinChart from "../components/view-crypto/CoinChart";
import CryptoDescription from "../components/view-crypto/CryptoDescription";
import MarketsTable from "../components/view-crypto/MarketsTable";
import CoinConvertor from "../components/view-crypto/CoinConvertor";
import CoinDataTable from "../components/view-crypto/CoinDataTable";
import RelatedCoins from "../components/view-crypto/RelatedCoins";
import InfoRow from "../components/view-crypto/InfoRow";
import { selecttheme } from "../features/theme_slice/theme_slice";

const View_Crypto = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [communityLength] = useState({
    start: Math.floor(Math.random() * (socialMedia.length - 3)),
    end: socialMedia.length,
  });
  const themeSelector = useSelector(selecttheme);
  const [selectedTab, setSelectedTab] = useState<string>("overview");
  const [displayChildren, setDisplayChildren] = useState<boolean>(false);
  const { getSingleCoinData, cryptoSelector, chartLists, cryptosList } =
    useCrypto();
  const seletedCoin = cryptoSelector.selectedCoin;
  const fetchSingleCoin = getSingleCoinData(
    id as string,
    (data) => {
      dispatch(setSelectedCoin(data!.data as any));
      toast.success("fetch data successfully");
    },
    () => {
      fetchSingleCoin.refetch();
    },
    true,
    false,
    false,
    5000
  );
  const detail_table_data = [
    {
      display: false,
      title: "Market Cap",
      title_def:
        "Market Cap = Current Price x Circulating Supply  Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)  ",
      value: seletedCoin.market_data.market_cap.usd,
      data: [
        { name: "btc", data: seletedCoin.market_data.market_cap.btc },
        { name: "usd", data: seletedCoin.market_data.market_cap.usd },
      ],
    },
    {
      display: false,
      title: "24 Hour Trading Vol",
      title_def:
        "A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times. ",
      value: seletedCoin.market_data.total_volume.usd,
      data: [
        {
          name: "btc",
          data: seletedCoin.market_data.total_volume.btc,
        },
        {
          name: "usd",
          data: seletedCoin.market_data.total_volume.usd,
        },
      ],
    },
    {
      display: false,
      title: "Fully Diluted Valuation",
      title_def:
        "FDV = Current Price x Max Supply (or total supply if max supply is invalid)  The market capitalization (valuation) if the max supply of a coin is in circulation. Note that it can take 3, 5, 10 or more years before the FDV can be reached, depending on how the emission schedule is designed.",
      value: seletedCoin.market_data.fdv_to_tvl_ratio,
      data: [
        {
          name: "btc",
          data: seletedCoin.market_data.fully_diluted_valuation.btc,
        },
        {
          name: "usd",
          data: seletedCoin.market_data.fully_diluted_valuation.usd,
        },
      ],
    },
    {
      display: true,
      title: "Circulating Supply",
      title_def:
        "The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments). ",
      value: seletedCoin.market_data.circulating_supply,
      data: [],
    },
    {
      display: true,
      title: "Total Supply",
      title_def:
        "The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.  Total Supply = Onchain supply - burned tokens",
      value: seletedCoin.market_data.total_supply,
      data: [],
    },
    {
      display: true,
      title: "Max Supply",
      title_def:
        "The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.  Max Supply = Theoretical maximum as coded",
      value: seletedCoin.market_data.max_supply,
      data: [],
    },
  ];
  const info_table_data: {
    name: string;
    data:
      | number
      | string
      | {
          name: string;
          data: number;
        }[]
      | string[]
      | {
          name: string;
          pic: string;
        }[];
  }[] = [
    {
      name: "wealthwave rank",
      data: seletedCoin.coingecko_rank,
    },
    {
      name: "scores",
      data: [
        {
          name: "public interest score",
          data: seletedCoin.public_interest_score,
        },
        {
          name: "developer score",
          data: seletedCoin.developer_score,
        },
        {
          name: "wealthwave score",
          data: seletedCoin.coingecko_score,
        },
        { name: "liquidity score", data: seletedCoin.liquidity_score },
      ],
    },
    {
      name: "public interest stats",
      data: seletedCoin.public_interest_stats.alexa_rank,
    },
    {
      name: "categories",
      data: seletedCoin.categories,
    },
    {
      name: "genesis date",
      data: seletedCoin.genesis_date
        ? seletedCoin.genesis_date.replaceAll("-", "/")
        : "N/A",
    },
    {
      name: "last updated",
      data: moment(seletedCoin.last_updated).format("YYYY/MM/DD-HH:MM"),
    },
    { name: "hashing algorithm", data: seletedCoin.hashing_algorithm },
    {
      name: "sentiment votes percentage",
      data: [
        { name: "up", data: seletedCoin.sentiment_votes_up_percentage },
        {
          name: "down",
          data: seletedCoin.sentiment_votes_down_percentage,
        },
      ],
    },
    {
      name: "community",
      data: socialMedia.slice(communityLength.start, communityLength.end),
    },
  ];
  const { isLoading: _chartLoading } = chartLists(
    id as string,
    cryptoSelector.cryptoDay,
    (data) => {
      dispatch(
        setCryptoChart({
          id: id,
          data: data!.data,
          day: cryptoSelector.cryptoDay,
        } as IviewPageChartData)
      );
    },
    () => {
      toast.error(`failed to get ${id} chart data`);
    },
    true,
    false,
    true,
    5000
  );
  const { isLoading: _CoinsLoading } = cryptosList(
    "fetch-related-coins",
    true,
    true
  );

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="view-crypto-page"
      onAnimationComplete={() => {
        setDisplayChildren(true);
      }}
      style={{
        color: themeSelector.headerColor,
      }}
    >
      <div className="top-section">
        <div className="crypto-overAll">
          {displayChildren && (
            <div className="top-overall-container">
              <div className="rank-container">
                <motion.span
                  animate={{ background: themeSelector.btnColor }}
                  className="rank"
                >
                  Rank #{seletedCoin.market_data.market_cap_rank}
                </motion.span>
              </div>
              <motion.div className="crypto-name">
                <img src={seletedCoin.image.thumb} alt="" />
                <span
                  style={{
                    color: themeSelector.headerColor,
                  }}
                  className="bold"
                >
                  {seletedCoin.id}
                </span>
                <span
                  style={{
                    color: themeSelector.plainTextColor,
                  }}
                  className="light"
                >
                  {seletedCoin.symbol}
                </span>
              </motion.div>
              <div className="crypto-price-percentage">
                <motion.span
                  className="bold"
                  style={{
                    color: themeSelector.headerColor,
                  }}
                >
                  ${seletedCoin.market_data.current_price.usd.toLocaleString()}
                </motion.span>
                <motion.span
                  className={`percentage ${
                    +seletedCoin.market_data.price_change_percentage_24h > 0
                      ? "green"
                      : "red"
                  }`}
                  style={{
                    color: themeSelector.headerColor,
                  }}
                >
                  <motion.img
                    src={arrowPerIcon}
                    alt="arrow"
                    style={{
                      transform:
                        +seletedCoin.market_data.price_change_percentage_24h > 0
                          ? "rotateX(180deg)"
                          : "rotateX(0)",
                    }}
                  />
                  {seletedCoin.market_data.price_change_percentage_24h}%
                </motion.span>
                <motion.img
                  variants={viewFromLeft(33, 0.2)}
                  initial="hidden"
                  animate="visible"
                  className="info"
                  src={infoIcon}
                  alt="info"
                />
              </div>
              <div className="crypto-price-per-btc">
                <motion.span
                  style={{
                    color: themeSelector.headerColor,
                  }}
                  className="crypto-price-btc"
                >
                  {seletedCoin.market_data.current_price.btc} BTC
                </motion.span>
                <motion.span
                  className={`crypto-percent-btc ${
                    +seletedCoin.market_data.ath_change_percentage.btc > 0
                      ? "green-text"
                      : "red-text"
                  }`}
                  style={{
                    color: themeSelector.headerColor,
                  }}
                >
                  {seletedCoin.market_data.ath_change_percentage.btc}%{" "}
                  <img
                    src={arrowIcon}
                    alt="arrow"
                    className={`${
                      +seletedCoin.market_data.ath_change_percentage.btc > 0
                        ? "green-filter"
                        : "red-filter"
                    }`}
                    style={{
                      transform:
                        +seletedCoin.market_data.ath_change_percentage.btc > 0
                          ? "rotateZ(0)"
                          : "rotateZ(180deg)",
                    }}
                  />
                </motion.span>
              </div>
              <div className="crypto-actions-container">
                <div className="btn-container">
                  <motion.button
                    whileHover={{ background: themeSelector.hoverColor }}
                    transition={{ duration: 0.1 }}
                    style={{
                      background: themeSelector.btnColor,
                      color: themeSelector.headerColor,
                    }}
                    onClick={() => {
                      dispatch(setEmptyCryptoCharts());
                      nav(-1);
                    }}
                  >
                    <img src={backIcon} alt="back" />
                  </motion.button>
                  <motion.button
                    whileHover={{ background: themeSelector.hoverColor }}
                    transition={{ duration: 0.1 }}
                    style={{
                      background: themeSelector.btnColor,
                      color: themeSelector.headerColor,
                    }}
                    className="share"
                  >
                    <img src={shareIcon} alt="share" />
                  </motion.button>
                  <motion.button
                    whileHover={{ background: themeSelector.hoverColor }}
                    transition={{ duration: 0.1 }}
                    style={{
                      background: themeSelector.btnColor,
                      color: themeSelector.headerColor,
                    }}
                    className="save"
                  >
                    <img src={saveIcon} alt="save" />
                  </motion.button>
                </div>
                <motion.span
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                  className="wish-List"
                >
                  <img src={starIcon} alt="star" />
                  On {seletedCoin.watchlist_portfolio_users.toLocaleString()}{" "}
                  watchlists
                </motion.span>
              </div>
            </div>
          )}
          {displayChildren && (
            <div
              style={{
                color: themeSelector.headerColor,
              }}
              className="crypto-data-list"
            >
              {!fetchSingleCoin.isFetching &&
                detail_table_data.map((data, index) => (
                  <CryptoDataTable data={data} key={index} index={index} />
                ))}
            </div>
          )}
        </div>
        <div className="crypto-info">
          <h3>Info</h3>
          {displayChildren && (
            <div className="info-table">
              {displayChildren &&
                info_table_data.map((row, index) => {
                  return <InfoRow row={row} index={index} key={index} />;
                })}
            </div>
          )}
        </div>
      </div>
      <div className="bottom-section">
        <div className="left-section">
          <TabsSection
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <AnimatePresence>
            {selectedTab === "overview" && <CoinChart />}
          </AnimatePresence>
          <AnimatePresence presenceAffectsLayout>
            {selectedTab === "description" && <CryptoDescription />}
          </AnimatePresence>
          <AnimatePresence presenceAffectsLayout>
            {selectedTab === "markets" && <MarketsTable />}
          </AnimatePresence>
        </div>
        <div className="right-section">
          <CoinConvertor />
          <CoinDataTable />
          <RelatedCoins />
        </div>
      </div>
    </motion.div>
  );
};

export default View_Crypto;
