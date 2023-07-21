import useCrypto from "../hooks/useCrypto";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { toast } from "react-toastify";
import {
  IviewPageChartData,
  setCryptoChart,
  setEmptyCryptoCharts,
  setSelectedCoin,
} from "../features/crypto_slice/crypto_slice";
import { useDispatch } from "react-redux";
import Crypto_Chart_Data from "../components/crypto-component/Crypto_Chart_Data";
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
import InfoRow from "../components/view-crypto/InfoRow";
import {
  tagsMotion,
  viewFromLeft,
  viewFromRight,
  viewFromTop,
} from "../motions/viewCryptoMotions";
import TabsSection from "../components/view-crypto/TabsSection";
import CoinChart from "../components/view-crypto/CoinChart";

const View_Crypto = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [communityLength] = useState({
    start: Math.floor(Math.random() * (socialMedia.length - 3)),
    end: socialMedia.length,
  });
  const [day, setDay] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<string>("overview");
  const [displayChildren, setDisplayChildren] = useState<boolean>(false);
  const {
    getChartData,
    getSingleCoinData,
    cryptoSelector,
    chartLists,
    getSelectedChart,
  } = useCrypto();
  const seletedCoin = cryptoSelector.selectedCoin;
  const fetchSingleCoin = getSingleCoinData(
    id as string,
    (data) => {
      dispatch(setSelectedCoin(data?.data as unknown));
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
  const info_table_data = [
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
      data: seletedCoin.genesis_date.replaceAll("-", "/"),
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
  const fetchChart = chartLists(
    id as string,
    day,
    (data) => {
      dispatch(
        setCryptoChart({ id: id, data: data!.data } as IviewPageChartData)
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
    >
      <div className="top-section">
        <div className="crypto-overAll">
          {displayChildren && (
            <div className="top-overall-container">
              <div className="rank-container">
                <motion.span
                  variants={tagsMotion(undefined, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="rank"
                >
                  Rank #{seletedCoin.market_data.market_cap_rank}
                </motion.span>
              </div>
              <div className="crypto-name">
                {seletedCoin.image.thumb && (
                  <motion.img
                    variants={tagsMotion(0.5, 0.5)}
                    initial="hidden"
                    whileInView="visible"
                    src={seletedCoin.image.thumb}
                    alt=""
                  />
                )}
                <motion.span
                  variants={viewFromLeft(2, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="bold"
                >
                  {seletedCoin.id}
                </motion.span>
                <motion.span
                  variants={viewFromLeft(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="light"
                >
                  {seletedCoin.symbol}
                </motion.span>
              </div>
              <div className="crypto-price-percentage">
                <motion.span variants={viewFromTop(1, 0.5)} className="bold">
                  ${seletedCoin.market_data.current_price.usd}
                </motion.span>
                <motion.span
                  variants={viewFromRight(1, 0.5)}
                  className={`percentage ${
                    +seletedCoin.market_data.price_change_percentage_24h > 0
                      ? "green"
                      : "red"
                  }`}
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
                  variants={tagsMotion(2, 0.5)}
                  className="info"
                  src={infoIcon}
                  alt="info"
                />
              </div>
              <div className="crypto-price-per-btc">
                <motion.span
                  variants={viewFromLeft(1, 0.5)}
                  initial="hidden"
                  animate="visible"
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
                    variants={tagsMotion(3, 1)}
                    initial="hidden"
                    animate="visible"
                    className="share"
                  >
                    <img src={shareIcon} alt="share" />
                  </motion.button>
                  <motion.button
                    variants={tagsMotion(3, 1)}
                    initial="hidden"
                    animate="visible"
                    className="save"
                  >
                    <img src={saveIcon} alt="save" />
                  </motion.button>
                </div>
                <motion.span
                  variants={viewFromRight(3, 1)}
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
            <div className="crypto-data-list">
              {!fetchSingleCoin.isFetching &&
                detail_table_data.map((data, index) => (
                  <CryptoDataTable data={data} key={index} index={index} />
                ))}
            </div>
          )}
        </div>
        <div className="crypto-info">
          <h3>Info</h3>
          <div className="info-table">
            {info_table_data.map((row, index) => {
              return <InfoRow row={row} index={index} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="left-section">
          <TabsSection
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />

          {selectedTab === "overview" && (
            <CoinChart day={day} setDay={setDay} />
          )}
        </div>
        <div className="right-section"></div>
      </div>
      <button
        onClick={() => {
          fetchChart.refetch();
        }}
      >
        get chart data
      </button>
      <button
        onClick={() => {
          dispatch(setEmptyCryptoCharts());
          nav(-1);
        }}
      >
        back
      </button>
      {cryptoSelector!.selectedCoin?.name}
      {/* <Crypto_Chart_Data /> */}
    </motion.div>
  );
};

export default View_Crypto;
