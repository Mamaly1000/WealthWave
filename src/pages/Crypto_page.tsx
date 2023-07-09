import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  cryptoRowMotion,
  nftCardsMotion,
  removingPageMotion,
} from "../motions/motions";
import { CryptoTable } from "../components/cryto-table/CryptoChart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import useCrypto from "../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import filterIcon from "../assets/crypto/filter.svg";
import refreshIcon from "../assets/crypto/refresh.svg";
import FilterCryptoModal from "../components/cryto-table/FilterCryptoModal";
import saveIcon from "../assets/crypto/save.svg";
import { useDispatch } from "react-redux";
import { fetchCoins } from "../features/crypto_slice/crypto_slice";
const Crypto_page = () => {
  const dispatch = useDispatch();
  const { cryptosList, setLoacalCryptoList, LocalCryptoList, cryptoSelector } =
    useCrypto();
  const [searchText, setSearchText] = useState<string>("");
  const [displayFilterModal, setDisplayFilterModal] = useState<boolean>(false);
  const nav = useNavigate();

  useEffect(() => {
    if (cryptosList.data) {
      dispatch(fetchCoins(cryptosList.data.data));
      setLoacalCryptoList(cryptosList.data.data);
    }
    if (cryptosList.isError) {
      dispatch(fetchCoins(LocalCryptoList));
    }
    console.log(cryptosList.isFetching, cryptosList.isLoading);
  }, [cryptosList]);
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="crypto-main-page"
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 3, type: "spring" }}
        className="page-header"
      >
        Cryptocurrency Prices by Market Cap
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 3, type: "spring" }}
        className="component-title"
      >
        top 10 Cryptocurrencies
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5, type: "tween" }}
        viewport={{ once: true }}
        className="top-crypto"
      >
        <Swiper
          className="top-crypto"
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {!cryptosList.isLoading || !cryptosList.isFetching
            ? cryptoSelector.coinlist.slice(0, 10).map((coin, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => nav(`/crypto/${coin!.id}`)}
                  >
                    <motion.div
                      variants={nftCardsMotion(index)}
                      initial="hidden"
                      whileInView="visible"
                      exit="exit"
                      className="top-crypto-component"
                    >
                      <div className="component-row">
                        <img src={coin!.image} alt="" className="coin-img" />{" "}
                        <span
                          className="blod"
                          style={{
                            fontSize: coin!.id.length > 10 ? ".9rem" : "",
                          }}
                        >
                          {coin!.id}
                        </span>{" "}
                        <span className="blur-text">{coin!.symbol}/usd</span>
                      </div>
                      <div className="current-price component-row">
                        usd {coin!.current_price}$
                      </div>
                      <div className="component-row">
                        <span className="blur-text market-cap">
                          {coin!.market_cap.toLocaleString()}
                        </span>
                        <span
                          className={`percentage-container ${
                            +coin!.price_change_percentage_24h > 0
                              ? "green"
                              : "red"
                          }`}
                        >
                          {coin!.price_change_percentage_24h}%
                        </span>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })
            : "123456".split("").map((n, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="loading-animation"
                  ></SwiperSlide>
                );
              })}
        </Swiper>
      </motion.div>
      <motion.div className="search-crypto-container">
        <motion.input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search ... "
        />
        <motion.button onClick={() => setDisplayFilterModal(true)}>
          <img src={filterIcon} alt="filter" />
        </motion.button>
        <motion.button
          onClick={() => {
            cryptosList.refetch();
          }}
        >
          <img src={refreshIcon} alt="refresh" />
        </motion.button>
      </motion.div>
      <motion.div className="crypto-table-container">
        <motion.table>
          <thead>
            <th>
              <td className="rank-td">#</td>
              <td className="coin-td">coin</td>
              <td className="price-td">price</td>
              <td className="low-td">low-24h</td>
              <td className="high-td">high-24h</td>
              <td className="percentage-td">24h</td>
              <td className="volume-td">24h volume</td>
              <td className="market-cap-td">mkt cap</td>
              <td className="chart-td">last 7 days</td>
            </th>
          </thead>
          <motion.tbody>
            {!cryptosList.isLoading || !cryptosList.isFetching
              ? cryptoSelector.coinlist.slice(0, 10).map((coin, index) => {
                  return (
                    <motion.tr
                      variants={cryptoRowMotion(index)}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key={index}
                      onClick={() => nav(`/crypto/${coin!.id}`)}
                    >
                      <td className="rank-td">
                        <button>
                          <img src={saveIcon} alt="save" />
                        </button>
                        {coin.market_cap_rank}
                      </td>
                      <td className="coin-td">
                        <img src={coin!.image} alt={coin.id} />
                        {coin.id}
                        <span>{coin.symbol}</span>
                      </td>
                      <td className="price-td">${coin.current_price}</td>
                      <td
                        className={`low-td ${
                          +coin.low_24h > +coin.high_24h
                            ? "green-text"
                            : "red-text"
                        }`}
                      >
                        ${coin.low_24h}
                      </td>
                      <td
                        className={`high-td ${
                          +coin.high_24h > +coin.low_24h
                            ? "green-text"
                            : "red-text"
                        }`}
                      >
                        ${coin.high_24h}
                      </td>
                      <td
                        className={`percentage-td ${
                          +coin.price_change_percentage_24h > 0
                            ? "green-text"
                            : "red-text"
                        }`}
                      >
                        {coin.price_change_percentage_24h}%
                      </td>
                      <td className="volume-td">{coin.total_volume}$</td>
                      <td
                        className={`market-cap-td ${
                          +coin.market_cap_change_24h > 0
                            ? "green-text"
                            : "red-text"
                        }`}
                      >
                        {coin.market_cap_change_24h}$
                      </td>
                      <td className="chart-td">
                        <CryptoTable width={"130px"} height={"100%"} />
                      </td>
                    </motion.tr>
                  );
                })
              : "123456".split("").map((c, index) => {
                  return (
                    <motion.tr
                      variants={cryptoRowMotion(index)}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key={index}
                      className="loading-animation"
                    ></motion.tr>
                  );
                })}
          </motion.tbody>
        </motion.table>
      </motion.div>
      <FilterCryptoModal
        show={displayFilterModal}
        setShow={setDisplayFilterModal}
      />
    </motion.div>
  );
};

export default Crypto_page;
