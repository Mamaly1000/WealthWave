import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cryptoRowMotion, removingPageMotion } from "../motions/motions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import useCrypto from "../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import FilterCryptoModal from "../components/cryto-table/FilterCryptoModal";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import Crypto_Search from "../components/search-components/Crypto_Search";
import CryptoLine from "../components/crypto-component/CryptoLine";
import { useContextFunction } from "../context/AppContext";
import TopCryptoCard from "../components/crypto-component/TopCryptoCard";
import TrendCryptoCard from "../components/crypto-component/TrendCryptoCard";
const Crypto_page = () => {
  const nav = useNavigate();
  const { cryptosList, cryptoSelector, getTrendCoins } = useCrypto();
  const contextData = useContextFunction();
  const [displayFilterModal, setDisplayFilterModal] = useState<boolean>(false);
  const [displayTrendCoins, setDisplayTrendCoins] = useState<boolean>(false);
  const [displayCryptoLines, setDisplayCryptoLines] = useState<boolean>(false);
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(cryptoSelector.coinlist.length / 10);
  const currentCryptoData = cryptosList("fetch-crypto-list", true, true);
  const fetch_trend_coins = getTrendCoins();

  const cryptoData = useMemo(() => {
    return cryptoSelector.coinlist
      .slice(itemOffset, itemOffset + 10)
      .filter(
        (c) =>
          c.id
            .toLowerCase()
            .includes(cryptoSelector.cryptoSearch.toLowerCase()) ||
          c.symbol
            .toLowerCase()
            .includes(cryptoSelector.cryptoSearch.toLowerCase())
      );
  }, [cryptoSelector.cryptoSearch, itemOffset, fetch_trend_coins]);

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
        transition={{ delay: 1, duration: 3, type: "tween" }}
        className="page-header"
      >
        Cryptocurrency Prices by Market Cap
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 3,
          type: "tween",
          x: {
            duration: 3,
          },
        }}
        className="component-title"
      >
        Trend Cryptocurrencies
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="top-crypto"
        onAnimationComplete={() => {
          setDisplayTrendCoins(true);
        }}
      >
        <Swiper
          className="top-crypto"
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {!fetch_trend_coins.isLoading || !fetch_trend_coins.isFetching
            ? cryptoSelector.trend_coins.map((coin, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => nav(`/crypto/${coin!.item!.id}`)}
                  >
                    {displayTrendCoins && (
                      <TrendCryptoCard coin={coin} index={index} />
                    )}
                  </SwiperSlide>
                );
              })
            : "123456".split("").map((n) => {
                return (
                  <SwiperSlide
                    key={n}
                    className="loading-animation"
                  ></SwiperSlide>
                );
              })}
        </Swiper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5, type: "tween" }}
        className="component-title"
      >
        Top Cryptocurrencies
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "tween",
        }}
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
          {!currentCryptoData.isLoading || !currentCryptoData.isFetching
            ? cryptoSelector.coinlist.slice(0, 10).map((coin, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => nav(`/crypto/${coin.id}`)}
                  >
                    <TopCryptoCard coin={coin} index={index} key={index} />;
                  </SwiperSlide>
                );
              })
            : "123456".split("").map((n) => {
                return (
                  <SwiperSlide
                    key={n}
                    className="loading-animation"
                  ></SwiperSlide>
                );
              })}
        </Swiper>
      </motion.div>
      <Crypto_Search
        displayFilterModal={displayFilterModal}
        setDisplayFilterModal={setDisplayFilterModal}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "tween" }}
        viewport={{ once: true }}
        onAnimationComplete={() => {
          setDisplayCryptoLines(true);
        }}
        className="crypto-table-container"
      >
        <motion.table
          drag="x"
          dragConstraints={{
            right: 10,
            left: -1080,
          }}
          dragSnapToOrigin={contextData!.screenW}
        >
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
          <motion.tbody
            initial={{ height: 200 }}
            animate={{ height: displayCryptoLines ? 610 : 200 }}
            transition={{ duration: 1, type: "tween" }}
          >
            {!currentCryptoData.isLoading || !currentCryptoData.isFetching
              ? cryptoData.map((coin, index) => {
                  return (
                    displayCryptoLines && (
                      <CryptoLine coin={coin} index={index} key={index} />
                    )
                  );
                })
              : "123456".split("").map((c, index) => {
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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "tween" }}
        className="pagination-container"
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(e) => {
            const newOffset =
              (e.selected * 10) % cryptoSelector.coinlist.length;
            setItemOffset(newOffset);
            window.scroll({ top: 100 });
          }}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="crypto-pagination"
          pageLinkClassName="crypto-pagination-links"
          activeLinkClassName="activeClassName"
          onPageActive={() => {
            window.scroll({ top: 100 });
            toast.success("you are already at this page");
          }}
          nextClassName="crypto-pagination-nav"
          previousClassName="crypto-pagination-nav"
          breakClassName="crypto-pagination-breaks"
        />
      </motion.div>
      <FilterCryptoModal
        show={displayFilterModal}
        setShow={setDisplayFilterModal}
      />
    </motion.div>
  );
};

export default Crypto_page;
