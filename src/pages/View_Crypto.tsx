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
import Qicon from "./../assets/crypto/question.svg";

const View_Crypto = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
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
      display: true,
      title: "Market Cap",
      title_def:
        "Market Cap = Current Price x Circulating Supply  Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)  ",
      value: seletedCoin.market_data.market_cap.usd,
    },
    {
      display: true,
      title: "24 Hour Trading Vol",
      title_def:
        "A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times. ",
      value: seletedCoin.market_data.total_volume.usd,
    },
    {
      display: true,
      title: "Fully Diluted Valuation",
      title_def:
        "FDV = Current Price x Max Supply (or total supply if max supply is invalid)  The market capitalization (valuation) if the max supply of a coin is in circulation. Note that it can take 3, 5, 10 or more years before the FDV can be reached, depending on how the emission schedule is designed.",
      value: seletedCoin.market_data.fdv_to_tvl_ratio,
    },
    {
      display: true,
      title: "Circulating Supply",
      title_def:
        "The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments). ",
      value: seletedCoin.market_data.circulating_supply,
    },
    {
      display: true,
      title: "Total Supply",
      title_def:
        "The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.  Total Supply = Onchain supply - burned tokens",
      value: seletedCoin.market_data.total_supply,
    },
    {
      display: true,
      title: "Max Supply",
      title_def:
        "The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.  Max Supply = Theoretical maximum as coded",
      value: seletedCoin.market_data.max_supply,
    },
  ];
  const fetchChart = chartLists(
    id as string,
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
    >
      <div className="top-section">
        <div className="crypto-overAll">
          <div className="top-overall-container">
            <div className="rank-container">
              <span className="rank">
                Rank #{seletedCoin.market_data.market_cap_rank}
              </span>
            </div>
            <div className="crypto-name">
              <motion.img src={seletedCoin.image.thumb} alt="" />
              <span className="bold">{seletedCoin.id}</span>
              <span className="light">{seletedCoin.symbol}</span>
            </div>
            <div className="crypto-price-percentage">
              <span className="bold">
                ${seletedCoin.market_data.current_price.usd}
              </span>
              <span className="percentage">
                <img src={arrowPerIcon} alt="arrow" />
                {seletedCoin.market_data.price_change_percentage_24h}%
              </span>
              <img className="info" src={infoIcon} alt="info" />
            </div>
            <div className="crypto-price-per-btc">
              <span className="crypto-price-btc">
                {seletedCoin.market_data.current_price.btc} BTC
              </span>
              <span className="crypto-percent-btc">
                {seletedCoin.market_data.ath_change_percentage.btc}
                % <img src={arrowIcon} alt="arrow" />
              </span>
            </div>
            <div className="crypto-actions-container">
              <div className="btn-container">
                <button className="share">
                  <img src={shareIcon} alt="share" />
                </button>
                <button className="save">
                  <img src={saveIcon} alt="save" />
                </button>
              </div>
              <span className="wish-List">
                <img src={starIcon} alt="star" />
                On {seletedCoin.watchlist_portfolio_users.toLocaleString()}{" "}
                watchlists
              </span>
            </div>
          </div>
          <div className="crypto-data-list">
            {detail_table_data.map((data, index) => (
              <div className="list-item" key={index}>
                <span className="title">
                  {data.title} <img src={Qicon} alt="question" />
                </span>
                <span className="value">
                  {data.value ? "$" + data.value?.toLocaleString() : "N/A"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="extra-detail">sa</div>
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
      <Crypto_Chart_Data />
    </motion.div>
  );
};

export default View_Crypto;
